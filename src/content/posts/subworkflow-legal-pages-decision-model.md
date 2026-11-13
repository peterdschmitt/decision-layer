---
title: "How a document startup’s AI learned to say “not found” with a decision model"
dek: "Stop using LLMs alone. In a test on a made-up legal file, Subworkflow had a decision model judge the pages first. It found the right page more often and marked most missing answers “not found.”"
kind: Explainer
readMinutes: 9
author: Peter Schmitt
audience: For executives whose AI answers questions from contracts, invoices and case files
published: 2026-11-13
lastChecked: 2026-11-13
modelVersion: jev-1.14
stats:
  - value: "19 of 20"
    label: "questions with the right page ranked first; search managed 12"
  - value: "8 of 10"
    label: "no-answer questions marked “not found” before the LLM was asked"
  - value: "0 of 20"
    label: "real answers wrongly marked “not found”"
  - value: "Under half a second"
    label: "typical time for the decision model to judge a page"
statsNote: "All four come from one test Subworkflow ran on a made-up 300-page legal file and published Oct. 18, 2026. Nothing has shipped. The fine print says more."
sources:
  - title: "Subworkflow: RAG vs JAG: when you know the questions, you don't need embeddings (Jim Le, Oct. 18, 2026)"
    url: https://subworkflow.ai/blog/ragextract/rag-vs-jag
    grade: Company report
  - title: "TypeSafe Master Customer Agreement (last updated Sept. 23, 2026)"
    url: https://typesafe.ai/legal/mca
    grade: Official docs
  - title: "TypeSafe docs: Models (how Jev is trained)"
    url: https://docs.typesafe.ai/models.md
    grade: Official docs
  - title: "AgentRun: You may not need an agent after all (Miguel Rios Berrios, Parcha Labs, Oct. 30, 2026)"
    url: https://agentrun.ai/blog/you-may-not-need-an-agent-after-all
    grade: Company report
---

Picture a paralegal with a 300-page file from a business dispute. It holds emails, invoices, meeting notes and scanned letters, some of them sideways.

The paralegal asks the software for the total on invoice AEC-2025-101234. There is no such invoice.

## The trap

Most AI tools that answer from documents work the same way. A search finds the pages that look most like the question. An LLM, the kind of AI behind ChatGPT, reads those pages and writes the answer.

The search always hands over pages, even when none of them holds the answer. The LLM is left to notice that. Often it tries to answer anyway, Subworkflow says.

So the paralegal may get a number for an invoice that doesn’t exist. Used alone, the LLM gives no sign of when that happens. That is an unknown risk on every answer.

However, when coupled with a decision model, the software can say “not found” before the LLM is asked.

A decision model is an AI that answers a fixed yes-or-no question and gives a percentage. Here the question is: does this page answer this question? It writes no words, so it is fast and cheap.

## The story

**Who.** Subworkflow, founded by Jim Le, sells Ragextract, a tool for pulling answers out of documents. Its users build a table, and each column is a question.

Typical columns: What is the total on this invoice? Who signed the agreement? When can it be terminated?

**The insight.** Subworkflow’s team noticed that the questions are written before any document arrives. So a decision model could judge whether each page answers each question.

**Before.** Ragextract turns every page into a kind of digital fingerprint. Each question pulls back the six pages whose fingerprints look most like it. The LLM reads those six and writes the answer.

**The change.** Subworkflow tested a decision model, Jev from a company called TypeSafe, as a judge. The search still picks a shortlist of 15 pages. Jev then gives each page a percentage: how likely it is to answer the question.

The LLM reads the six pages Jev rates highest and writes the answer, as before.

The team set a bar in advance: a minimum score of 30%. If no page clears it, the cell says “not found,” and the LLM is never asked.

**The test.** Subworkflow built a made-up legal file for a made-up dispute between two companies. It ran to 300 pages, with many scanned pages and handwritten notes.

The team wrote 30 questions. Twenty had answers somewhere in the file.

Ten did not. Some were traps, such as an agreement that was never made.

People who did not know which method had found each page graded the results.

## The result

**The right page, first.** The decision model put an answer page first for 19 of the 20 real questions. The search alone did it for 12.

The search’s worst miss shows why. The file held 20 invoices with the same layout. To the search, they all looked alike, so it ranked the right invoice 12th.

The LLM reads only six pages, so it never saw that invoice. Jev read the invoice number and ranked the page first.

**“Not found” you can trust.** The decision model caught 8 of the 10 missing answers. It wrongly marked none of the real answers “not found.” Search, at the best cut-off on its own match scores, caught only 3 of the 10.

The made-up invoice number got a higher match score from search than most of the real answers did.

**Where it slipped.** Two traps fooled the decision model. One asked when a “Metering Services Agreement” could end. No such agreement exists, but a similar one had an ending clause.

The other asked what settlement the two sides had agreed. None was ever reached, but an email proposed a payment plan. In both cases the LLM still read the pages, and it could still decline to answer.

## The twist

The test went well. Subworkflow still won’t send its customers’ documents to Jev.

Ragextract’s users upload contracts, invoices, medical letters and case files. TypeSafe’s contract says it won’t train on customer data without consent.

But it also lets TypeSafe use what it calls telemetry. That includes what it learns from how customers use the service. TypeSafe may use it “without restriction, including to improve the Services or TypeSafe’s other products and services.”

The contract also lets TypeSafe use customer data, in perpetuity, to produce that telemetry.

Subworkflow says it won’t accept those terms for this kind of data without clarity in writing. Its next step is a different decision model, or terms it can sign. Nothing has shipped yet.

## My verdict

If you know your questions before the documents arrive, let a decision model judge the pages. That covers a table of fields pulled from each file, a review checklist or a due-diligence questionnaire.

If the questions arrive live, as in a chatbot, you still need search. Subworkflow plans to keep both: search makes the shortlist, and the decision model decides.

For the paralegal, that means a blank cell, and no chance for the LLM to guess.

## How it works

**What a decision model does.** You send it a page image and one or more questions. It returns a percentage for each, typically in under half a second here.

One request can carry every column at once. A column added later needs only its own shortlist judged.

**How Subworkflow set it up.** The search shortlists 15 pages per question. Jev judges those pages. The LLM reads the top six.

**How it is trained.** TypeSafe says it trains Jev so that its percentages are honest. A page it scores at 70% should hold the answer about that often.

It says Jev is not trained on customer requests, and it has not published its training data.

## What it means for you

**Risk.** An LLM alone can invent an answer for a document that has none. In legal, medical or financial work, a wrong answer can be costly. A decision model puts a number on every shortlisted page, so “not found” becomes a real answer.

**Money.** The judging adds to the bill. It does not replace the search. On this file, judging the shortlist added about 12% on top of what it cost to prepare the file for search.

The LLM’s cost did not change. As volume grows the sums shift, because judging grows with every page and every question.

**Customers.** A blank cell that is right beats a filled cell that is wrong. When “not found” means something, users can act on the whole table.

**Revenue.** A table that fills itself in, with blanks you can trust, is a stronger product. Subworkflow already offers to run this test on clients’ own documents.

**Contracts.** Read the decision model vendor’s data terms before you test on real files. Ask in writing what it keeps and how it uses it.

### The same pattern in other industries

- **Business checks.** Parcha Labs had a decision model read each page of business documents, and one LLM call wrote the report. On pages it had never seen, it got all four right. [Parcha’s write-up](https://agentrun.ai/blog/you-may-not-need-an-agent-after-all).
- **Security software.** Harness tested a decision model on real customer traffic. Every mistake it made came on the few cases where it said it was unsure. [How Harness did it](/blog/harness-ai-api-inventory-decision-model/).
- **Hiring.** Jack & Jill had a decision model score every candidate. An LLM read only the shortlist. Its screening costs fell 88%. [How Jack & Jill did it](/blog/jack-and-jill-coupled-llm-decision-model/).

### The hard questions

**Is this real client data?** No. Every page, person and figure was made up. Real files are messier, so test on a sample of your own.

**Did it ship?** No. Subworkflow calls it an experiment, and its customers’ files are not sent to a decision model today.

**What fools the decision model?** A question about something very like what is in the file. Keep the LLM reading the pages, so it can still decline.

**Who should own it?** The team that owns the document product should own the questions, the bar and the vendor’s terms.

### How to make the change

1. **List the questions you ask of every document,** such as the fields in your review checklist.
2. **Read the vendor’s data terms** before any real file goes in.
3. **Build a test file** with known answers, including questions that have no answer.
4. **Let search shortlist the pages,** and have the decision model judge them.
5. **Set a bar on your test file,** low enough that no real answer is lost. Below it, the answer is “not found” and the LLM is not asked.
6. **Keep the LLM writing the answers** from the best pages, as it does today.

## For your developer

Here is the pattern as code. Search shortlists pages. The decision model judges each one. The LLM writes from the best. If no page clears the bar, the answer is “not found.” This is my sketch, not Subworkflow’s code. I haven’t run it on their file, so treat it as expected, not measured.

```python
def answer_question(question, shortlist, judge, llm_answer, bar=0.30, top_k=6):
    try:
        scored = sorted(((judge(page, question), page) for page in shortlist),
                        key=lambda s: s[0], reverse=True)  # decision model: chance each page answers it
    except Exception:
        return llm_answer(question, shortlist[:top_k]), "llm"  # decision model down: search's pages, as before
    if not scored or scored[0][0] < bar:
        return "not found", "decision_model"  # no page clears the bar: the LLM is never asked
    best = [page for _, page in scored[:top_k]]
    return llm_answer(question, best), "llm"  # the LLM reads the best pages and writes the answer
```

My worked example shows how. It judges a shortlist of pages, returns “not found” below the bar, and measures how many missing answers it catches on a test set. It comes with tests. [Subscribe for access](/subscribe/).

Public material from others:

- **[Subworkflow’s write-up](https://subworkflow.ai/blog/ragextract/rag-vs-jag)** (company report): every table, including cost and the traps that fooled the judge.
- **[Parcha’s AgentRun write-up](https://agentrun.ai/blog/you-may-not-need-an-agent-after-all)** (company report): decision models reading business documents, with code linked from the post.

## The fine print

- **Who published the numbers.** Every Subworkflow figure comes from its post by founder Jim Le, dated Oct. 18, 2026. I have measured none of it. Subworkflow sells document tools, not decision models, and offers to run this test for clients.
- **The test.** One made-up legal discovery file, “Ecorp Group v Acme Electric Company”: 300 pages, 167 documents, no text layer. Thirty questions: 20 answerable, 10 absent. Reviewers blind to the method gave 691 grades over 222 pages. Pages no method surfaced counted as not answering.
- **The setup.** Search used Voyage’s voyage-multimodal-3.5 page embeddings, what Ragextract runs today. The judge was TypeSafe’s jev-1.14 through OpenRouter. The numbers in the story are for “JAG rerank”: search shortlists 15 pages and Jev judges them. Judging all 300 pages with no search did about as well, but caught 7 of the 10 missing answers, not 8.
- **Results.** Answer page first: 19 of 20 for Jev, 12 of 20 for search. At least one answer page in the top six: 20 of 20 against 19 of 20. Absent questions caught at a 0.3 bar: 8 of 10 with all 20 answerable kept, against 3 of 10 for search at its best cut-off, which also kept all 20 answerable. The made-up invoice number scored 0.589 on search, higher than 16 of the 20 real answers.
- **The two misses.** The judge scored 0.97 and 0.96 on the two near-miss traps.
- **Cost and speed.** Judging the 160 shortlisted pages, as Subworkflow counts them, cost $0.023, against $0.196 to embed the file. Judging all 300 pages cost $0.080. Each extra question adds little to a page’s cost: about 107 tokens on top of about 3,130 for the page image. The median judgment took about 0.37 seconds. These are page-finding costs only. The LLM that writes answers is the same in every setup.
- **Contract terms.** From TypeSafe’s Master Customer Agreement, last updated Sept. 23, 2026, section 4.3: “TypeSafe may Process Telemetry without restriction, including to improve the Services or TypeSafe’s other products and services.” Section 4.1 also grants TypeSafe a license to use, “in perpetuity, any Customer Data (i) to derive and generate Telemetry.” Subworkflow notes that zero data retention is offered to enterprise customers through TypeSafe’s sales team.
- **The opening example.** The paralegal is my illustration. The invoice number is one of Subworkflow’s traps.
- **Parcha Labs.** From founder Miguel Rios Berrios’s Oct. 30, 2026, post. The 20 test documents were invented, and the thresholds were tuned on those same 20. The four unseen pages are the fairer test.
- **Harness and Jack & Jill.** Those details come from each company’s own report.
- **What we don’t know.** How this holds on real client files, how often the LLM declines after a near miss, and whether Subworkflow ships it.
- **This site** is independent and not affiliated with Subworkflow, TypeSafe, Voyage, Parcha Labs or any company named here.

The full worked example for this post, with tests, comes with a subscription below.
