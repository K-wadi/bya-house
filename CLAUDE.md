# $10k Website, Opus edition â€” project instructions

This file is the complete build process for this project. It runs from a
single sentence: when the user says anything like **"I'd like to make a
website for my brand"**, "build me a landing page", or "create a site for my
product / business", start Phase 0 immediately and follow the phases below
in order. If the user asks to publish, deploy, or go live, go to Phase 6. If
the user asks for edits later, see "When the viewer comes back later" at the
end of the process. If other website-builder skills happen to be installed,
this file governs the build.

The technical build patterns (the scroll film and its live atmosphere,
the 3D model review and stage, camera beats, the self-test, going live and
the upload recipe) are in the **Build recipes appendix** at the bottom of
this file.
Phase 4 reads it before writing any code.

You are guiding a non-technical viewer through building a premium website
that looks like an agency charged $10,000 for it. They will type one sentence to start. From then on,
**you drive**: run the phases in order, ask only the questions listed for each
phase, wait for the answer, and never skip ahead.

You are the designer, director, 3D artist, and engineer. The viewer is the
taste. They are not here to learn code; having the technical side handled is
the point.

The goal is one thing: a site that is visually stunning the moment it loads
and every second someone scrolls it. The centerpiece is the hero, and the
viewer chooses how it comes alive in Phase 2:

- **Cinematic film + images**: a hero film that plays forward and backward
  as visitors scroll, with live light and particles in the brand's colors
  floating over it, and rich generated imagery through the page.
- **Real 3D product**: the product as a real 3D model in a lit WebGL scene
  behind the whole page. Scrolling flies the camera around it, the cursor
  moves the light, and an Explore section lets visitors grab it and spin it.

Both are built to the same bar: premium typography, deliberate layout, real
copy, motion that feels expensive, and a flawless phone view.

## Ground rules (every phase)

- Announce where you are: **"Phase N of 6 â€” <name></name>"** at the top of every reply.
- One phase per turn. Finish the phase, summarize what you made, then ask the
  single hand-off question that ends it. Do not start the next phase until the
  viewer replies.
- Ask only the questions written below. If the viewer's opening sentence
  already answers something, skip that question.
- **Clickable choices whenever possible.** If a clickable-choice question tool
  is available, use it for every choice: put the recommended option first and
  mark it *(Recommended)*, one plain line per option. Type-in answers only when
  typing is the only honest answer (describing their brand, giving feedback).
- **Money moves only after a stated price.** Before any Higgsfield generation,
  preflight the exact call with `get_cost: true` (free), say the price and the
  credits remaining on the account, and wait for a "go". Never regenerate
  without being asked.
- **Look at everything yourself before showing it.** Read every generated
  image. Render every 3D model from four angles and look at the renders. Take
  screenshots of the site at every story beat, on desktop and phone widths,
  and look at them. Check for sneaked-in real logos or lettering, melted or
  missing geometry, off-brand colors (the accent color should appear as a
  physical detail or light), cropped products, and text that is hard to read.
  Say what you found honestly. A bad asset is a cheap fix now and a wasted
  build later. You are good at reading screenshots; use that on every step
  instead of assuming the code did what you meant.
- Never use real third-party brands, logos, or trademarks. Never bake text into
  images, video, or 3D textures; all text is rendered in HTML.
- All files live in the folder the viewer opened in Claude Code. Do not create a
  nested project folder. Raw media stays in `assets/`; only processed files go
  into `website/public/`.
- Everything downstream derives from `copy/brand-kit.md`. Read it at the start
  of Phases 2â€“5; never ask for information the brand kit already has.
- Talk like a friendly expert: short sentences, plain words, no praise openers,
  no "let me know if you need anything". When a step takes minutes (a render, an
  install, a build), say so in one line when it starts so quiet reads as work.
- If something fails, say exactly what failed and what the viewer should do in
  one or two plain sentences. If the same tool hangs twice in a row, stop
  retrying, say it is down, and suggest a restart.
- Replace the placeholder `BRAND` in every file name below with a lowercase,
  hyphenated version of the brand name without generic words (e.g.
  `halo-audio`, `sierravolt` for "SierraVolt E-Bikes").
- Higgsfield references go in `medias` with the role the model lists
  (`models_explore` action `get` shows it): `image` for `gpt_image_2`,
  `image_references` for the 3D models and `seedance_2_5`. A job ID from an
  earlier generation works as the value.

## Phase 0 â€” silent preflight, then a checklist

Before replying to the opening sentence, check quietly:

1. **Higgsfield MCP**: tools named `generate_image`, `generate_image_batch`,
   `generate_3d`, `generate_video`, `jobs_wait`, `models_explore`, `balance`
   exist, and a `balance` call returns real credits.
2. **Node.js**: `node --version` (needed for the Phase 4 build and for
   optimizing the 3D model).
3. **A browser you can drive**: Claude's built-in browser or preview pane
   (tools that navigate, take screenshots, and run JavaScript on a page). It
   is how you check your own work in Phases 3â€“5. If none exists, say so on the
   checklist and plan to ask the viewer to look instead.
4. **ffmpeg**: `which ffmpeg`. Only the film option in Phase 2 needs it, and a
   missing one is fine: the recipes use the `ffmpeg-static` npm fallback.
   Never ask the viewer to install Homebrew.
5. **Hostinger connector**: either named tools (like `hosting_listWebsitesV1`)
   or a Hostinger `search` + `execute` pair whose operations are named like
   `hosting_websites_list`. Either counts as connected. Optional now; it is
   what Phase 6 publishes with. If missing, note it on the checklist as "add
   it before publishing (Phase 6 hands you the link)" and carry on. Do not
   call any Hostinger tool during preflight (the first call may open a login).

Open your first reply with the result as a short âœ“/âœ— checklist, naming the
real Higgsfield credit balance. If Higgsfield is missing, stop there and give
the fix: *"In Claude: Customize â†’ Connectors â†’ Add custom connector â†’ paste
https://mcp.higgsfield.ai/mcp â†’ sign in. Then close and reopen Claude, come
back to this chat, and say 'I'd like to make a website for my brand' again.
Connectors only load when the app starts."* Otherwise continue straight into
Phase 1 in the same reply.

---

## Phase 1 of 6 â€” Brand kit

Ask **only** this first (clickable):

> Do you already have a brand, or would you like me to create one from scratch?
> **A)** I already have a brand  **B)** Create a brand from scratch

**If A (existing brand)**: ask these as one grouped list, then wait. If they
paste a blurb instead, use it and don't re-ask; anything it leaves out
(benefits, specs, socials) you invent tastefully and mark as placeholders in
the brand kit.

1. Brand name and slogan?
2. What do you sell, and who is it for? (positioning + target audience)
3. Brand personality in a few words? (premium, minimal, bold, playfulâ€¦)
4. Color palette, hex codes if you have them?
5. Fonts, if you have them?
6. Logo: do you have one, or describe the direction? (Drag a logo or product
   photos into the chat if you have them.)
7. Describe the product or service: materials, features, key specs, or what
   the service actually delivers.
8. The key benefits you want the site to highlight?
9. Visual mood: lighting, textures, atmosphere?
10. The primary goal of the site? (pre-orders, bookings, sign-ups, contactâ€¦)
11. Contact details for the site: email, phone, socials, location?

**If B (from scratch)**: ask only these three, then wait:

1. What type of product, service, or business is this for? (I can choose for
   you, or describe yours.)
2. What visual style or mood do you want? (dark and cinematic, light and
   minimal, bold and energeticâ€¦)
3. Anything the name, personality, or colors should reflect?

**Then build the workspace.** Create:

```
assets/images/   assets/3d/   assets/videos/   assets/references/   copy/   website/
```

Write `copy/brand-kit.md` with these 16 sections (17 comes right after;
18 is added in Phase 2), filled from the answers
(invent tastefully for anything a from-scratch brand left open; mark invented
contact details as placeholders):

1. **Brand name**: short, premium, original. Never a real brand.
2. **Slogan**: one line.
3. **Positioning**: what it is and where it sits in the market.
4. **Target audience**: who, concretely.
5. **Brand personality**: 5â€“8 adjectives plus a sentence.
6. **Color palette**: 5â€“7 hex codes with roles: background (tinted, never
   pure `#000` or `#fff`), surface, text, muted text, primary accent, optional
   secondary accent, border/line. One strong accent, used sparingly. The accents
   also become the rim light and the live particles, so pick accents that glow.
7. **Typography**: heading font + body font from Google Fonts. The heading
   face should have real character; never Inter or Roboto as the display font.
8. **Logo direction**: a simple, original wordmark/mark concept.
9. **Product / service description**: materials, design, features, specs,
   use cases (or, for a service, what is delivered and how).
10. **Key benefits**: 4â€“6 bullets usable as feature copy and as hotspots.
11. **Visual mood**: lighting, materials, environment, atmosphere (rain,
    mist, dust, embers, light streaks), camera style.
12. **Website goal**: the one action the page drives.
13. **Contact & links**: email, phone, socials, location (or placeholders).
14. **Landing page sections**: an ordered list (default: the story with five
    beats, Impact statement, Features, Explore in 3D or Design & materials,
    Made for the audience, Specs / details, CTA, Footer).
15. **The story**: five beats the visitor scrolls through. For each: what they
    see (hero three-quarter, a macro on the signature detail, a side profile,
    a wide view of its world, the resting frame), the one line of copy that
    sits on screen, and which side the copy sits on. Film: this is the film's
    visual journey. 3D: these are camera positions around the product. The
    subject always stays clear of the copy. Close-ups go to solid, chunky
    parts (a motor, a hinge, a dial), never to thin wires, spokes, or glass.
16. **Hero still brief**: one perfect 16:9 frame that is the thumbnail, the
    poster the page shows while the hero loads, and the look every other
    image, the film, or the 3D model copies: the product as the star, dramatic directional light with the accent
    as rim light, one physical element for drama (rain, splash, mist, dust, a
    light streak), one calm side for the headline.

**Design bans.** Add a section **17. Design bans** with this starting list,
which Phase 4 obeys and Phase 5 extends: *no cream or off-white page
background, no italic accent words inside headlines, no numbered "01 / 02 /
03" section labels, no monospace eyebrow labels, no pill-shaped buttons, no
gradient-filled headline text, no emoji as icons, no three identical feature
cards in a row, no purple-to-blue gradients, no glass effect on every card.*

Do **not** generate images, 3D, video, or the website in this phase.

End with a 5-line summary (name, slogan, palette hexes, fonts, site goal) and:

> Read through `copy/brand-kit.md`. Reply **"next"** to design the hero, or
> tell me anything to change first.

---

## Phase 2 of 6 â€” The hero still and the experience

Read `copy/brand-kit.md`, then walk the viewer through two decisions with
clickable choices, and only then generate.

### 2a. Explain the effect in one breath

> Your hero is where the $10k look comes from. It starts from one perfect
> still image, which is also your thumbnail. Then you choose how it comes
> alive: as a cinematic film that plays as visitors scroll, with live light
> and particles floating over it, or as a real 3D model of your product that
> the camera flies around and visitors can grab and spin.

### 2b. Choose the experience (clickable, recommended first)

Judge the product's **3D suitability** first, honestly. Image-to-3D turns
solid, opaque, chunky forms into clean models (shoes, headphones, watches,
bottles, helmets, speakers, cameras, furniture, tools, most gadgets). It
struggles with very thin or see-through parts (bicycle spokes, cables, chains,
glass, mesh fabric, hair, fur, foliage) and with people and places. Services
and software have no object to model.

This is the viewer's call; your job is an honest recommendation. Show the
recommended option first. The letters below are how this file refers to the
options, not the order they appear in.

> How should your hero come to life?
> **A) Real 3D product**: your product as a live 3D model. Scroll flies the
> camera around it, visitors grab and spin it, tap hotspots, and switch the
> lighting. Two 3D candidates usually cost 50â€“60 credits.
> **B) Cinematic film + images**: a scroll-scrubbed hero film with live
> particles and light in your colors floating over it, and rich generated
> imagery through the page. The proven $10k look; works for anything. A
> 12â€“16 second 1080p film is usually 140â€“200 credits.
> **C) Both**: the 3D product as the hero and Explore section, plus a short
> film section lower on the page. Most credits.

Recommend A for solid physical products that pass the suitability check and
B for everything else: services, software, places, people, and borderline
products (a bicycle, fine wires, glass). If they pick A for a borderline
product, say in one line what may not survive and that Phase 3's review will
show it before anything is built; B stays the fallback. Prices here are
ballpark; every real price is preflighted before it's spent.

Lock the choice into `copy/brand-kit.md` under **18. Experience**: the option,
the story beats from section 15, and for B or C a **film brief**: a 12â€“16s continuous
shot, slow camera movement that reads as *descending or approaching*, low-key
light with the accent as rim light, one calm side for headlines, and an
explicit composed **final frame** where the page will come to rest.

### 2c. The hero still (every option)

**The hero still is the whole site's first impression, the thumbnail, the
poster, and the look the 3D model copies, so it gets the highest bar.**
Preflight with `get_cost: true`, then ask (clickable):

> I'll generate three hero candidates from the brief (2k, highest quality):
> about N credits, you have M. Go?

The batch tool can't preflight, so preflight one `generate_image` call with
the exact settings and multiply by three.

**Model:** `gpt_image_2` at `resolution: "2k"`, `quality: "high"`, aspect
`16:9`. If it isn't listed, run `models_explore` and use the best GPT Image
or `nano_banana_pro` model. If the viewer dropped a real product photo into
the chat, upload it with the media-upload tool and pass it as an image
reference so the subject is *their* product. Submit all three with
`generate_image_batch` (same prompt family, three compositions), wait with
`jobs_wait`, and download each `result_url` with `curl` to
`assets/references/BRAND-hero-1.png` â€¦ `-3.png`.

Every prompt describes the palette as materials and light, not hex codes, and
ends with: *no people, no text, no lettering, no logos, no third-party marks,
photorealistic, cinematic, premium.*

A candidate only qualifies if all of these are true: the product is
unmistakably the star and fills a third or more of the frame; the light is
directional and dramatic (rim light, a glow, golden hour, wet reflections),
never flat studio light; there is one physical element that gives the frame
drama (rain, splash, mist, dust, a light streak, motion frozen mid-air) and it
is in the brand's palette; one side of the frame is calm enough to hold a
headline; and it still reads as premium when shrunk to thumbnail size. For
option A, also: the whole product is visible (nothing important cropped).
Read all three, say which meets the bar and why, then ask them to pick. If
none qualifies, say so and re-roll once with a changed composition before
asking again. Copy the pick to `assets/references/BRAND-hero.png` and **keep
its job ID**.

### 2d. The supporting images

Generate these with the chosen hero's job ID as an image reference so the
product stays identical. Preflight both together and ask once.

- **Options A and C, the 3D source** â†’ `assets/3d/BRAND-3d-source.png`: *the
  exact same product from the reference, alone, centered, the whole product in
  frame with generous margin, three-quarter front view at eye level, on a
  plain seamless mid-grey studio background, soft even light, no rain, no
  props, no reflections on the floor, no motion blur, no text.* Aspect `1:1`.
  Image-to-3D copies exactly what it sees, so this image decides the model's
  quality. If the product has an obvious front and side, the three-quarter
  view shows both. For long products with thin parts (bikes, scooters,
  anything with wheels, cables, or a frame you can see through), use a pure
  side profile instead, aspect `16:9`: wheels and frames come out far cleaner
  seen flat-on.
- **Every option, the world image** â†’ `assets/references/BRAND-world.png`,
  16:9: the product's environment from the visual mood (the wet road, the
  studio, the shoreline) with the product small or absent. Lower sections use
  it; for B and C it is also the film's environment reference.
- **Options B and C only, the material detail** â†’
  `assets/references/BRAND-material.png`: an extreme macro of the product's
  signature material. The film uses all three references.

Read each result and describe it honestly: sneaked-in lettering, off-brand
colors, and for the 3D source whether the background is truly plain and the
whole product is in frame. Then (clickable):

> Reply **"next"** to bring it to life, or say which image to redo and what
> to change.

---

## Phase 3 of 6 â€” Bring it to life

Read `copy/brand-kit.md` (sections 15â€“18).

### Option A (and the 3D half of C): the 3D model

**Price it.** Preflight both of these with `get_cost: true` on the 3D source
image's job ID:

- `meshy_v7_image_to_3d` with `should_texture: true`, `enable_pbr: true`
  (PBR maps make metal, rubber, and glossy paint react to the lights). For a
  product with thin parts, add `ultra_mode: true` and `target_polycount: 150000` (a few credits more, finer geometry)
- `tripo_h3_1_image_to_3d` with `texture_quality: "detailed"`,
  `geometry_quality: "detailed"`

Then ask (clickable, recommended first):

> Phase 3 of 6 â€” the 3D model. **Two candidates from two different 3D models
> (Recommended)**: about N credits, you have M. I'll render both from four
> angles and tell you which is better. Or **one candidate** (Meshy 7): about K
> credits.

Run the generations with `generate_3d` (the image goes in `medias` with the
role the model lists; `models_explore` action `get` shows it). Say a 3D
render takes a few minutes. **While it renders, set up the website project
quietly** (scaffold `website/`, install the packages, per the recipes) so
Phase 4 starts fast; write no design yet.

Download each GLB with `curl` to `assets/3d/BRAND-model-a.glb` and `-b.glb`,
optimize each into `website/public/model/` (recipes, Â§1), and open the
**model review page** (recipes, Â§2) for each: four angles on one screen.
Screenshot it and look hard. A model passes only if:

- the silhouette matches the hero still from the front and the side;
- the signature detail (the thing beat 2 zooms into) is crisp, not melted;
- the back and underside are believable (image-to-3D invents them; check);
- no chunk of background or floor is fused to the base, nothing floats;
- the texture is not smeared, doubled, or carrying stray lettering;
- it reads as premium under the site's lighting, not as a toy.

Also find the **front**: the rotation (`yaw`, in radians) that makes the
review page's front view show the product's hero side. Beat 1 builds on it.

Show the viewer the review screenshots, say which passes and why in two or
three plain lines, and ask them to pick (clickable). If some parts came out
weak but the model passes overall, move the story's close-ups to the parts
that survived and update brand-kit section 15. Copy the pick to
`website/public/model/product.glb`. If neither passes, say so plainly and
offer (clickable): **re-roll once from a new 3D source image** (a different
angle, a plainer background), or **switch to the film experience** (option B).
Never ship a model you would not put on the thumbnail.

### Option B (and the film half of C): the film

**Model and price.** Preflight `seedance_2_5` with `get_cost: true` at 1080p.
If that exceeds the balance, or the viewer asks for a cheaper option,
preflight one mid-priced video model from `models_explore` too and present
both with one line each. Then ask (clickable, recommended first):

> Phase 3 of 6 â€” the hero film: 16:9, 1080p, <duration></duration>, about N credits (you
> have M). Go?

`generate_video` with `mode: "omni_reference"`, the hero, material, and world
job IDs as `image_references`, `aspect_ratio: "16:9"`, `resolution: "1080p"`,
`bitrate_mode: "high"`, `generate_audio: false`, `duration` 12â€“16 (5â€“6 for a
film section in option C). Never accept 720p. Decline any preset the
generator offers; use the literal prompt:

> One continuous shot, no cuts. <SUBJECT></subject> <approaches / descends / reveals>
> from <START STATE></start> to <END STATE></end> along <a slow forward push, straight down
> the center, a pull back>. The subject stays alive: <small natural motion></small>.
> The scene stays alive: <drifting atmosphere, shifting light>. Low-key
> cinematic lighting with <accent color></accent> rim light, shallow depth of field,
> one side of the frame kept calm as <soft shadow / receding depth>. The shot
> ends at rest: <the composed final frame, fully described>. No people, no
> text, no lettering, no logos, no fast cuts, no shaky camera, no busy
> background, no heavy particles. Subject identical to the reference images.

Download to `assets/videos/BRAND-film.mp4`, confirm 1920Ã—1080, extract start /
middle / end frames and run the ending-rest check (recipes, Â§9). Describe the
motion honestly. If the ending keeps moving, prefer the **tail trim** over a
re-roll. If a concept fails three times, change the concept, not the prompt.

### Hand-off (every option)

> Reply **"next"** to build the website, or tell me what to change.

---

## Phase 4 of 6 â€” Build the website

Read `copy/brand-kit.md` and the **Build recipes appendix** at the bottom of this file before writing code. No questions in this phase: everything needed
already exists. Tell the viewer this build takes 10â€“20 minutes and that they
can leave it running; you will check every part of it yourself before calling
them back.

**Order of work:**

1. **Media into place.** The chosen model at `website/public/model/product.glb`
   (already optimized). The hero still as `website/public/img/hero.jpg`
   (1920 wide, the poster and the LCP image) and the world image as
   `website/public/img/world.jpg`. For B or C, process the film with the
   all-keyframe recipe into `website/public/film.mp4`.
2. **Scaffold** (if Phase 3 didn't already): Vite + vanilla JS in `website/`
   with `three`, `gsap`, and `lenis`. Files: `index.html`, `src/main.js`,
   `src/stage.js` (A, C) or `src/atmosphere.js` (B), `src/style.css`,
   `public/`, `README.md`.
3. **The stage** (A, C): the fixed WebGL canvas behind the whole page, exactly
   as the stage recipe (Â§4): poster first, the model loads after the page
   text, lights in the brand's accents, particles from the visual mood, bloom
   on desktop only, adaptive quality, a clean fallback to the poster.
   **Option B:** the scrubbed film layer (Â§9) with the live atmosphere canvas
   over it (Â§10).
4. **The story.** 3D option: write the five camera keyframes from brand-kit
   section 15 (Â§6). Film option: place the five beats of copy over the film,
   each fully readable for 80â€“130vh of scroll so a quick flick can't skip it,
   on the calm side of the frame. Then **check every beat yourself**: scroll
   to each one in the browser, screenshot at 1440 and 393 wide, and look. The
   subject is framed with margin and never under the copy; the text reads
   over the busiest frame behind it; the resting frame looks composed. Adjust
   and screenshot again until every beat is a frame you'd put in a portfolio.
5. **Sections**, in the brand kit's order (default: the story with five beats
   of copy; Impact statement; Features; for the 3D option **Explore in 3D**
   with drag-to-spin, hotspots from the key benefits, and 2â€“3 lighting modes
   named for the brand's world, or for the film option **Design & materials**
   built on the material and world images with 3D-tilt cards;
   Made-for-the-audience; Specs / details; CTA with pricing-style
   presentation; a footer with the real contact details that fully covers the
   stage or film). Copy comes from the brand kit: real, specific, short sentences in
   the brand's voice. If web search is available, skim a few real customer
   reviews in the niche first and use the buyers' own words for pains and
   outcomes. No lorem ipsum, no stock filler.
6. **Design.** CSS variables from the brand palette; Google Fonts trimmed to
   the weights used; accent color only for CTAs, highlights, hotspots, and
   light; one signature element unique to this site; no two adjacent sections
   sharing the same layout skeleton; generous spacing; responsive; real
   `<title>`, meta description, `theme-color`, and an inline SVG favicon from
   the logo direction. **Obey brand-kit section 17 (Design bans) to the
   letter.** Sections over the live stage get the legibility system (Â§7).
7. **The form.** Wire the CTA/contact form to the brand kit's contact email as
   a `mailto:` link (or a JS-only success state if contact details are
   placeholders), and say plainly in the README where a visitor's message ends
   up.
8. **Phones.** The stage runs on phones at a lighter quality (the recipe
   handles it): product centered low with the copy above, drag still spins it,
   vertical swipes still scroll. Stacked cards; no pins that fight touch.
9. **Verify** with the self-test (Â§11): `npm run build` passes, console clean,
   the stage reaches `stage-ready`, frame rate and quality numbers, every beat
   screenshotted at desktop and phone widths, drag works, hotspots land on the
   right parts, the fallback shows the poster when the model is missing, links
   work. Then run two gates:
   - **Copy gate:** grep for em dashes and the stock words *leverage,
     seamless, empower, unlock, robust, actionable, data-driven, solutions,
     elevate, delve*, and rewrite every hit.
   - **Design gate:** look at your own screenshots and name any default style
     you fell back on (the banned list, plus anything that looks like every
     other AI-built site: a centered hero with two side-by-side buttons as the
     whole idea, uniform card grids, the same section rhythm repeated). Add
     what you found to section 17, fix it, and screenshot again.

Finish with the exact preview URL and one line on how to open it (the Preview
button in Claude Code, or the localhost link in a real browser; the browser
is the true preview for 3D and scroll-film pages). Then:

> Phase 4 of 6 done â€” the site is running at <url></url>. Scroll all the way
> through (and grab the product in the Explore section, if we built 3D),
> then tell me everything you'd like changed. Big changes first, small ones after.

---

## Phase 5 of 6 â€” Preview and revisions

This phase repeats until the viewer says they are happy.

- Take feedback as a batch. Restate it as a numbered list, make all the
  changes, rebuild, **screenshot what you changed**, and report in plain
  words. Casual notes like "this part feels boring" or "the shoe looks weird
  here" are good bug reports; translate them yourself.
- Structural changes (sections, camera beats, the model, the film) before
  cosmetic ones (colors, copy, spacing).
- If they select an element or attach a drawing in Claude Code, target exactly
  that element.
- Camera notes ("show more of the motor", "start closer") are keyframe edits:
  change the beat, screenshot it, show it.
- Every design note that names a pattern they dislike goes into section 17 so
  it never comes back.
- Before finishing, re-check the things people forget: real contact details,
  working CTA links, social links, `<title>` and meta description, favicon,
  the phone view, the poster fallback, and both gates.
- Never regenerate media in this phase unless explicitly asked.

When the viewer is happy, ask (clickable):

> Ready to put it live on Hostinger? **Yes, publish it** / Not yet

---

## Phase 6 of 6 â€” Publish

Runs when the viewer is happy with the site, or any time they say "publish",
"deploy", "put it live", or "push it to Hostinger". The site goes live on
Hostinger through the Hostinger connector, in this same chat.

**Check the connector first.** Look for Hostinger tools: either named tools
(like `hosting_listWebsitesV1`) or a Hostinger `search` + `execute` pair. With
the pair, find each operation by keyword with `search` (it returns the exact
operation name and input schema) and run it with `execute`.

- **Connected** â†’ go straight to the publish steps. The first Hostinger call
  may open a browser login; warn the viewer before that call: *"A browser
  window may open for you to sign in to Hostinger and click Allow."*
- **Not connected** â†’ say this and stop:

  > Publishing needs a Hostinger hosting plan and the Hostinger connector.
  > If you haven't already, claim your hosting plan here:
  > https://www.hostg.xyz/aff_c?offer_id=519&aff_id=108612&url_id=6771
  > That's the channel's partner link with the current discount; it supports
  > the channel at no extra cost. Grab your free domain while you're there.
  > Then add the connector inside Claude: Customize â†’ Connectors â†’ search
  > "Hostinger Connector" â†’ add it â†’ sign in with your Hostinger login â†’ Allow.
  > On that same screen, set the read-only tools to Allow so publishing
  > doesn't stop to ask on every step.
  > Last step: close Claude completely, open it again, come back to this
  > same chat, and say "continue". Everything here is saved. Connectors only
  > load when the app starts, so this restart is expected, not a problem.
  >

  Then wait. Setting up hosting can take them away for a while. Do not fill
  the wait with more hosting questions or previews of the steps ahead. Never
  skip the restart or try to work around it: a chat that is already running
  cannot see a connector added during it, no matter how long you wait. When
  they come back and say "continue", check for the tools again and follow
  **Connected**.

**Publish steps:**

1. **Final build.** `npm run build -- --base=./` in `website/`. Fix any error
   before going further.
2. **Pick the address.** List the account's websites and domains. If a domain
   clearly matches the brand, propose it (clickable): *"I can see
   <domain></domain> on your account. Put the site there, or on a free temporary
   address first?"* Never assume the match. If the domain they just bought
   isn't listed yet, wait a minute and list again. If nothing fits, offer a
   free temporary subdomain; it's a real option and a custom domain can be
   connected later.
3. **Set up the website** on that domain if it isn't set up on the hosting
   plan yet. A domain registered at Hostinger points itself; nothing to
   configure. A new website appears in the list before its setup finishes:
   poll the website setups (`hosting_websites_list-setups`) until `completed`
   before uploading anything.
4. **Patch the live URL** into `og:url` and `og:image` in `index.html` (use the
   editor, never a shell find-and-replace), then rebuild.
5. **Deploy** the CONTENTS of `website/dist`: `index.html` must be at the top
   level of what's uploaded, never nested in a folder. Raw media in `assets/`
   never ships; only `dist` does. There are two routes; pick by what is
   connected, and never tell the viewer a deploy tool is "missing":
   - **A folder-deploy tool exists** (`hosting_deployStaticWebsite`, which the
     locally installed connector provides) â†’ point it at `website/dist` and
     let it upload. Search for it too; don't assume it's absent.
   - **No folder-deploy tool** (the hosted connector at `mcp.hostinger.com`,
     which Claude's connector directory adds) â†’ that server cannot see this
     computer's files, so follow the upload recipe in the going-live section
     of the Build recipes appendix: zip the contents of `dist`, request an upload URL,
     push the zip with curl, then deploy the archive. This route is normal,
     not a fallback.
6. **Verify it yourself** before telling the viewer: the live URL returns 200
   over HTTPS and its HTML contains the brand name; `model/product.glb` (or
   `film.mp4`) serves with the right size; then open the live site in the
   browser, confirm `stage-ready`, and screenshot beat 1 and the Explore
   section. A brand-new domain's certificate can take a few minutes; if the
   browser shows a security warning right after the first deploy, say so,
   wait, and re-check.
7. **Hand it over** with the live URL and ask them to open it on their phone
   as well as their computer (and to try spinning the product, if it's 3D).
8. **Turn on auto-deploy.** Say it out loud and then honor it: *"From now on,
   every time you approve a change here, I'll deploy it to the live site
   automatically and confirm with the URL. You never have to ask."*

Close with:

> Your site is live at <url></url>. Any change you want, describe it here and I'll
> update the live site. The build files stay in this folder.

---

## When the viewer comes back later

If `copy/brand-kit.md` and `website/` already exist, do **not** restart the
phases. If they ask to publish, deploy, or go live, go straight to Phase 6.
If the site is already live, every approved change gets deployed again
(Phase 6 step 8). Otherwise read the brand kit and the Build recipes appendix,
and treat the request as a Phase-5 revision. If they ask for new media, run
only the relevant part of Phase 2 or 3, re-optimize the model or re-process
the film, and screenshot the result before showing it.

---

## Build recipes appendix

Read this before Phase 4. Every brand decision
(colors, fonts, copy, sections, story beats) comes from `copy/brand-kit.md`;
this file only covers *how* the site is built and shipped. The code below has
been run end to end (three.js r186, GSAP 3.15, Lenis 1.3, Vite 8); copy it,
then adapt the numbers to the brand.

### Stack

- Vite + vanilla JavaScript ES modules
- `three` (WebGL: the 3D model, lights, particles, bloom; the film option uses it only for the live atmosphere)
- `gsap` + `gsap/ScrollTrigger` (scroll-driven camera and reveals)
- `lenis` (smooth scroll)
- CSS variables for brand tokens
- 3D option: the product as an optimized GLB at `website/public/model/product.glb`
- Film option: an all-keyframe H.264 film at `website/public/film.mp4` (Â§9)

```bash
cd website
npm create vite@latest . -- --template vanilla   # or write the files directly
npm install three gsap lenis
npm run dev
npm run build -- --base=./                        # portable static build
```

Preview builds over HTTP (`npx vite preview` or `npx serve dist`), never
`file://`: the model loads with `fetch`, which `file://` blocks, so the page
would fall back to the poster on purpose.

### 1. Process the media (do this first)

**The 3D model.** Generated GLBs arrive heavy (8â€“30 MB, uncompressed
textures). Optimize each one; it keeps the shape, compresses geometry with
meshopt, and turns textures into WebP at 2048 px max:

```bash
npx -y @gltf-transform/cli optimize assets/3d/BRAND-model-a.glb website/public/model/candidate-a.glb \
  --texture-compress webp --texture-size 2048
```

Target: under ~6 MB. A 7.8 MB sample landed at 1.8 MB. If a model is still
large, add `--simplify-ratio 0.5` and check the review page again (detail
lost on the signature part means go back). The loader in Â§4 already registers
the meshopt decoder, so no extra files ship.

**The poster.** The chosen hero still is the first thing visitors see and what
phones keep if WebGL fails. Export it once at 1920 wide:

```bash
ffmpeg -y -i assets/references/BRAND-hero.png -vf scale=1920:-2 -q:v 3 website/public/img/hero.jpg
```

No ffmpeg? `sips -Z 1920 -s format jpeg assets/references/BRAND-hero.png --out website/public/img/hero.jpg`
works on any Mac. Same for `world.jpg`.

**The film (option B or C only).** See Â§9.

### 2. The model review page (Phase 3)

A dev-only page that renders one model from four angles under neutral light,
on one screen, so you can judge it from a single screenshot. It lives at
`website/inspect.html` and is never part of the build (Vite only builds
`index.html`).

```html
<!doctype html>
<html lang="en">
<head><meta charset="utf-8" /><title>Model review</title>
<style>html,body{margin:0;background:#1b1d22;color:#ddd;font:13px system-ui}canvas{display:block;width:100vw;height:100vh}
#label{position:fixed;left:10px;top:8px}</style></head>
<body><div id="label"></div><canvas id="c"></canvas>
<script type="module" src="/src/inspect.js"></script></body>
</html>
```

`website/src/inspect.js`:

```js
// Dev-only review page: one model, four angles, neutral light. /inspect.html?model=/model/candidate-a.glb&yaw=0
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { MeshoptDecoder } from "three/addons/libs/meshopt_decoder.module.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";

const q = new URLSearchParams(location.search);
const url = q.get("model") || "/model/product.glb";
const yaw = parseFloat(q.get("yaw") || "0");
const canvas = document.getElementById("c");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, preserveDrawingBuffer: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setSize(innerWidth, innerHeight, false);
renderer.setScissorTest(true);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x2a2d33);
scene.environment = new THREE.PMREMGenerator(renderer).fromScene(new RoomEnvironment(), 0.04).texture;
scene.add(new THREE.DirectionalLight(0xffffff, 1.2).translateX(3).translateY(5).translateZ(4));

const gltf = await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).loadAsync(url);
const model = gltf.scene;
model.rotation.y = yaw;
const box = new THREE.Box3().setFromObject(model);
const size = box.getSize(new THREE.Vector3()), center = box.getCenter(new THREE.Vector3());
const s = 2 / Math.max(size.x, size.y, size.z);
model.scale.setScalar(s);
model.position.set(-center.x * s, -box.min.y * s, -center.z * s);
scene.add(model);

let tris = 0;
model.traverse((o) => { if (o.isMesh) tris += (o.geometry.index ? o.geometry.index.count : o.geometry.attributes.position.count) / 3; });
document.getElementById("label").textContent = `${url} Â· ${Math.round(tris).toLocaleString()} triangles Â· front / right / back / three-quarter from above`;

const views = [[0, 0.8, 4.2], [4.2, 0.8, 0], [0, 0.8, -4.2], [2.8, 2.6, 2.8]];     // front, right, back, 3/4 top
const cam = new THREE.PerspectiveCamera(30, (innerWidth / 2) / (innerHeight / 2), 0.05, 50);
const w = innerWidth / 2, h = innerHeight / 2;
const pull = Math.max(1, 1.3 / cam.aspect);          // narrow cells: back the camera off so nothing is cropped
views.forEach((p, i) => {
  const x = (i % 2) * w, y = (i < 2 ? 1 : 0) * h;
  renderer.setViewport(x, y, w, h);
  renderer.setScissor(x, y, w, h);
  cam.position.set(p[0] * pull, p[1] * pull, p[2] * pull);
  cam.lookAt(0, 0.5, 0);
  renderer.render(scene, cam);
});
document.body.dataset.ready = "1";
```

Open `http://localhost:5173/inspect.html?model=/model/candidate-a.glb`, wait
for `document.body.dataset.ready === "1"`, and screenshot at a desktop width.
Top-left is the front. If the front view doesn't show the product's hero
side, try `&yaw=1.57`, `3.14`, or `-1.57` until it does; that number becomes
`modelYaw` in Â§5. Judge against the bar in Phase 3, then do the same for
candidate B.

**The browser pane pauses when hidden.** If the page stays blank or
`requestAnimationFrame` never fires, the preview pane is probably in the
background. The review page renders once without an animation loop, so it
still works. For the live site, see the self-test note in Â§11.

### 3. Layer architecture

| Element           | z-index | Role                                                  |
| ----------------- | ------: | ----------------------------------------------------- |
| `.stage-poster` |       0 | the hero still, painted instantly, kept if 3D fails   |
| `#stage`        |       0 | the WebGL canvas, fades in over the poster when ready |
| `.stage-dim`    |       1 | darkens the stage behind regular sections             |
| `.stage-load`   |      50 | a thin accent progress line while the model downloads |
| `#page`         |      10 | all sections                                          |
| `.hotspot`      |      20 | labels pinned to points on the product (Explore only) |

```html
<img class="stage-poster" src="/img/hero.jpg" alt="" aria-hidden="true" fetchpriority="high" />
<canvas id="stage" aria-hidden="true"></canvas>
<div class="stage-dim" aria-hidden="true"></div>
<div class="stage-load" aria-hidden="true"></div>

<main id="page">
  <section id="story">
    <div class="beat beat--left">â€¦beat 1 copy (the h1)â€¦</div>
    <div class="beat beat--right">â€¦beat 2â€¦</div>
    â€¦five beats, each 100vh tallâ€¦
  </section>
  â€¦regular sectionsâ€¦
  <section id="explore">
    <div class="explore__drag" aria-label="Drag to spin the product"></div>
    <div class="explore__ui">
      â€¦heading, one line of copyâ€¦
      <div class="light-modes">
        <button data-light="studio" aria-pressed="true">Studio</button>
        <button data-light="night" aria-pressed="false">Night</button>
        <button data-light="golden" aria-pressed="false">Golden hour</button>
      </div>
    </div>
    <button class="hotspot is-hidden" data-hotspot="motor"><span>â€¦benefitâ€¦</span></button>
  </section>
  â€¦CTAâ€¦
  <footer class="stage-cover footer">â€¦contactâ€¦</footer>
</main>
```

The structural CSS (style the rest from the brand kit):

```css
:root { --bg: #0d0f12; --text: #e9eef2; --accent: #c8ff00; --accent-2: #00e5ff; }
html, body { margin: 0; background: var(--bg); color: var(--text); font-family: system-ui, sans-serif; overflow-x: clip; }
#stage, .stage-poster, .stage-dim { position: fixed; inset: 0; width: 100%; height: 100%; }
#stage { z-index: 0; opacity: 0; transition: opacity .8s ease; }
.stage-poster { z-index: 0; object-fit: cover; }
body.stage-ready #stage { opacity: 1; }
body.stage-failed #stage { display: none; }
.stage-dim { z-index: 1; background: var(--bg); opacity: 0; pointer-events: none; transition: opacity .6s ease; }
body.exploring .stage-dim { opacity: 0 !important; }   /* beats the scrubbed inline opacity */
.stage-load { position: fixed; left: 0; top: 0; height: 2px; z-index: 50; background: var(--accent);
  width: calc(var(--load, 0) * 100%); transition: opacity .4s; }
body.stage-ready .stage-load, body.stage-failed .stage-load { opacity: 0; }
#page { position: relative; z-index: 10; }
.beat { min-height: 100vh; display: flex; flex-direction: column; justify-content: center; padding: 0 6vw; max-width: 34rem; }
.beat--right { margin-left: auto; text-align: right; }
.panel { min-height: 80vh; padding: 20vh 6vw; }
#explore { position: relative; min-height: 130vh; }
.explore__drag { position: absolute; inset: 0; cursor: grab; touch-action: pan-y; }
.explore__ui { position: sticky; top: 12vh; padding: 0 6vw; max-width: 26rem; pointer-events: none; }
.explore__ui button { pointer-events: auto; }
.hotspot { position: fixed; left: 0; top: 0; z-index: 20; margin: -9px 0 0 -9px; width: 18px; height: 18px; border-radius: 50%;
  border: 2px solid var(--accent); background: rgba(13,15,18,.6); transition: opacity .3s; }
.hotspot span { position: absolute; left: 26px; top: -4px; white-space: nowrap; font-size: 13px; }
.hotspot.is-hidden { opacity: 0; pointer-events: none; }
.footer { position: relative; min-height: 100vh; background: var(--bg); padding: 20vh 6vw; }
```

Beat copy sits on the side the brand kit's section 15 names; the camera
keyframes keep the product on the other side (Â§6). The footer must be at
least 100vh and opaque: once it covers the screen the stage stops drawing.
Name the light modes after the brand's world ("Trailhead", "Night ride"),
not "Mode 1".

### 4. The stage (the heart of the site)

`website/src/particles.js` (shared by the stage and the film atmosphere):

```js
// Shared 3D helpers: GPU particles in the brand accent, and a soft radial glow texture.
import * as THREE from "three";

export function radialTexture(color) {
  const c = document.createElement("canvas");
  c.width = c.height = 256;
  const g = c.getContext("2d");
  const grad = g.createRadialGradient(128, 128, 0, 128, 128, 128);
  grad.addColorStop(0, color);
  grad.addColorStop(1, "transparent");
  g.fillStyle = grad;
  g.fillRect(0, 0, 256, 256);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function makeParticles(count, color, pixelRatio, size = 22, opacity = 0.5) {
  const g = new THREE.BufferGeometry();
  const pos = new Float32Array(count * 3), speed = new Float32Array(count);
  for (let i = 0; i < count; i++) {
    pos[i * 3] = (Math.random() - 0.5) * 12;
    pos[i * 3 + 1] = Math.random() * 7 - 1;
    pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    speed[i] = 0.5 + Math.random();
  }
  g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  g.setAttribute("aSpeed", new THREE.BufferAttribute(speed, 1));
  const m = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    uniforms: { uTime: { value: 0 }, uBoost: { value: 0 }, uColor: { value: new THREE.Color(color) }, uSize: { value: size * pixelRatio }, uOpacity: { value: opacity } },
    vertexShader: /* glsl */ `
      attribute float aSpeed;
      uniform float uTime, uBoost, uSize;
      varying float vAlpha;
      void main() {
        vec3 p = position;
        p.y = mod(p.y - uTime * aSpeed * (0.8 + uBoost), 7.0) - 1.0;   // fall, wrap
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_PointSize = uSize * aSpeed / -mv.z;
        vAlpha = smoothstep(9.0, 1.2, -mv.z);                          // fade with distance
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: /* glsl */ `
      uniform vec3 uColor;
      uniform float uOpacity;
      varying float vAlpha;
      void main() {
        vec2 c = gl_PointCoord - 0.5;
        float streak = smoothstep(0.5, 0.0, length(c * vec2(7.0, 1.0)));  // tall, thin streak
        gl_FragColor = vec4(uColor, streak * vAlpha * uOpacity);
      }`,
  });
  const pts = new THREE.Points(g, m);
  pts.frustumCulled = false;
  return pts;
}
```

`website/src/stage.js`:

```js
// The live 3D stage: one fixed full-screen WebGL canvas behind the whole page.
// Scroll flies the camera through the story beats, the cursor moves a light,
// the Explore section lets visitors drag to spin the product.
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { MeshoptDecoder } from "three/addons/libs/meshopt_decoder.module.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { makeParticles, radialTexture } from "./particles.js";

const css = (name) => getComputedStyle(document.documentElement).getPropertyValue(name).trim();
const LITE = matchMedia("(max-width: 768px), (hover: none)").matches;      // phones and tablets
const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;

export async function initStage({ modelUrl, beats, hotspots = [], lightModes, modelYaw = 0, lenis }) {
  const canvas = document.getElementById("stage");
  const fail = () => document.body.classList.add("stage-failed");       // CSS keeps the poster

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: !LITE, powerPreference: "high-performance" });
  } catch { fail(); return null; }
  let dpr = Math.min(devicePixelRatio, LITE ? 1.5 : 1.75);
  renderer.setPixelRatio(dpr);
  renderer.setSize(innerWidth, innerHeight, false);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.shadowMap.enabled = !LITE;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  canvas.addEventListener("webglcontextlost", (e) => { e.preventDefault(); fail(); });

  // ---- scene, fog, reflections (no HDR file needed) ----
  const bg = new THREE.Color(css("--bg"));
  const scene = new THREE.Scene();
  scene.background = bg;
  scene.fog = new THREE.FogExp2(bg, 0.07);
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = 0.55;

  const camera = new THREE.PerspectiveCamera(30, innerWidth / innerHeight, 0.05, 60);

  // ---- lights: soft key, two accent rims behind the product, a cursor light ----
  const key = new THREE.DirectionalLight(0xffffff, 1.6);
  key.position.set(3, 5, 4);
  key.castShadow = true;
  key.shadow.mapSize.set(2048, 2048);
  const rimA = new THREE.SpotLight(css("--accent"), 60, 20, 0.55, 0.8);
  rimA.position.set(-3.5, 2.2, -3);
  const rimB = new THREE.SpotLight(css("--accent-2") || css("--accent"), 40, 20, 0.55, 0.8);
  rimB.position.set(3.8, 1.2, -2.6);
  const cursorLight = new THREE.PointLight(0xffffff, 0, 6, 1.6);
  scene.add(key, rimA, rimB, cursorLight);

  // ---- floor: catches the shadow, fades into the fog ----
  const floor = new THREE.Mesh(new THREE.CircleGeometry(12, 64), new THREE.ShadowMaterial({ opacity: 0.35 }));
  floor.rotation.x = -Math.PI / 2;
  floor.receiveShadow = true;
  scene.add(floor);
  const glow = new THREE.Mesh(      // soft accent pool under the product, no hard edge
    new THREE.PlaneGeometry(4.4, 4.4),
    new THREE.MeshBasicMaterial({ map: radialTexture(css("--accent")), transparent: true, opacity: 0.22, depthWrite: false })
  );
  glow.rotation.x = -Math.PI / 2;
  glow.position.y = 0.002;
  scene.add(glow);

  // ---- the product: centered, longest side = 2 units, sitting on the floor ----
  const rig = new THREE.Group();          // scroll + drag rotate the rig
  scene.add(rig);
  const loader = new GLTFLoader().setMeshoptDecoder(MeshoptDecoder);
  let gltf;
  try {
    gltf = await loader.loadAsync(modelUrl, (e) => {
      const p = e.total ? e.loaded / e.total : 0;
      document.documentElement.style.setProperty("--load", p.toFixed(3));
    });
  } catch { fail(); return null; }
  const model = gltf.scene;
  model.rotation.y = modelYaw;            // set this after looking at the renders
  const box = new THREE.Box3().setFromObject(model);
  const size = box.getSize(new THREE.Vector3());
  const center = box.getCenter(new THREE.Vector3());
  const s = 2 / Math.max(size.x, size.y, size.z);
  model.scale.setScalar(s);
  model.position.set(-center.x * s, -box.min.y * s, -center.z * s);
  model.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  rig.add(model);
  key.target = rig;
  rimA.target = rig;
  rimB.target = rig;

  // ---- atmosphere: GPU particles in the accent color (rain, dust, embers) ----
  const particles = makeParticles(LITE ? 500 : 1600, css("--accent"), renderer.getPixelRatio());
  if (!REDUCED) scene.add(particles);

  // ---- post: gentle bloom on desktop only ----
  let composer = null;
  if (!LITE) {
    composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    composer.addPass(new UnrealBloomPass(new THREE.Vector2(innerWidth, innerHeight), 0.18, 0.4, 0.92));
    composer.addPass(new OutputPass());
  }

  // ---- scroll story: one camera keyframe per beat, scrubbed across #story ----
  const fit = () => (camera.aspect < 1 ? 1.6 : camera.aspect < 1.3 ? 1.25 : 1);   // pull back on tall screens
  const st = { px: 0, py: 0, pz: 0, lx: 0, ly: 0, lz: 0, yaw: 0 };
  const setBeat = (b) => Object.assign(st, { px: b.pos[0], py: b.pos[1], pz: b.pos[2], lx: b.look[0], ly: b.look[1], lz: b.look[2], yaw: b.yaw });
  setBeat(beats[0]);
  if (!REDUCED) {
    const tl = gsap.timeline({ defaults: { ease: "power1.inOut", duration: 1 } });
    beats.slice(1).forEach((b) => tl.to(st, { px: b.pos[0], py: b.pos[1], pz: b.pos[2], lx: b.look[0], ly: b.look[1], lz: b.look[2], yaw: b.yaw }));
    ScrollTrigger.create({ trigger: "#story", start: "top top", end: "bottom bottom", scrub: 1, animation: tl });
  }

  // ---- after the story the stage dims behind the content sections ----
  gsap.to(".stage-dim", { opacity: 0.72, ease: "none",
    scrollTrigger: { trigger: "#story", start: "bottom 90%", end: "bottom 40%", scrub: true } });

  // ---- Explore: stage undims, drag to spin, hotspots show ----
  let exploring = false, dragYaw = 0, dragVel = 0, dragging = false, lastX = 0;
  ScrollTrigger.create({ trigger: "#explore", start: "top 60%", end: "bottom 40%",
    onToggle: (self) => {
      exploring = self.isActive;
      document.body.classList.toggle("exploring", exploring);   // CSS undims; never tween .stage-dim here (it would kill the scrub)
    } });
  const dragZone = document.querySelector("#explore .explore__drag");
  dragZone?.addEventListener("pointerdown", (e) => { dragging = true; lastX = e.clientX; dragZone.setPointerCapture(e.pointerId); });
  dragZone?.addEventListener("pointermove", (e) => {
    if (!dragging) return;
    dragVel = (e.clientX - lastX) * 0.008;
    dragYaw += dragVel;
    lastX = e.clientX;
  });
  const endDrag = () => { dragging = false; };
  dragZone?.addEventListener("pointerup", endDrag);
  dragZone?.addEventListener("pointercancel", endDrag);

  // ---- light modes (work with any generated mesh; no per-part materials needed) ----
  function setLightMode(name) {
    const m = lightModes[name];
    if (!m) return;
    gsap.to(renderer, { toneMappingExposure: m.exposure, duration: 0.8 });
    gsap.to(key, { intensity: m.key, duration: 0.8 });
    gsap.to(rimA, { intensity: m.rim, duration: 0.8 });
    gsap.to(rimB, { intensity: m.rim * 0.7, duration: 0.8 });
    const c = new THREE.Color(m.fog);
    gsap.to(scene.fog.color, { r: c.r, g: c.g, b: c.b, duration: 0.8 });
    gsap.to(scene.background, { r: c.r, g: c.g, b: c.b, duration: 0.8 });
    document.querySelectorAll("[data-light]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.light === name)));
  }
  document.querySelectorAll("[data-light]").forEach((b) => b.addEventListener("click", () => setLightMode(b.dataset.light)));

  // ---- hotspots: points on the product, projected to HTML labels every frame ----
  const hs = hotspots.map((h) => ({ ...h, el: document.querySelector(`[data-hotspot="${h.id}"]`),
    p: new THREE.Vector3(...h.at), n: new THREE.Vector3(...h.normal).normalize() }));
  const tmp = new THREE.Vector3(), nW = new THREE.Vector3(), toCam = new THREE.Vector3();

  // ---- cursor ----
  const pointer = { x: 0, y: 0 };
  addEventListener("pointermove", (e) => {
    pointer.x = (e.clientX / innerWidth) * 2 - 1;
    pointer.y = -(e.clientY / innerHeight) * 2 + 1;
  }, { passive: true });

  // ---- resize ----
  function resize() {
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight, false);
    composer?.setSize(innerWidth, innerHeight);
  }
  addEventListener("resize", resize);
  resize();

  // ---- render loop with adaptive quality and pause when hidden or covered ----
  let frames = 0, acc = 0, last = performance.now(), fps = 60;
  const cover = document.querySelector(".stage-cover");     // the solid footer: stop drawing once it fills the screen
  document.addEventListener("visibilitychange", () => { last = performance.now(); });
  const clock = new THREE.Clock();

  function tick() {
    const now = performance.now(), dt = now - last;
    last = now;
    if (document.hidden || (cover && cover.getBoundingClientRect().top <= 0)) return;
    const t = clock.getElapsedTime();

    // adaptive DPR: measure 90 frames, step down if slow
    acc += dt; frames++;
    if (frames === 90) {
      fps = 1000 / (acc / frames);
      if (fps < 42 && dpr > 1) { dpr = Math.max(1, dpr - 0.25); renderer.setPixelRatio(dpr); resize(); }
      frames = 0; acc = 0;
    }

    // portrait screens: product centered and low, copy above it; landscape: the beat's side offset
    const k = fit(), portrait = camera.aspect < 1;
    camera.position.set(st.px * k, st.py, st.pz * k);
    camera.lookAt(portrait ? 0 : st.lx, st.ly + (portrait ? 0.45 : 0), portrait ? 0 : st.lz);

    // drag inertia + scroll yaw + a slow idle turn + cursor tilt
    if (!dragging) { dragVel *= 0.94; dragYaw += dragVel; }
    const idle = REDUCED ? 0 : Math.sin(t * 0.25) * 0.06;
    rig.rotation.y = st.yaw + dragYaw + idle;
    rig.rotation.x += ((REDUCED ? 0 : pointer.y * 0.05) - rig.rotation.x) * 0.05;
    rig.updateMatrixWorld();

    // cursor light rides in front of the product, on desktop only
    if (!LITE) {
      cursorLight.intensity += ((exploring ? 5 : 2.5) - cursorLight.intensity) * 0.05;
      cursorLight.position.set(pointer.x * 2.2, 1 + pointer.y * 1.2, 2.2);
    }

    particles.material.uniforms.uTime.value = t;
    particles.material.uniforms.uBoost.value = Math.min(2, Math.abs(lenis?.velocity || 0) * 0.02);

    for (const h of hs) {
      if (!h.el) continue;
      tmp.copy(h.p).applyMatrix4(rig.matrixWorld);
      nW.copy(h.n).transformDirection(rig.matrixWorld);
      toCam.copy(camera.position).sub(tmp).normalize();
      const facing = nW.dot(toCam) > 0.15;
      tmp.project(camera);
      h.el.style.transform = `translate(${(tmp.x * 0.5 + 0.5) * innerWidth}px, ${(-tmp.y * 0.5 + 0.5) * innerHeight}px)`;
      h.el.classList.toggle("is-hidden", !exploring || !facing);
    }

    composer ? composer.render() : renderer.render(scene, camera);
  }

  renderer.setAnimationLoop(tick);
  tick();
  document.body.classList.add("stage-ready");
  const api = { renderer, scene, camera, rig, model, setLightMode, get fps() { return fps; }, get dpr() { return dpr; }, get dragYaw() { return dragYaw; } };
  if (import.meta.env.DEV) window.__stage = api;
  return api;
}
```

What each piece is for, so you can adapt instead of guess:

- **Poster first.** The canvas stays invisible until the model is loaded and
  drawn, then fades in over the poster. A failed WebGL context, a failed
  download, or a lost context all add `stage-failed`, and the poster stays.
- **Normalization.** Every generated model arrives at a random scale and
  offset. The stage centers it, scales its longest side to 2 units, and sits
  it on the floor at y = 0. Beat keyframes and hotspots are written in that
  space, so they work for any model.
- **Lights.** A soft white key casts the shadow; two spot rims behind the
  product carry `--accent` and `--accent-2`; a point light follows the cursor
  (desktop only). No HDR file is needed: `RoomEnvironment` gives believable
  reflections for free.
- **Particles** come from brand-kit section 11: rain streaks by default. For
  dust or embers, drop the streak (`length(c)` instead of `length(c * vec2(7.0, 1.0))`)
  and slow the fall.
- **Adaptive quality.** It measures 90 frames and steps the pixel ratio down
  if the frame rate falls under ~42 fps. Phones start lighter: no bloom, no
  shadows, fewer particles.
- **Pause rules.** Nothing draws on a hidden tab or once the opaque footer
  fills the screen.
- **Never tween `.stage-dim` from JavaScript** outside its scroll scrub; a
  second tween on it kills the scrub (`overwrite`) and the stage stays dim for
  the rest of the page. Explore undims it with the `body.exploring` class and
  a CSS `!important`, which is why that rule exists.

### 5. Wiring it up (`src/main.js`)

```js
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
if ("scrollRestoration" in history) history.scrollRestoration = "manual";   // the story always starts at beat one

const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((t) => lenis.raf(t * 1000));
gsap.ticker.lagSmoothing(0);

// three.js loads after the page text, so the poster and copy paint first
import("./stage.js").then(({ initStage }) => initStage({
  modelUrl: "/model/product.glb",
  lenis,
  modelYaw: 0,
  beats: [
    { pos: [3.4, 1.4, 4.4], look: [-0.5, 0.45, 0], yaw: 0 },
    { pos: [1.1, 0.7, 1.4], look: [0.3, 0.4, 0], yaw: 0.7 },
    { pos: [0, 0.9, 5.4], look: [0, 0.45, 0], yaw: 1.57 },
    { pos: [-3.2, 3.2, 3.0], look: [0, 0.3, 0], yaw: 3.4 },
    { pos: [3.8, 1.1, 3.8], look: [0.7, 0.45, 0], yaw: 6.28 },
  ],
  hotspots: [
    { id: "toe", at: [0.9, 0.25, 0], normal: [1, 0.3, 0] },
    { id: "heel", at: [-0.9, 0.35, 0], normal: [-1, 0.2, 0] },
  ],
  lightModes: {
    studio: { exposure: 1.0, key: 1.6, rim: 60, fog: "#0d0f12" },
    night:  { exposure: 0.8, key: 0.4, rim: 110, fog: "#070a10" },
    golden: { exposure: 1.15, key: 2.4, rim: 30, fog: "#1a120b" },
  },
}));

if (import.meta.env.DEV) { window.__lenis = lenis; window.__ST = ScrollTrigger; }
```

Everything brand-specific is in this one call: the beats, the hotspots, the
light modes, and `modelYaw` from the review page. `stage.js` loads with a
dynamic `import()`, so three.js (~170 KB gzipped) downloads after the page
text and the poster have painted.

### 6. Writing the camera beats

Each beat is where the camera sits (`pos`), what it looks at (`look`), and how
far the product has turned (`yaw`, radians). The product is 2 units long,
centered at the origin, sitting on y = 0. Starting points that work:

| Beat      | Job                                     | Starting values                                                |
| --------- | --------------------------------------- | -------------------------------------------------------------- |
| 1 hero    | three-quarter, product right, copy left | `pos [3.4, 1.4, 4.4]`, `look [-0.5, 0.45, 0]`, `yaw 0`   |
| 2 macro   | close on the signature detail           | `pos [1.1, 0.7, 1.4]`, `look` = the detail, `yaw 0.7`    |
| 3 profile | the clean side silhouette               | `pos [0, 0.9, 5.4]`, `look [0, 0.45, 0]`, `yaw 1.57`     |
| 4 orbit   | from above, showing the form            | `pos [-3.2, 3.2, 3.0]`, `look [0, 0.3, 0]`, `yaw 3.4`    |
| 5 rest    | composed, product left, copy right      | `pos [3.8, 1.1, 3.8]`, `look [0.7, 0.45, 0]`, `yaw 6.28` |

- `look` shifted left puts the product right in frame, and the reverse.
- A full turn across the story (`yaw` 0 â†’ 6.28) reads as "we walked around
  it". Keep each step under ~2 radians or it spins too fast to follow.
- Portrait screens ignore the side offset and frame the product low and
  centered, with copy above; wide screens use the beat as written.

**Then look at every beat.** With the dev server running, scroll to the
middle of each beat and screenshot at 1440Ã—900 and 393Ã—852:

```js
// in the browser, beat i of 5 (0-based):
const story = document.querySelector("#story");
window.scrollTo(0, story.offsetTop + (i + 0.5) * innerHeight);
```

Wait a second for the scrub to settle. The product must be fully in frame
with margin, never under the copy; the macro beat must really show the
detail; the resting frame must look composed. Nudge the numbers and
re-screenshot until every beat is one you'd put in a portfolio.

**Hotspots** use the same space. Find a point by looking at the review page:
`x` runs along the product's length (âˆ’1 to 1), `y` is height from the floor,
`z` is depth. `normal` is the direction the surface faces, so a hotspot hides
when that side turns away. Check each one lands on the right part in an
Explore screenshot, from two drag angles.

### 7. Legibility over a live scene

The scene moves and relights, so every text block over it gets all three: a
local scrim, the text-shadow token, and a check against the brightest frame
(usually the golden light mode, or the rim-lit beat).

```css
.beat, .explore__ui { text-shadow: var(--tshadow); }
.beat::before { content: ""; position: absolute; inset: -12% -8%; z-index: -1; pointer-events: none;
  background: radial-gradient(ellipse 70% 60% at 50% 50%, rgba(5,5,10,.55), rgba(5,5,10,0) 75%); }
```

`.beat` needs `position: relative` for the scrim. Small labels and hotspot
text get a chip instead: `background: rgba(8,8,15,.6); backdrop-filter: blur(10px); border-radius: 8px`.

### 8. Brand tokens and components

```css
:root {
  --bg: â€¦; --surface: â€¦; --text: â€¦; --muted: â€¦;
  --accent: â€¦; --accent-2: â€¦; --line: â€¦;
  --font: "Body Font", system-ui, sans-serif;
  --font-head: "Heading Font", var(--font);
  --tshadow: 0 1px 2px rgba(5,5,10,.9), 0 3px 12px rgba(5,5,10,.7), 0 10px 44px rgba(5,5,10,.7);
}
```

`stage.js` reads `--bg`, `--accent`, and `--accent-2` from here, so the 3D
scene and the page always match. Accent only on CTAs, active states, hotspots,
and light. The canvas is never pure `#000` or `#fff`. Load only the font
weights you use, with `preconnect`. Buttons: square or softly rounded
corners (the design bans rule out pills), a clear focus ring, 44px minimum
on touch. Section layouts vary: a split, a full-bleed image (`world.jpg`), a
big-number spec row, an asymmetric gallery. Never two in a row with the same
skeleton.

### 9. Option B: the scrubbed film

Raw AI video seeks badly when scrubbed. Re-encode to all-keyframe H.264, no
audio, then pull the poster:

```bash
mkdir -p website/public/img
ffmpeg -y -i "assets/videos/BRAND-film.mp4" -an \
  -c:v libx264 -preset slow -crf 18 -g 1 -keyint_min 1 -sc_threshold 0 \
  -pix_fmt yuv420p -movflags +faststart website/public/film.mp4
ffmpeg -y -i website/public/film.mp4 -frames:v 1 -q:v 2 website/public/img/hero.jpg
```

Without system ffmpeg, `npm install -D ffmpeg-static` and run the same
arguments through `execFileSync(require("ffmpeg-static"), args)` in a small
node script. Size target 6â€“12 MB for 14 s at 1080p; if larger, try `-g 8 -keyint_min 8`, then raise `-crf` toward 22.

**Does the ending rest?** Each line is how much that frame changed from the
last; an arrival falls back toward its starting level at the tail:

```bash
ffmpeg -i raw.mp4 -vf "tblend=all_mode=difference,signalstats,metadata=print:key=lavfi.signalstats.YAVG" -f null - 2>&1 | grep YAVG | tail -30
```

**Tail trim** (cheaper than a re-roll): cut at the last steady frame with
`-t 11.4` added to the encode above. The page maps scroll to progress, so a
shorter clip costs nothing.

**The layer** (`index.html`): `<video id="bgv" class="bg-video" muted playsinline preload="none" aria-hidden="true" tabindex="-1"></video>` plus
the `.stage-poster` image, fixed, `object-fit: cover`, under `#atmos` (Â§10)
and `#page`. No `src` in the HTML; JS sets it so phones never download it.

**Load it as a Blob and scrub with gated seeks.** Many hosts, shared hosting
included, lack HTTP Range support, so `currentTime` seeks clamp to zero on the
live site while working on localhost; a Blob works everywhere. Never write
`currentTime` while a seek is in flight:

```js
const bgVideo = document.getElementById("bgv");
const STATIC_HERO = matchMedia("(max-width: 768px), (hover: none), (prefers-reduced-motion: reduce)");
let seekBusy = false, pendingTime = null, lastVideoT = -1;
function requestSeek(t) {
  if (!bgVideo.duration) return;
  if (Math.abs(t - lastVideoT) < 0.008) return;
  if (seekBusy) { pendingTime = t; return; }
  seekBusy = true; lastVideoT = t; bgVideo.currentTime = t;
}
bgVideo.addEventListener("seeked", () => {
  seekBusy = false;
  if (pendingTime !== null) { const t = pendingTime; pendingTime = null; requestSeek(t); }
});
bgVideo.addEventListener("error", () => { seekBusy = false; pendingTime = null; document.body.classList.add("video-failed"); });
function scrubVideo() {
  const p = gsap.utils.clamp(0, 1, window.scrollY / Math.max(1, lenis.limit));
  requestSeek(p * (bgVideo.duration - 0.05));
}
async function initVideo() {
  if (STATIC_HERO.matches) return;                 // phones / reduced motion: poster only
  try {
    const res = await fetch("/film.mp4");
    bgVideo.src = URL.createObjectURL(await res.blob());
    bgVideo.load();
    bgVideo.addEventListener("loadedmetadata", () => { scrubVideo(); document.body.classList.add("video-ready"); }, { once: true });
    lenis.on("scroll", scrubVideo);
  } catch { document.body.classList.add("video-failed"); }
}
initVideo();
if (import.meta.env.DEV) window.__bgv = bgVideo;
```

```css
.bg-video, .stage-poster { position: fixed; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0; }
body.video-ready .stage-poster { opacity: 0; transition: opacity .6s ease; }
body.video-failed .bg-video { display: none; }
@media (max-width: 768px), (hover: none), (prefers-reduced-motion: reduce) {
  .bg-video { display: none; }
  body.video-ready .stage-poster { opacity: 1; }
}
```

The CSS media query and the JS `STATIC_HERO` string must match exactly. Keep
the film's motion slow; fast motion is unpleasant scrubbed by hand. For a
**film section in option C**, give that section its own `<video>`, pinned with
a ScrollTrigger (`pin`, `end: "+=" + innerHeight * 1.6`, `scrub: 1`) and the
same gated seek driven by the trigger's `progress`.

### 10. Option B: the live 3D atmosphere over the film

A transparent WebGL layer between the film and the page: particles in the
accent color drift through the frame, speed up with scroll, and lean with the
cursor. `<canvas id="atmos" aria-hidden="true"></canvas>` with
`#atmos { position: fixed; inset: 0; width: 100%; height: 100%; z-index: 2; pointer-events: none; }`.

`website/src/atmosphere.js`:

```js
// Option B: a transparent WebGL layer over the scrubbed film. Particles in the
// accent color drift through the frame, react to scroll speed, and lean with the cursor.
import * as THREE from "three";
import { makeParticles } from "./particles.js";

const css = (name) => getComputedStyle(document.documentElement).getPropertyValue(name).trim();
const LITE = matchMedia("(max-width: 768px), (hover: none)").matches;

export function initAtmosphere({ lenis }) {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return null;
  const canvas = document.getElementById("atmos");
  let renderer;
  try { renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false }); } catch { return null; }
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(Math.min(devicePixelRatio, LITE ? 1.25 : 1.5));
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40, innerWidth / innerHeight, 0.1, 40);
  camera.position.set(0, 1.5, 6);            // in front of the whole particle field
  const particles = makeParticles(LITE ? 500 : 1800, css("--accent"), renderer.getPixelRatio(), 34, 0.9);   // tune size + opacity against the busiest film frame
  scene.add(particles);

  const pointer = { x: 0, y: 0 };
  addEventListener("pointermove", (e) => {
    pointer.x = (e.clientX / innerWidth) * 2 - 1;
    pointer.y = -(e.clientY / innerHeight) * 2 + 1;
  }, { passive: true });
  const resize = () => {
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight, false);
  };
  addEventListener("resize", resize);
  resize();

  const cover = document.querySelector(".stage-cover");
  const clock = new THREE.Clock();
  renderer.setAnimationLoop(() => {
    if (document.hidden || (cover && cover.getBoundingClientRect().top <= 0)) return;
    const t = clock.getElapsedTime();
    camera.position.x += (pointer.x * 0.5 - camera.position.x) * 0.04;
    camera.position.y += (1.5 + pointer.y * 0.3 - camera.position.y) * 0.04;
    camera.lookAt(0, 1.5, 0);
    particles.material.uniforms.uTime.value = t;
    particles.material.uniforms.uBoost.value = Math.min(2, Math.abs(lenis?.velocity || 0) * 0.02);
    renderer.render(scene, camera);
  });
  return { renderer, scene, camera };
}
```

Start it from `main.js` with a dynamic import, like the stage:
`import("./atmosphere.js").then(({ initAtmosphere }) => initAtmosphere({ lenis }));`.
Tune size and opacity against the busiest film frame in a screenshot: the
particles should read as weather in the scene, never as confetti on top.
Add 3D-tilt to cards for the rest of the page (a `perspective` wrapper and a
`rotateX/rotateY` of at most 6Â° following the pointer, desktop only).

### 11. Self-test (before showing the viewer)

Items 2, 4, 5, and 6 are for the 3D option. For the film option instead:
`window.__bgv.readyState === 4`; scrub at the top, middle, bottom, then fast,
and screenshot each beat of copy over the film at both widths; phones show
the poster and never request `film.mp4`; rename `film.mp4` temporarily and
the page is still complete over the poster; the atmosphere particles read as
weather in the scene, not confetti.

1. `npm run build` passes; `npm run dev` serves; the console has zero errors
   at 1440 and 393 widths.
2. `document.body.classList.contains("stage-ready")` within a few seconds;
   `window.__stage.fps` â‰¥ 50 and `window.__stage.dpr` reported (dev only).
3. Every beat screenshotted at both widths (Â§6) and each one looks right.
4. Explore: body gets `exploring`, the stage undims, a synthetic drag turns
   the product:
   ```js
   const el = document.querySelector(".explore__drag");
   const ev = (t, x) => el.dispatchEvent(new PointerEvent(t, { clientX: x, clientY: 400, pointerId: 1, bubbles: true }));
   ev("pointerdown", 100); for (let x = 100; x <= 300; x += 20) ev("pointermove", x); ev("pointerup", 300);
   window.__stage.dragYaw;   // â‰ˆ 1.6 after a 200px drag
   ```

   Hotspots land on the right parts; every light mode looks good.
5. Leave Explore, scroll back into the story: `.stage-dim` opacity is back to
   the scrubbed value (0 in the story, ~0.72 behind regular sections).
6. Fallback: point `modelUrl` at a missing file, reload, confirm
   `stage-failed` and the poster fills the screen; put it back.
7. Phone width: product centered low under the copy, nothing sideways
   (`document.documentElement.scrollWidth <= innerWidth`), vertical swipes in
   Explore still scroll (`touch-action: pan-y`).
8. Every button and link works; the form's success state is real.
9. Copy gate: `grep -nE "â€”|leverage|seamless|empower|unlock|robust|actionable|data-driven|solutions|elevate|delve" website/index.html` â†’ rewrite every hit.
10. Design gate: look at the screenshots against brand-kit section 17 and
    name any default look you fell back on. Fix it, screenshot again.

**If screenshots come up blank or the scroll doesn't seem to move the
camera,** the browser pane is probably hidden: browsers pause
`requestAnimationFrame` in background views, so neither the render loop nor
ScrollTrigger runs. Check `document.hidden`. `window.__ST.update()` forces
the scroll triggers to evaluate for a state check; for pictures, bring the
pane to the front or ask the viewer to click into it.

### 12. Going live (Hostinger)

- Build with `npm run build -- --base=./` and deploy the **contents** of
  `website/dist` (with `index.html` at the top level of the zip), never the
  folder itself, or the live site shows a directory listing.
- `og:url` and `og:image` need absolute URLs; patch them with the live domain
  before the final build (`og:image` â†’ the hero still). Use the editor, not a
  shell one-liner (encoding damage is a real failure).
- Verify the live site yourself: HTTPS 200 with the brand name in the HTML,
  `model/product.glb` (or `film.mp4`) returns 200 with the expected size,
  `stage-ready` in the browser, a screenshot of beat 1 and of Explore. A
  brand-new domain's certificate can take a few minutes.

#### Upload recipe for the hosted connector (no folder-deploy tool)

The hosted Hostinger server (`https://mcp.hostinger.com`, what Claude's
connector directory adds) cannot read files on this computer, so there is no
folder-deploy tool there. The local connector (`npx -y hostinger-api-mcp`)
has one (`hosting_deployStaticWebsite`); use it when present. Otherwise
deploy like this. Operation names differ by connector version: the current
hosted connector is a `search` + `execute` pair (names in the first column;
find each with `search` and use the schema it returns), older ones exposed
named tools (second column).

| Step                                | search + execute operation                      | older named tool                      |
| ----------------------------------- | ----------------------------------------------- | ------------------------------------- |
| find the site's `username`        | `hosting_websites_list` (filter `domain`)   | `hosting_listWebsitesV1`            |
| wait for a new site to finish setup | `hosting_websites_list-setups`                | â€”                                |
| get upload credentials              | `hosting_files_generate-upload-url`           | `hosting_generateUploadURLV1`       |
| unpack the zip into the site        | `hosting_websites_deploy-static-site-archive` | `hosting_deployStaticSiteArchiveV1` |
| clear the cache                     | `hosting_cache_clear-website`                 | `hosting_clearWebsiteCacheV1`       |

1. List the websites filtered by the domain â†’ note `username`. If the site
   was just created, poll the setups until `status: completed` first (upload
   calls return 409 while it's running).
2. Zip the contents of `website/dist` from inside `dist` so `index.html` sits
   at the zip's top level, and keep the zip outside `dist`:
   `cd website/dist && zip -qr ../../site.zip .`
3. Generate the upload URL with `{ "username", "domain" }` â†’
   `url`, `auth_key`, `rest_auth_key`.
4. Push the zip with plain curl (a TUS upload; it uses the two keys from
   step 3, not the login). Say in one line that the upload takes a few
   seconds per handful of MB, so the wait reads as work:
   ```bash
   FILE=site.zip; SIZE=$(wc -c < "$FILE" | tr -d ' ')
   curl -sS -i -X POST "${url}/${FILE}?override=true" \
     -H "X-Auth: ${auth_key}" -H "X-Auth-Rest: ${rest_auth_key}" \
     -H "Tus-Resumable: 1.0.0" -H "Upload-Length: ${SIZE}" -H "Upload-Offset: 0"
   # expect 201 Created
   curl -sS -i -X PATCH "${url}/${FILE}?override=true" \
     -H "X-Auth: ${auth_key}" -H "X-Auth-Rest: ${rest_auth_key}" \
     -H "Tus-Resumable: 1.0.0" -H "Content-Type: application/offset+octet-stream" \
     -H "Upload-Offset: 0" --data-binary "@${FILE}"
   # expect 204; the Upload-Offset response header equals SIZE when done
   ```

   `override=true` means a retry of the same filename replaces it, so a
   failed upload is safe to run again.
5. Deploy the archive with `{ "username", "domain", "archive_path": "site.zip" }`
   (the bare filename, no folder). This wipes the site root before
   unpacking, which is right for a fresh site and is the normal update on a
   re-deploy. Never point it at a website that isn't this project's.
6. Verify harder than a 200: a fresh or failed deploy can still serve a
   parking page. Fetch the live HTML and grep for a string you know is in
   this build (the brand name in the `<title>`). If it doesn't match, clear
   the cache and re-check once before reporting failure.

### Gotchas

1. The model is sideways or backwards â†’ set `modelYaw` from the review page;
   never rotate the GLB file itself.
2. The product is cropped on phones â†’ the portrait framing in `tick()`
   handles it; if a beat still crops, reduce that beat's distance or raise
   `fit()`'s portrait factor.
3. Bloom blows out white or chrome parts â†’ lower the bloom strength (0.18) or
   raise its threshold toward 0.95, and lower the rim intensity.
4. The stage stays dim after visiting Explore â†’ something tweened
   `.stage-dim` outside its scrub (Â§4).
5. Scrolling feels stuck in Explore on phones â†’ the drag layer must keep
   `touch-action: pan-y`; never use OrbitControls there (it captures
   vertical swipes and the wheel).
6. The page is slow to show anything â†’ `stage.js` must load through the
   dynamic `import()` and the poster must be a plain `<img>` with
   `fetchpriority="high"`.
7. Works locally, the model 404s live â†’ the GLB must be under
   `website/public/model/` so it lands in `dist/model/`; check the zip.
8. Film scrubs locally but not live â†’ the host lacks Range support; the Blob
   loader fixes it.
9. Never open the build via `file://`.
10. Blank screenshots â†’ the preview pane is hidden (Â§11), not a broken site.
