---
title: "Sixty pages of contract, three questions: when to switch on Jev’s long context"
dek: "Jev 1.14 can read about four times more text in one request, behind a switch TypeSafe calls the danger zone. Here is how it works, what TypeSafe says it costs in accuracy, and a worked plan for the insurance requirements buried in a construction subcontract."
kind: Worked example
readMinutes: 9
author: The Decision Layer desk
published: 2026-10-20
lastChecked: 2026-10-20
modelVersion: jev-1.13.0
episode: ep-011-long-contract
summary:
  - "Today none of the outlets on our list had a new Jev story we could verify, so the post starts with its topic. Recent headlines are at the end."
  - "The problem: the insurance requirements behind a certificate request often sit in a long subcontract, past what Jev reads by default."
  - "How it works: a header raises Jev’s limit from 32,000 tokens per question to 262,000. It costs the same per token, but TypeSafe says long inputs are less reliable and recommends staying short."
  - "The use case: one made-up 60-page subcontract, read two ways (split into sections, or whole with long context), and a way to pick between them on contracts you already know. The result is expected, not measured."
sources:
  - title: "TypeSafe docs: Models (context length and the long-context header)"
    url: https://docs.typesafe.ai/models.md
    grade: Official docs
  - title: "TypeSafe blog: Jev 1.14 announcement (Oct 14, 2026)"
    url: https://typesafe.ai/blog/jev-1-14
    grade: Vendor claim
inTheNews:
  - outlet: TechCrunch
    headline: "Jev is Vercel’s fastest-adopted AI model ever"
    url: https://techcrunch.com/2026/10/16/jev-is-vercels-fastest-adopted-ai-model-ever/
    date: 2026-10-16
  - outlet: InfoWorld
    headline: "TypeSafe’s Jev ‘even more susceptible to attack’ than LLMs, says security vendor"
    url: https://www.infoworld.com/article/4236103/typesafes-jev-even-more-susceptible-to-attack-than-llms-says-security-vendor.html
    date: 2026-10-15
  - outlet: Tom’s Hardware
    headline: "Jev-like decision models are flooding the AI market, after researcher claims TypeSafe copied their research"
    url: https://www.tomshardware.com/tech-industry/artificial-intelligence/jev-like-decision-models-are-flooding-the-ai-market-after-researcher-claims-typesafe-copied-their-research-microsoft-openai-among-companies-releasing-lightweight-system-one-ai-models
    date: 2026-10-12
  - outlet: Bloomberg
    headline: "Andreessen Horowitz Backs Jev Maker at $7.5 Billion Value"
    url: https://www.bloomberg.com/news/articles/2026-10-09/andreessen-horowitz-backs-jev-maker-at-7-5-billion-value
    date: 2026-10-09
---

*Eleventh in our series. Earlier posts cover [the basics](/blog/what-jev-is-and-isnt/), [training](/blog/claims-intake-labels-not-essays/), [writing a question](/blog/underwriting-submissions-function-call/), [what’s inside](/blog/agency-inbox-jev-and-its-clones/), [planted text](/blog/claims-fast-track-text-written-to-fool-it/), [pictures](/blog/claim-photos-what-jev-can-see/), [bias](/blog/subrogation-referrals-does-the-answer-wobble/), [cost at volume](/blog/storm-surge-cost-and-speed-at-volume/), [many questions at once](/blog/agency-renewals-many-small-questions/) and [what goes in the state](/blog/coi-requests-what-to-send-jev/). This one picks up where that last post stopped: what to do when the text you need to read is long.*

*A note on today’s news: we didn’t find a new Jev story we could verify from the outlets on our list, so this post starts with its topic. The latest headlines are at the end.*

## The problem: the requirements are in the contract, not the email

Our [certificate post](/blog/coi-requests-what-to-send-jev/) worked through a request email that spelled out what the general contractor wanted. Many don’t. They say “per the subcontract, Exhibit C” and attach the subcontract: 60 pages of scope, payment terms, indemnity, dispute rules and, somewhere, the insurance requirements.

A service rep at the agency has to find those requirements before anyone issues a certificate. Additional insured on a primary basis? A waiver of subrogation? Completed operations coverage for some years after the job? Miss one and the client may be in breach of its contract, or the agency issues a certificate that promises something the policy doesn’t include.

We listed this as a weak spot last time: if the requirements are in an attachment you didn’t send, they aren’t in the state. Send the whole contract and you run into a different limit.

## How it works: a bigger window, with a warning label

**By default, Jev reads about 32,000 tokens per question.** TypeSafe’s model page sets two limits. Everything in a request, the state plus all its questions, must fit in 64,000 tokens. And the state plus any one question must fit in 32,000. ([Models](https://docs.typesafe.ai/models.md)) For most models a token is roughly three quarters of an English word; TypeSafe doesn’t say how Jev counts them, but every response reports the count. A dense 60-page contract can run past 32,000 tokens on its own; we’d guess 40,000 to 60,000, but you should count your own.

**A header raises the limit to 262,000.** Send `TypeSafe-Danger-Zone-Long-Context: true` with a request and both limits become 262,000 tokens. It works on Jev 1.13 and 1.14, and only for the request that carries the header. Everything else stays at the default.

**The price per token doesn’t change.** “Long context costs the same per token as any other request,” the model page says. Our [cost post](/blog/storm-surge-cost-and-speed-at-volume/) covered the pricing; the short version is that a 60,000-token contract costs well under a cent to send. The real costs are speed and accuracy.

**TypeSafe says it is less reliable, and limited it on purpose.** The 1.14 announcement explains that Jev can take more text than TypeSafe allows in production, and that the company held it back: “We chose to limit it intentionally because Jev, like all models, is less reliable on longer contexts”. Then it opens the door anyway: “We aren’t your parents though, so while we strongly recommend limiting context length, you no longer have to”. ([TypeSafe blog](https://typesafe.ai/blog/jev-1-14)) The header’s name says the rest; our [photo post](/blog/claim-photos-what-jev-can-see/) covered what TypeSafe means by danger-zone features.

**What TypeSafe hasn’t published.** We found no numbers on how much accuracy drops as inputs get longer, no guidance on where in a long document Jev reads best, and no long-context benchmark in the announcement. So nobody outside TypeSafe can tell you how much worse a 60,000-token answer is than a 20,000-token one. You can measure it on your own documents, which is what the plan below does.

**What that means for you.** Long context is a tool for the cases where splitting the text would lose something. For everything else, TypeSafe’s own advice is to keep requests short.

## The use case: one subcontract, read two ways

Here is a made-up job. Harbor Construction sends Brightline Electric’s agency a 60-page subcontract for a school renovation. Exhibit C, on page 52, has the insurance requirements. Article 1, on page 3, defines “Owner Parties” as the school district, its board and its architect. Exhibit C says the additional insured status must cover “Contractor and the Owner Parties.”

We want three answers: does the contract require additional insured status for anyone, a waiver of subrogation, and completed operations coverage after the job ends?

**Plan A: split it, and keep each piece short.** Break the contract at its article and exhibit headings, and ask the same questions about each piece in its own request:

```python
import os, re, requests

URL = "https://api.typesafe.ai/v1/systemone"
HEADERS = {"Authorization": f"Bearer {os.environ['TYPESAFE_API_KEY']}"}

def noul(instructions, true, false):
    return {"type": "noul", "instructions": instructions, "criteria": {"true": true, "false": false}}

questions = {
    "requires_additional_insured": noul(
        "Does this section require the subcontractor to name anyone as an additional insured?",
        "It requires additional insured status for someone", "It does not"),
    "requires_waiver": noul(
        "Does this section require the subcontractor to waive subrogation?",
        "It requires a waiver of subrogation", "It does not"),
    "requires_completed_ops": noul(
        "Does this section require coverage to continue for completed operations after the work is finished?",
        "It requires completed operations coverage", "It does not"),
}

# Split at headings like "ARTICLE 9" or "EXHIBIT C". Keep each piece well under the limit.
sections = re.split(r"\n(?=(?:ARTICLE|EXHIBIT)\s+\w+)", contract_text)

results = []
for i, section in enumerate(sections):
    resp = requests.post(URL, headers=HEADERS, timeout=30, json={
        "model": "jev-1.13.0",
        "state": {"contract_section": section},
        "questions": questions,
    })
    a = {k: v["noul"] for k, v in resp.json()["answers"].items()}
    results.append((i, a))

found = {q: [i for i, a in results if a[q] > 0.5] for q in questions}
# found["requires_waiver"] -> the section numbers that seem to require one
```

Each answer comes with the section that produced it, so the service rep can go straight to the clause. That matters more than it looks: “yes, somewhere in 60 pages” isn’t useful to a person who has to check it.

**Plan B: send it whole, with long context.** Same questions, reworded to say “the contract” instead of “this section,” and one extra header:

```python
resp = requests.post(URL, timeout=60,
    headers={**HEADERS, "TypeSafe-Danger-Zone-Long-Context": "true"},
    json={"model": "jev-1.13.0", "state": {"subcontract": contract_text}, "questions": whole_contract_questions},
)
```

Plan B can see that “Owner Parties” in Exhibit C means the people defined on page 3. Plan A can’t, unless you add the definitions article to every piece. Add a fourth question, “Does the contract require additional insured status for anyone other than the general contractor?”, and that difference shows up in the answer.

**Choosing between them.** Don’t pick on instinct. Take 20 subcontracts your team has already reviewed, where you know what Exhibit C actually required. Run both plans on all of them and count the misses. Our [claims post](/blog/claims-intake-labels-not-essays/) covers how to check answers against cases where you know the outcome; the same approach works here. Whichever plan misses less on your own contracts wins, and you can rerun the comparison when a new version of Jev comes out.

## The result

**Expected, not measured:** for this contract we’d expect Plan A to find all three requirements, each pointing to Exhibit C, and to miss that the additional insured list includes the school district, because that’s defined 49 pages earlier. We’d expect Plan B to catch the definition but be less certain overall, given TypeSafe’s warning. Our guess is that the best setup for most agencies is Plan A by default, with the definitions article added to every piece, and Plan B kept for questions that need the whole document. That is a guess until it has been measured.

We haven’t run either plan. When we do, we’ll publish the contracts (made up), the answers, the misses for each plan, the token counts and the model version.

## Where it breaks

- **Requirements in a table or a scanned page.** Exhibits are often tables or scans. If the text you extract from the PDF is scrambled or empty, neither plan can find what isn’t there. Check the extracted text before you blame the model.
- **More pieces, more false alarms.** In Plan A, every extra section is another chance for a stray high answer. If one boilerplate paragraph keeps triggering “yes,” look at it, and consider asking only about the insurance article and exhibits once you know where they are.
- **Cross-references.** Contracts point at each other: “as defined in Article 1,” “per the Prime Contract.” Splitting breaks those links. Long context keeps them inside one document but can’t follow a reference to a document you didn’t send.
- **Slower answers.** TypeSafe says long-context requests are slower. For a certificate that’s due Monday that won’t matter. For a live phone call it might.
- **No published numbers.** TypeSafe hasn’t said how much accuracy drops with length. Until it does, or you measure it, treat long-context answers as less certain than short ones.
- **It never signs off on the contract.** Jev finds where the requirements might be. A licensed person reads the clause, decides whether the policy meets it and issues the certificate. Nothing about the customer that a law protects goes in as an input.
