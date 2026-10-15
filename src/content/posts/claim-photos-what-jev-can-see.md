---
title: "Jev can see now, a little: checking claim photos before an adjuster opens them"
dek: "Jev 1.14 takes pictures and can point to where something is in one. TypeSafe says it isn’t ready for production yet. Here is how image input works, and a careful first use on a home claim: catching unusable photos while the customer is still holding the phone."
kind: Worked example
readMinutes: 10
author: The Decision Layer desk
published: 2026-10-15
lastChecked: 2026-10-15
modelVersion: jev-1.14.0
episode: ep-006-claim-photos
summary:
  - "No news hook from our outlet list today: Jev 1.14 shipped on Oct 14, but only trade sites covered it, so this post leads with the release itself, from TypeSafe’s own announcement and docs."
  - "The problem: on a home claim, the first photos a customer sends are often blurry, too far away or of the wrong thing, and an adjuster finds out days later."
  - "How it works: images go in a labeled spot in the request and every question can see them. A new Box question points to where something is in a picture. TypeSafe says all models do worse on pictures than on text and keeps this behind a “danger zone” switch."
  - "The use case: a made-up hail claim, three questions and a Box per photo, and code that asks for a retake on the spot. It never decides damage or coverage. The result is expected, not measured."
sources:
  - title: "TypeSafe blog: Jev: For the builders AND dreamers (Jev 1.14 announcement, Oct 14, 2026)"
    url: https://typesafe.ai/blog/jev-1-14
    grade: Vendor claim
  - title: "TypeSafe docs: Images in System One requests"
    url: https://docs.typesafe.ai/images.md
    grade: Official docs
  - title: "TypeSafe docs: Box questions"
    url: https://docs.typesafe.ai/primitives/box.md
    grade: Official docs
  - title: "TypeSafe docs: Models"
    url: https://docs.typesafe.ai/models.md
    grade: Official docs
inTheNews:
  - outlet: Tom’s Hardware
    headline: "Jev-like decision models are flooding the AI market, after researcher claims TypeSafe copied their research"
    url: https://www.tomshardware.com/tech-industry/artificial-intelligence/jev-like-decision-models-are-flooding-the-ai-market-after-researcher-claims-typesafe-copied-their-research-microsoft-openai-among-companies-releasing-lightweight-system-one-ai-models
    date: 2026-10-12
  - outlet: TechCrunch
    headline: "The maker of non-text AI model Jev valued at $7.5B just weeks after launch"
    url: https://techcrunch.com/2026/10/09/the-maker-of-non-text-ai-model-jev-valued-at-7-5b-just-weeks-after-launch/
    date: 2026-10-09
  - outlet: Fortune
    headline: "Jev, an AI for making quick decisions, has been a viral hit in Silicon Valley. But OpenAI is hot on its heels"
    url: https://fortune.com/2026/10/08/jev-an-ai-for-making-quick-decisions-has-been-a-viral-hit-in-silicon-valley-but-openai-is-hot-on-its-heels/
    date: 2026-10-08
---

*Sixth in our series. [What Jev is, and what it isn’t](/blog/what-jev-is-and-isnt/) covers the basics, [Labels, not essays](/blog/claims-intake-labels-not-essays/) covers training and what the probabilities mean, [A function call for underwriters](/blog/underwriting-submissions-function-call/) covers writing questions, [Jev, its clones and your service inbox](/blog/agency-inbox-jev-and-its-clones/) covers what’s inside, and [Text written to fool it](/blog/claims-fast-track-text-written-to-fool-it/) covers planted text. This one is about pictures, which Jev couldn’t read until yesterday.*

*A note on today’s news: TypeSafe released Jev 1.14 on Oct 14, but none of the outlets on our list had covered it when we checked, and we don’t lead with trade sites. So this post leads with the release itself, sourced to TypeSafe’s announcement and docs. The latest headlines from our list are at the end.*

## The problem: photos nobody can use

A hailstorm comes through on a Saturday. By Monday a carrier has hundreds of new home claims, and most come with photos from the customer’s phone. Some are useful. Many aren’t: a shot of the roof from the street, too far away to show anything; a close-up so blurry the shingles are a smear; three pictures of the gutter and none of the roof.

Nobody notices until an adjuster opens the file, often days later. Then someone calls the customer, asks for new pictures, and the claim waits again. The customer was standing in the driveway with the phone in hand when they sent the first set. That was the moment to ask for a better one.

Earlier posts in this series said Jev reads only words. The [claims post](/blog/claims-intake-labels-not-essays/) said so plainly, and the [inbox post](/blog/agency-inbox-jev-and-its-clones/) listed attachments it couldn’t read. As of version 1.14 that’s changing, with large warnings attached.

## How it works: pictures go in the state, and a new question points

**It’s switched off unless you ask.** TypeSafe’s docs are direct: “Images and Box questions are off by default.” You turn them on per request with a header, `TypeSafe-Danger-Zone-Images: true`. The name is the point. TypeSafe’s announcement says it ships features like this “under “danger zone” flags in our API headers,” and adds: “But as a warning, we think there is still way too much jaggedness for us to vouch for these for production use cases!” ([TypeSafe blog](https://typesafe.ai/blog/jev-1-14)) The docs say the same in calmer words: “Images and Box questions aren’t yet up to our standards to call ready for production.” ([TypeSafe docs](https://docs.typesafe.ai/images.md)) TypeSafe’s model page still lists Jev’s input as text, and 1.14 sits behind the `jev-preview` name, not the stable `jev-latest` one. ([Models](https://docs.typesafe.ai/models.md))

**Pictures are worse than words, by TypeSafe’s own account.** “As a warning, all models (Jev included) perform worse on multimodality over pure text.” That is a vendor being unusually frank, and it should set your expectations. TypeSafe’s announcement and docs, as far as we could find, don’t say how Jev learned to read images or give accuracy numbers for them.

**Where the picture goes decides who sees it.** Each image goes once in a separate `assets` list, under a reference name, and you write that name wherever the picture belongs. If it’s in the state, the material Jev judges, every question sees it. You can also put a picture inside one question, or inside the criteria, as an example of what an answer looks like. ([Images docs](https://docs.typesafe.ai/images.md)) For a claim photo, the state is the right place: every question is about the same picture.

**Box questions point.** The new `box` question type answers “where?” with four edges, each a fraction of the image’s height or width, plus a confidence number. TypeSafe’s announcement puts it simply: “It returns a single bounding box - no type errors allowed.” The catch is in the docs: “There is no “not found” answer, so a Box question about something absent still returns four edges.” ([Box docs](https://docs.typesafe.ai/primitives/box.md)) Ask about damage on a roof with no damage and you still get a box. So the docs suggest pairing a Box with a yes/no question that checks whether the thing is there at all. On confidence, they add: “There is no recommended threshold yet, so tune it on your own images.”

**Phone photos need one fix first.** Phones often store a picture sideways and save a note in the file saying which way is up. Jev ignores that note: “The API removes all metadata (EXIF, color profiles, comments) and does not apply the EXIF orientation.” Rotate the pixels yourself before you send. The docs also ask for PNG or JPEG, with no side longer than 1568 pixels.

**Cost works the same way as text.** “Each image counts as input tokens, billed at the same per-token input price as text.” We haven’t measured how many tokens a typical claim photo adds, so check that on a few calls before you budget.

**What that means for you.** This is a feature to try, not one to build a claims process on. A safe first use is one where a wrong answer costs almost nothing. Asking a customer to take one more picture is that kind of use.

## The use case: three photos on a hail claim

Here is a made-up claim. A homeowner reports hail damage through the carrier’s app and uploads three photos, described here in words:

- **Photo 1:** the front of the house from the street. The roof is a thin strip at the top of the frame.
- **Photo 2:** a close-up of shingles, badly blurred.
- **Photo 3:** a clear, close shot of shingles with several round dents and a cracked one near the edge.

Each photo goes in as its own request, while the customer is still in the app. We ask three yes/no questions and one Box. The format follows TypeSafe’s [images](https://docs.typesafe.ai/images.md) and [Box](https://docs.typesafe.ai/primitives/box.md) docs:

```python
import base64, io, os, uuid
import requests
from PIL import Image, ImageOps

def prepare(path):
    img = ImageOps.exif_transpose(Image.open(path))  # turn the pixels upright; Jev ignores EXIF
    img.thumbnail((1568, 1568))                      # longest side at most 1568 px
    buf = io.BytesIO()
    img.convert("RGB").save(buf, format="JPEG", quality=90)
    return img.size, base64.b64encode(buf.getvalue()).decode()

(width, height), data = prepare("photo_3.jpg")
ref = f"{uuid.uuid4().hex[:8]}-roof"

body = {
    "model": "jev-1.14.0",
    "assets": {ref: {"type": "image", "format": "jpg", "data_base64": data}},
    "state": {
        "claim_type": "Homeowner reports hail damage to the roof",
        "photo": ref,
    },
    "questions": {
        "shows_roof": {
            "type": "noul",
            "instructions": "Does `photo` show the surface of a roof up close enough to see individual shingles or tiles?",
            "criteria": {
                "true": "Individual shingles, tiles or roofing panels can be made out",
                "false": "The roof is missing, tiny in the frame, or only gutters, siding or sky are shown",
            },
        },
        "sharp_enough": {
            "type": "noul",
            "instructions": "Is `photo` sharp and well lit enough for a person to inspect the roofing surface in it?",
            "criteria": {
                "true": "Edges of the roofing material are clear and the surface is not too dark or washed out",
                "false": "The image is blurred, very dark, overexposed or blocked",
            },
        },
        "marks_visible": {
            "type": "noul",
            "instructions": "Are there visible dents, cracks, missing pieces or other marks on the roofing surface in `photo`?",
            "criteria": {
                "true": "At least one dent, crack, hole, missing piece or mark is visible",
                "false": "No marks of any kind are visible on the roofing surface",
            },
        },
        "marked_area": {
            "type": "box",
            "instructions": "The area of the roofing surface in `photo` with the most visible dents, cracks or missing pieces",
        },
    },
}

resp = requests.post(
    "https://api.typesafe.ai/v1/systemone",
    headers={
        "Authorization": f"Bearer {os.environ['TYPESAFE_API_KEY']}",
        "TypeSafe-Danger-Zone-Images": "true",
    },
    json=body,
    timeout=20,
)
answers = resp.json()["answers"]
```

Why the questions look like this:

- **The questions are about the photo, not the claim.** None of them asks whether there is hail damage, or how bad it is. They ask whether a person could inspect the roof in this picture. That keeps Jev on the part of the job where a mistake is cheap.
- **“Marks,” not “damage.”** Calling something hail damage is an adjuster’s judgment. Whether there are visible dents in a picture is closer to a fact.
- **The Box has a partner.** Because a Box always returns four edges, `marks_visible` decides whether the box means anything.

## Acting on the answers

```python
roof = answers["shows_roof"]["noul"]
sharp = answers["sharp_enough"]["noul"]
marks = answers["marks_visible"]["noul"]
box = answers["marked_area"]["box"]
box_conf = answers["marked_area"]["confidence"]

if roof < 0.5:
    ask_retake("We can’t see the roof up close. Could you take one closer, or from a ladder only if it’s safe?")
elif sharp < 0.5:
    ask_retake("This one came out blurry. Could you hold still and try again?")
else:
    keep_photo()
    if marks > 0.8 and box_conf > 0.7:  # placeholders: tune on your own photos
        pad = 0.05
        crop = (
            max(0, box["left"] - pad) * width, max(0, box["top"] - pad) * height,
            min(1, box["right"] + pad) * width, min(1, box["bottom"] + pad) * height,
        )
        attach_suggested_crop(crop)  # shown to the adjuster next to the full photo

# Nothing here closes, denies or values a claim. Every photo, kept or not, goes in the file.
```

The retake prompts are friendly, and the customer can always skip them and submit anyway. The crop is a suggestion that sits beside the full photo, so the adjuster sees where to look first without losing anything. The numbers are placeholders. As the [claims post](/blog/claims-intake-labels-not-essays/) explains, you pick thresholds by checking scores against your own past cases, and here that means a few hundred old claim photos with a person’s notes on which ones were usable.

## The result

**Expected, not measured:** for photo 1 we’d expect `shows_roof` to come back low, so the customer gets a “closer, please” prompt while still in the driveway. For photo 2 we’d expect the roof question to be unsure and `sharp_enough` to be low, so they get the “try again” prompt. Photo 3 should pass both, with `marks_visible` high and a box around the dented corner, which the adjuster sees as a suggested crop.

The payoff, if it works, is that the adjuster opens a file with at least one usable roof photo instead of discovering three unusable ones and starting a phone call. If it doesn’t work, the cost is a customer asked to retake a photo that was fine, which they can skip.

We haven’t run this. Images are a preview feature, and we’d want a set of real-looking test photos before saying anything about accuracy. When we run it, we’ll publish the photos, the answers, the cost and the model version.

## Where it breaks

- **TypeSafe says not for production.** Treat this as a pilot that runs beside your current process. Formats, limits and accuracy can change between releases, and the docs say so.
- **“No visible marks” doesn’t mean no damage.** Hail bruising often doesn’t show in a photo. `marks_visible` only ever adds a suggested crop. It never lowers a claim’s priority or closes it.
- **A box is always returned.** Without the `marks_visible` check, you’d draw boxes on spotless roofs.
- **Sideways photos.** Skip the rotation step and Jev may see the roof on its side. TypeSafe’s docs say it won’t fix that for you.
- **Never ask a customer to climb.** A prompt for a closer photo should say “only if it’s safe” and accept a no. Offer an inspection visit as the other choice.
- **It never decides.** A person looks at every photo and decides what the damage is, what is covered and what is paid. Nothing about the customer that a law protects goes in as an input.
- **Planted text works in pictures too, probably.** Our [last post](/blog/claims-fast-track-text-written-to-fool-it/) showed words in the state can nudge Jev. A photo with writing in it is words in the state. We haven’t seen research on this for Jev’s images yet, so assume the same caution applies.
