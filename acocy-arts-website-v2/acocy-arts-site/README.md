# acocy arts — commission website + link-in-bio (v2)

A soft, rounded, pink commission portfolio for **acocy**. This is a static site with **no checkout, payment buttons, user accounts, tracking scripts or submission backend**.

## Open locally

Open `index.html` in a modern browser. The site also works when hosted as static files.

## What is inside

- `index.html`: homepage, the artist’s **finished** original PNG commission sheet, matching prices, steps, FAQ and interactive request builder.
- `links.html`: **custom Linktree-style page** to place in a TikTok or Instagram bio, with social buttons automatically populated from `site-config.js`.
- `styles.css`: full design, mobile styles, colours, typography and rounded cards.
- `script.js`: interactive price picker, request copy button and optional social links.
- `links.js`: renders safe, optional buttons on the links page from the central config file.
- `site-config.js`: **main editing file** for prices, commission status, slots, Instagram/TikTok handles.
- `terms.html`: full ToS (draft for review, includes personal-use only, 50/50 PayPal flow, suggestive boundaries, 2 sketch revisions, PNG, permission for portfolio use).
- `copyright.html`: art/copyright and personal-use licence details.
- `privacy.html`: site data handling (must update when hosting or workflow changes).
- `legal.html`: **unfinished legal notice checklist**. Replace with verified details as required for the actual seller before public commercial launch.
- `assets/acocy-commission-sheet.png`: cropped, transparent, finished PNG art shown on the website.
- `assets/acocy-original-commission-sheet.png`: **untouched original** artist-provided PNG, linked for full-resolution viewing.
- `assets/acocy-avatar.png`: profile avatar cropped from the artist’s PNG.
- Other `assets/`: favicon and old in-progress files, retained only for archival reference (not displayed).

## How a visitor orders

1. Pick size/style on the website and see a **base price estimate**.
2. Add optional non-sensitive character notes.
3. Click **copy commission request**.
4. Visit the artist's **verified** TikTok/Instagram profile and send it in DM manually.
5. Artist confirms acceptance, total price and timing **privately**.
6. Artist manually sends PayPal Goods & Services request/invoice. **50% at start, 50% after final preview approval, before final delivery.**

**No money or personal information is collected by this site.**

## Configuration

Edit `site-config.js`. Set `instagram`, `tiktok`, and (optionally) `x` ONLY after the artist has confirmed the exact handles, without @. On `links.html` these handles become social buttons automatically. Social buttons automatically appear when set. Set `commissionsOpen: false` to mark the queue closed. `slots: null` hides any quantity.

To add any other social platform, add or edit an entry in the `extraLinks` list in `site-config.js`. **Provide a full HTTPS URL** (e.g. `https://example.com/yourprofile`). Empty URLs do not show a button.

**Prices exactly match the latest provided PNG:** Bust-up €12 / €15 / €24; Half-body €22 / €26 / €30; Full-body €32 / €36 / €40. Change `rows` if she updates prices later. Both table and picker will update from one file.

To change the visual look, edit CSS variables near the top of `styles.css`.

To add a finished gallery piece, put the artist-approved image in `assets/`, then update the work section in `index.html`. The portfolio currently shows the **finished commission menu** from the artist. Do not use the unrelated inspiration image.

## Publish using GitHub Pages (once legally ready)

1. In GitHub, create a **public** repository (for example, `acocy-arts`). Make sure GitHub's app/connector is given access if you want ChatGPT to edit it later.
2. Upload all these files (not just the zip file) to the repository root and commit them. Keep the `assets` folder.
3. In repository **Settings → Pages**, publish from the main branch root if offered (or configure Pages with the current GitHub workflow).
4. GitHub provides a temporary address such as `https://USERNAME.github.io/acocy-arts/`. This is an *example*, not a verified public URL.
5. If you buy and control `acocy.arts` (availability is unverified), you can connect that custom domain to GitHub Pages following the official GitHub instructions: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

The link-in-bio URL on hosting will be your website address plus `/links.html` (for example `https://acocy.arts/links.html` **if the domain is someday registered and connected**). This is a standalone link hub, **not an account on the Linktree service**.

This download is **not deployed**, `acocy.arts` is **not registered or claimed**, and no public live address has been created.

## IMPORTANT before publishing / taking orders

- Review and complete the **legal notice / imprint** and seller details for the actual artist's country of establishment and business status. The artist's precise jurisdiction is NOT confirmed here.
- Review pre-contract info and any consumer withdrawal rights relevant to custom digital artwork. **Do not claim** custom work automatically removes all withdrawal rights.
- Confirm which social account(s) customers should contact and add handles to `site-config.js`.
- Confirm artist approval for publishing photos (artist supplied the work-in-progress screenshot in chat).
- Have the artist approve ToS, pricing, limits on mature/suggestive art, turnaround, refund language and any use of her identity.
- Check PayPal account eligibility, legal obligations and platform policies before accepting paid commissions.
- If you add website contact forms, analytics, Google Fonts, embeds, payment integrations, or cookies later, revisit privacy disclosures and consent requirements.

## Future edits

The project intentionally has no build tools. Ask to change prices, text, page layout, colors, FAQ, gallery, or contact workflow; the same static files can be edited each time. Keep GitHub as the source of truth after initial upload.
