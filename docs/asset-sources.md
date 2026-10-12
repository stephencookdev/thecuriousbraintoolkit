# Production artwork

Brand wordmark and mascot: supplied in `Website Logo files.eml`. Original files
are retained in ignored `assets/brand/`. The website versions remove empty canvas
and convert to WebP; the artwork is not redrawn or generated.

Product artwork: genuine listing images observed in the [Curious Brain Etsy shop](https://www.etsy.com/uk/shop/CuriousBrainToolkit)
on 12 October 2026. Original screenshots are retained locally under ignored `output/imagegen/references/original-listings/`. Safety Alarm Cards and Problem Solving remain unedited listing previews; the other production previews are reconstructed as described below.
These are shop previews, not downloadable product PDFs.

| Website asset | Source listing |
| --- | --- |
| `products/thoughts-v2.webp` | https://www.etsy.com/uk/listing/4551552256/understanding-thoughts-printable |
| `products/feelings-v2.webp` | https://www.etsy.com/uk/listing/4551572243/understanding-feelings-printable |
| `products/thoughts-feelings-bundle-v2.webp` | https://www.etsy.com/uk/listing/4551163236/printable-child-psychology-toolkit |
| `products/safety-alarm-v2.webp` | https://www.etsy.com/uk/listing/4563863872/child-anxiety-toolkit-o-understanding-my |
| `safety-alarm-cards.webp` | https://www.etsy.com/uk/listing/4557576323/anxiety-coping-cards-for-kids-safety |
| `problem-solving.webp` | https://www.etsy.com/uk/listing/4583081926/problem-solving-toolkit-for-kids-o |

Headings use Nunito, self-hosted through `@fontsource/nunito` (SIL Open Font
License). Icons use official Heroicons v2.2.0 outline SVGs, inlined at build time. Their MIT license is retained in `src/assets/icons/LICENSE`. The standalone brand wordmark and mascot remain the supplied artwork.

## Restored homepage previews — 12 October 2026

The `public/images/hero/*-v2.webp` pages and `public/images/products/*-v2.webp` transparent product fans were reconstructed with the built-in imagegen tool from the original Etsy screenshots. They are visual development previews, not original PDF exports: fine worksheet wording, illustration details and incidental typography can differ. Obtain the client’s high-resolution source pages before publishing. Original listing artwork is retained. PNG masters and the exact final prompt set are saved locally in ignored `output/imagegen/`, including `prompts-homepage-v2.md`.

Product age, format and contents pills now use accessible HTML/CSS in `ProductArtwork.astro`. Downloads and purchase links still route to the original Etsy listings.

## Source control asset budget

Production hero pages are 600 pixels wide; product fans are 1000 pixels wide. Both use WebP quality 82 with alpha quality 95 for the transparent fans. Each is approximately 41–143 KiB. The full production image directory is about 1 MiB. Original PNG masters, original listing screenshots, obsolete embedded-raster SVGs, mockups and browser screenshots stay in ignored reference folders. Heroicons remain small native SVGs with their MIT licence.
