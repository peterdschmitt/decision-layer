---
title: "Before claim reports leave the building: what TypeSafe says it keeps, and what to ask"
dek: "Every request to Jev sends your text to another company. For a carrier, that text can include names, phone numbers and injuries. Here is what TypeSafe’s own pages say about training, retention and hosting, what they leave open, and a worked plan for sending less."
kind: Worked example
readMinutes: 8
author: The Decision Layer desk
published: 2026-10-24
lastChecked: 2026-10-24
modelVersion: jev-1.13.0
episode: ep-015-what-leaves
summary:
  - "No outlet on our list had a new Jev story we could verify today, so the post starts with its topic. Recent headlines are at the end."
  - "The problem: first notices of loss carry personal details, sometimes health details, and every Jev request sends them to TypeSafe."
  - "How it works: TypeSafe says it doesn’t train on your inputs, hosts in the U.S., offers zero data retention to enterprise customers and a SOC 2 Type II report on request. Its standard retention promise is open-ended, and several answers need a conversation."
  - "The use case: strip the details the routing doesn’t need before sending, and take a short list of questions to TypeSafe. The result is expected, not measured."
sources:
  - title: "TypeSafe: Enterprise page (security FAQ)"
    url: https://typesafe.ai/enterprise
    grade: Vendor claim
  - title: "TypeSafe: Privacy policy (last updated Nov 19, 2025)"
    url: https://typesafe.ai/legal/privacy-policy
    grade: Vendor claim
  - title: "TypeSafe: Data processing terms (last updated Apr 24, 2026)"
    url: https://typesafe.ai/legal/data-processing
    grade: Vendor claim
  - title: "The New Stack: Workday is using TypeSafe’s Jev to build user interfaces on the fly (Oct 13, 2026)"
    url: https://thenewstack.io/workday-is-using-typesafes-jev-to-build-user-interfaces-on-the-fly/
    grade: Independent reporting
inTheNews:
  - outlet: TechCrunch
    headline: "Jev is Vercel’s fastest-adopted AI model ever"
    url: https://techcrunch.com/2026/10/16/jev-is-vercels-fastest-adopted-ai-model-ever/
    date: 2026-10-16
  - outlet: InfoWorld
    headline: "TypeSafe’s Jev ‘even more susceptible to attack’ than LLMs, says security vendor"
    url: https://www.infoworld.com/article/4236103/typesafes-jev-even-more-susceptible-to-attack-than-llms-says-security-vendor.html
    date: 2026-10-15
  - outlet: The New Stack
    headline: "Workday is using TypeSafe’s Jev to build user interfaces on the fly"
    url: https://thenewstack.io/workday-is-using-typesafes-jev-to-build-user-interfaces-on-the-fly/
    date: 2026-10-13
  - outlet: Bloomberg
    headline: "Andreessen Horowitz Backs Jev Maker at $7.5 Billion Value"
    url: https://www.bloomberg.com/news/articles/2026-10-09/andreessen-horowitz-backs-jev-maker-at-7-5-billion-value
    date: 2026-10-09
---

*Fifteenth in our series. Earlier posts cover [the basics](/blog/what-jev-is-and-isnt/), [training](/blog/claims-intake-labels-not-essays/), [writing a question](/blog/underwriting-submissions-function-call/), [the service inbox](/blog/agency-inbox-jev-and-its-clones/), [planted text](/blog/claims-fast-track-text-written-to-fool-it/), [pictures](/blog/claim-photos-what-jev-can-see/), [bias](/blog/subrogation-referrals-does-the-answer-wobble/), [cost at volume](/blog/storm-surge-cost-and-speed-at-volume/), [many questions at once](/blog/agency-renewals-many-small-questions/), [what goes in the state](/blog/coi-requests-what-to-send-jev/), [long inputs](/blog/subcontract-long-context-or-split/), [new versions](/blog/claims-routing-when-jev-updates/), [other languages](/blog/agency-inbox-spanish-emails/) and [speed](/blog/online-claim-form-speed-budget/). This one is about where your text goes once you send it.*

*A note on today’s news: we didn’t find a new Jev story we could verify from the outlets on our list, so this post starts with its topic. The latest headlines are at the end.*

## The problem: the report is full of things the router doesn’t need

Our [claims intake post](/blog/claims-intake-labels-not-essays/) sent each first notice of loss to Jev and routed it on four answers. A real first notice looks something like this (made up, like every example here):

> “This is Karen Doyle, policy HO-4471-2290, phone 555-0143. A pipe burst under the kitchen sink overnight and water got into the cabinets and floor. I slipped on the wet floor and my wrist is swollen, going to urgent care this afternoon. Call me after 3.”

The router needs to know there’s water damage, that someone may be hurt, and roughly where. It doesn’t need Karen’s name, her policy number or her phone number. And the injury detail, which the router does need, is health information about a real person.

Every request to Jev sends the state to TypeSafe. Our [state post](/blog/coi-requests-what-to-send-jev/) said to send only what the decision needs and to treat whatever you send as leaving your building. It also said we hadn’t found a published retention period. This post looks at what TypeSafe does publish, and at what a carrier should ask before sending anything like Karen’s report.

## How it works: what TypeSafe’s pages say, and don’t

**No training on your inputs.** TypeSafe’s enterprise page answers the question directly: “No. We don’t use your inputs or outputs to train our models.” Its privacy policy says the same in legal language, that TypeSafe “will not train or fine tune any artificial intelligence or machine learning models on Input.” ([Enterprise](https://typesafe.ai/enterprise), [Privacy policy](https://typesafe.ai/legal/privacy-policy))

**Kept “as long as reasonably necessary,” unless you arrange otherwise.** The privacy policy’s retention line is open-ended: “We retain personal data about you for as long as reasonably necessary to provide you with the Services.” The data processing terms use similar words and don’t give a number of days. ([Data processing](https://typesafe.ai/legal/data-processing)) The enterprise page offers more: “Zero data retention is available for enterprise customers.” It doesn’t say what that covers or what it costs; the page says to ask about the setup for your account.

**Hosted in the U.S., shared with service providers.** “The Services are hosted in the United States,” the privacy policy says. It also says TypeSafe “will not disclose any Input to a third party other than our service providers.” The data processing terms point to a subprocessor list on TypeSafe’s trust center. That page didn’t load the list for us, so we can’t say who is on it.

**A security report, on request.** “Visit our Trust Center to request access to the SOC 2 Type II report,” the enterprise page says. A SOC 2 Type II report is an outside auditor’s review of a company’s security controls over a period of months. The New Stack reported that in September one developer kept client data off Jev because the vendor had no published security certification yet, and that the report is now available on request. ([The New Stack](https://thenewstack.io/workday-is-using-typesafes-jev-to-build-user-interfaces-on-the-fly/))

**What we couldn’t find answers to.** The enterprise page’s FAQ lists questions about whether TypeSafe will sign a BAA (the agreement U.S. health privacy rules require before sharing certain health information), where data is processed, and whether Jev can run in your own cloud. When we read the page on Oct 24, the answers weren’t visible. We also found nothing about how long request logs are kept by default, or how to ask for deletion. These may all have answers; they’re questions for TypeSafe, not things to assume.

**What that means for you.** TypeSafe’s promises on training are clear and in writing. On retention, location detail and health information, the standard terms leave room, and the stronger options need a contract conversation. Until you’ve had it, send less.

## The use case: send what the router needs, and nothing else

**Step 1: strip what the questions don’t use.** Before a report goes to Jev, remove the things no routing question needs: names, policy and claim numbers, phone numbers, email addresses, street addresses. Replace each with a label so the sentence still reads:

```python
import re

PATTERNS = [
    (r"\b[A-Z]{2}-\d{4}-\d{4}\b", "[POLICY]"),                 # your policy number format
    (r"\b\d{3}[-.\s]?\d{3}[-.\s]?\d{4}\b|\b\d{3}-\d{4}\b", "[PHONE]"),
    (r"[\w.+-]+@[\w-]+\.[\w.]+", "[EMAIL]"),
    (r"\b\d{3}-\d{2}-\d{4}\b", "[SSN]"),
]

def strip_identifiers(text, known_names):
    for pattern, label in PATTERNS:
        text = re.sub(pattern, label, text)
    for name in known_names:                                    # from the policy record, not guessed
        text = re.sub(re.escape(name), "[NAME]", text, flags=re.IGNORECASE)
    return text

safe = strip_identifiers(report_text, known_names=[insured.full_name, *insured.household])
# "This is [NAME], policy [POLICY], phone [PHONE]. A pipe burst under the kitchen sink..."
```

The names come from your own policy record, not from guessing which words in the report are names. Patterns like these miss things, so this step reduces what you send. It doesn’t guarantee nothing personal gets through.

**Step 2: check that routing still works.** Run your test set of past reports twice, once as written and once stripped, and compare the queues. If the answers don’t change, the identifiers weren’t helping. If they do, look at why before you decide anything.

**Step 3: decide about the injury details.** The injury question is the reason the router exists, so you can’t strip “my wrist is swollen.” This is where a carrier needs the answers from TypeSafe: whether health details in a claim report need a BAA in your situation, whether zero data retention is in place for your account, and what your own compliance team requires. If the answers aren’t good enough, one option is to keep injury detection out of Jev and route every report that mentions a body part or a doctor to a person.

**Step 4: ask TypeSafe, in writing.**

- How long are request bodies and logs kept on our account, and can we get zero retention?
- Who are the current subprocessors, and where is data processed?
- Will you sign a BAA, and does our use need one?
- How do we request deletion of data we’ve sent?
- Can we see the SOC 2 Type II report, and what period does it cover?

## The result

**Expected, not measured:** for Karen’s report, the stripped version still reads clearly as water damage with a possible injury, so we’d expect the router to send it to injury review just as before. What leaves the building is a description of a burst pipe and a sore wrist, with no name, policy number or phone number attached. The carrier still knows exactly whose claim it is, because the claim system never sent that part.

We haven’t run this. When we do, we’ll publish the made-up reports before and after stripping, the routing results for both, and the model version.

## Where it breaks

- **Patterns miss things.** People type phone numbers, names and addresses in endless ways. A neighbor’s name or a license plate can slip through. Review a sample of stripped reports by hand every month.
- **Stripping the thing the question needs.** If a question depends on a detail, say whether the loss is at the insured address, removing it breaks the answer. Strip only what no question uses, and test after every change.
- **Free text you didn’t expect.** Notes fields collect everything: medical details, family situations, other people’s information. The less free text you send, the less you have to worry about.
- **Promises change.** Privacy policies say a revised version takes effect when it’s posted. Note the date you reviewed the terms, and review them again each year or when TypeSafe announces a change.
- **This isn’t legal advice.** Whether your use needs a BAA, or meets your state’s insurance data rules, is a question for your compliance team and counsel, not for a blog.
- **It never decides the claim.** Jev only suggests a queue. People handle every claim, and nothing about a customer that a law protects goes in as an input.
