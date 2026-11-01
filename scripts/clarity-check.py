#!/usr/bin/env python3
"""Clarity check for Decision Layer posts (rules: docs/post-brief.md, "Clarity rules").

Usage: python3 scripts/clarity-check.py src/content/posts/<slug>.md
Exit code 0 = passes, 1 = breaks a limit. A post that fails does not go to Peter.
The developer section, tables, code, fine print and sources are exempt from the
sentence and jargon limits (they are reference material, not the story).
"""
import re, sys

TITLE_MAX_WORDS = 16
DEK_MAX_WORDS = 35
STAT_LABEL_MAX_WORDS = 10
AVG_SENTENCE_MAX = 16
SENTENCE_MAX = 28
NUMS_PER_SENTENCE = 1
NUMS_PER_PARAGRAPH = 2
SENTENCES_PER_PARAGRAPH = 4
JARGON = ["confidence gate", "replay", "calibrat", "frontier", "typed question", "fallback",
          "latency", "token", "inference", "benchmark", "workspace", "labelled", "labeled",
          "routing", "pipeline", "leverage", "unlock", "seamless", "robust", "orchestrat",
          "use case", "at scale", "paradigm", "holistic", "ecosystem"]
EXEMPT_HEADINGS = ("for your developer", "the fine print", "sources")
NUM = re.compile(r"(?<![\w.])\$?\d[\d,]*(?:\.\d+)?(?:%|x\b)?")

def nums(s):
    # years don't count, and "15 of 20" is one fact, not two numbers
    s = re.sub(r"(\d[\d,]*)\s+(?:out\s+)?of\s+(?:the\s+)?\d[\d,]*", r"\1", s)
    return [n for n in NUM.findall(s) if not re.fullmatch(r"(19|20)\d\d", n)]

def words(s):
    return len(s.split())

def sentences(p):
    p = " ".join(p.split())
    parts = re.split(r"(?<=[.!?])[”\"’]?\s+(?=[A-Z“\"‘(\d$])", p)
    return [s for s in parts if words(s) > 1]

def main(path):
    text = open(path, encoding="utf-8").read()
    fm, body = text.split("\n---\n", 1) if text.startswith("---") else ("", text)
    problems = []
    title = re.search(r'^title:\s*"(.*)"', fm, re.M)
    dek = re.search(r'^dek:\s*"(.*)"', fm, re.M)
    if title:
        t = title.group(1)
        if words(t) > TITLE_MAX_WORDS: problems.append(f"TITLE {words(t)} words (max {TITLE_MAX_WORDS})")
        if len(nums(t)) > 1: problems.append(f"TITLE has {len(nums(t))} numbers (max 1)")
    if dek:
        d = dek.group(1)
        if words(d) > DEK_MAX_WORDS: problems.append(f"DEK {words(d)} words (max {DEK_MAX_WORDS})")
        if len(nums(d)) > 1: problems.append(f"DEK has {len(nums(d))} numbers (max 1)")
        for s in sentences(d):
            if words(s) > 22: problems.append(f"DEK sentence {words(s)} words (max 22): {s[:80]}")
    for lab in re.findall(r'^\s+label:\s*"(.*)"', fm, re.M):
        if words(lab) > STAT_LABEL_MAX_WORDS: problems.append(f"STAT LABEL {words(lab)} words (max {STAT_LABEL_MAX_WORDS}): {lab[:60]}")

    body = re.sub(r"```.*?```", "", body, flags=re.S)
    exempt = False
    paras, cur = [], []
    for line in body.split("\n"):
        if line.startswith("#"):
            if cur: paras.append(" ".join(cur)); cur = []
            exempt = line.lstrip("#").strip().lower().startswith(EXEMPT_HEADINGS)
            continue
        if exempt or line.strip().startswith("|"):
            continue
        if not line.strip():
            if cur: paras.append(" ".join(cur)); cur = []
            continue
        if re.match(r"\s*(\d+\.|-)\s+", line):  # each list item is its own paragraph
            if cur: paras.append(" ".join(cur)); cur = []
            paras.append(re.sub(r"^\s*(\d+\.|-)\s+", "", line.strip()))
            continue
        cur.append(line.strip())
    if cur: paras.append(" ".join(cur))

    all_sents = []
    for p in paras:
        clean = re.sub(r"\[([^\]]*)\]\([^)]*\)", r"\1", p)
        clean = re.sub(r"[*_]", "", clean)
        clean = re.sub(r"^(\d+\.|-)\s+", "", clean)
        ss = sentences(clean)
        all_sents += ss
        if len(nums(clean)) > NUMS_PER_PARAGRAPH:
            problems.append(f"PARAGRAPH has {len(nums(clean))} numbers (max {NUMS_PER_PARAGRAPH}): {clean[:70]}")
        if len(ss) > SENTENCES_PER_PARAGRAPH:
            problems.append(f"PARAGRAPH has {len(ss)} sentences (max {SENTENCES_PER_PARAGRAPH}): {clean[:70]}")
        for s in ss:
            if words(s) > SENTENCE_MAX: problems.append(f"SENTENCE {words(s)} words (max {SENTENCE_MAX}): {s[:90]}")
            if len(nums(s)) > NUMS_PER_SENTENCE: problems.append(f"SENTENCE has {len(nums(s))} numbers (max {NUMS_PER_SENTENCE}): {s[:90]}")
        low = clean.lower()
        for j in JARGON:
            if j in low: problems.append(f"JARGON '{j}': {clean[:70]}")
        if ";" in clean: problems.append(f"SEMICOLON: {clean[:70]}")
        for par in re.findall(r"\(([^)]*)\)", clean):
            if not re.search(r"report|demo|vendor|unverified|independent", par, re.I):
                problems.append(f"ASIDE in brackets: ({par[:60]})")
    if all_sents:
        avg = sum(words(s) for s in all_sents) / len(all_sents)
        print(f"{len(all_sents)} sentences, average {avg:.1f} words")
        if avg > AVG_SENTENCE_MAX: problems.append(f"AVERAGE sentence {avg:.1f} words (max {AVG_SENTENCE_MAX})")
    for p in problems: print("FAIL", p)
    print("PASS" if not problems else f"{len(problems)} problems")
    return 1 if problems else 0

if __name__ == "__main__":
    sys.exit(main(sys.argv[1]))
