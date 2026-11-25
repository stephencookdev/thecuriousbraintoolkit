# Production artwork

Brand wordmark and mascot: supplied in `Website Logo files.eml`. Original files
are retained in ignored `assets/brand/`. The website versions remove empty canvas
and convert to WebP; the artwork is not redrawn or generated.

Product artwork: genuine listing images observed in the [Curious Brain Etsy shop](https://www.etsy.com/uk/shop/CuriousBrainToolkit)
on 12 October 2026. Original screenshots are retained locally under ignored `output/imagegen/references/original-listings/`. Problem Solving uses a masked crop from its listing preview; the Thoughts and Feelings previews are reconstructed as described below.
These are shop previews, not downloadable product PDFs.

| Website asset | Source listing |
| --- | --- |
| `products/thoughts-v2.webp` | https://www.etsy.com/uk/listing/4551552256/understanding-thoughts-printable |
| `products/feelings-v2.webp` | https://www.etsy.com/uk/listing/4551572243/understanding-feelings-printable |
| `products/thoughts-feelings-bundle-v2.webp` | https://www.etsy.com/uk/listing/4551163236/printable-child-psychology-toolkit |
| `products/body-clues-pages.webp` | https://curiousbraintoolkit.etsy.com/listing/4551573721 |
| `products/safety-alarm-pages.webp` | https://www.etsy.com/uk/listing/4563863872/child-anxiety-toolkit-o-understanding-my |
| `products/worry-time-pages.webp` | https://www.etsy.com/uk/listing/4596186205/worry-time-for-kids-ages-811-o-anxiety |
| `products/worry-and-avoidance-pages.webp` | https://www.etsy.com/uk/listing/4599583258/child-anxiety-worksheets-o-worry |
| `products/problem-solving-pages.webp` | https://www.etsy.com/uk/listing/4583081926/problem-solving-toolkit-for-kids-o |

Headings use Nunito, self-hosted through `@fontsource/nunito` (SIL Open Font
License). Icons use official Heroicons v2.2.0 outline SVGs, inlined at build time. Their MIT license is retained in `src/assets/icons/LICENSE`. The standalone brand wordmark and mascot remain the supplied artwork.

## Restored homepage previews — 12 October 2026

The `public/images/hero/*-v2.webp` pages and `public/images/products/*-v2.webp` transparent product fans were reconstructed with the built-in imagegen tool from the original Etsy screenshots. They are visual development previews, not original PDF exports: fine worksheet wording, illustration details and incidental typography can differ. Obtain the client’s high-resolution source pages before publishing. Original listing artwork is retained. PNG masters and the exact final prompt set are saved locally in ignored `output/imagegen/`, including `prompts-homepage-v2.md`.

The catalogue shows age and format once per paid card and puts the Thoughts and Feelings bundle contents below its title. Downloads and purchase links still route to the original Etsy listings.

The homepage Safety Alarm cover (`hero/safety-alarm-cover.webp`) uses Sarah’s updated `Slide1.PNG` from her 16 November 2026 email, “Safety Alarm Etsy image and PNGs”. The Safety Alarm, Worry Time and Have a Go product previews use the original worksheet PNGs from the same batch of emails. Each transparent composition combines the cover, a learn page and an activity (Safety Alarm slides 1, 3 and 6, Worry Time slides 1, 4 and 5, and Have a Go slides 1, 4 and 7). No worksheet content was regenerated.

The free-resource thumbnails in `public/images/free-resources/` are rendered from the PDFs in `public/downloads/`. This includes the first page of the school-morning guide. The Problem Solving preview masks the paper shapes in the original Etsy poster, preserving the worksheet pixels. Earlier listing previews are saved in `assets/listing-previews/`. The Thoughts and Feelings toolkits still use the October reconstructions.

The Body Clues preview masks the paper shapes in the listing’s [1,588-pixel “What’s Inside?” image](https://i.etsystatic.com/66971695/r/il/ca266d/8440246768/il_1588xN.8440246768_6mue.jpg), observed on 25 November 2026, and retains the original preview watermark.

## Source control asset budget

Production hero pages are 600 pixels wide; product fans are 1000 pixels wide. Both use WebP quality 82 with alpha quality 95 for the transparent fans. Each is approximately 41–143 KiB. The full production image directory is about 1 MiB. Original PNG masters, original listing screenshots, obsolete embedded-raster SVGs, mockups and browser screenshots stay in ignored reference folders. Heroicons remain small native SVGs with their MIT licence.

## Favicon

`public/favicon.ico` contains 16, 32 and 48 pixel versions; explicit 16 and 32 pixel PNGs are also supplied. The favicon is a simplified three-quarter brain illustration facing slightly up and to the viewer's right, with both hemispheres visible, a clear central fissure, and one broad fold per hemisphere. Its details were reduced for legibility at 16 pixels. A segmented Toolkit-colour border completes the square icon. The master and exact prompt remain in ignored `output/imagegen/mascot-brain-favicon-master.png` and `output/imagegen/mascot-brain-favicon-prompt.md`. Shared `BaseLayout.astro` includes the favicon on every page.
