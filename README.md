# The Curious Brain Toolkit

Astro website based on the approved calm design, with a responsive catalogue and supporting pages. Static HTML output, plain
CSS and no browser JavaScript. No React, Svelte, database or server adapter.

## Development

Requires Node.js 22.12+ (Netlify is configured for Node 24).

```sh
npm ci
npm run dev
```

```sh
npm run build
npm run preview
```

## Structure

- `src/pages/`: Home, Resources, three resource categories, Free Resources,
  Our Approach, About, Contact, policy drafts and 404.
- `src/layouts/BaseLayout.astro`: shared document metadata, header and footer.
- `src/components/`: reusable navigation, framework and resource cards.
- `src/data/resources.ts`: six verified Etsy listings and category definitions.
- `src/data/site.ts`: navigation, branding text and external destinations.
- `src/styles/global.css`: responsive plain CSS with self-hosted Nunito headings.
- `src/styles/inner-pages.css`: catalogue grids and shared inner-page layouts.
- `public/`: optimised brand artwork and product preview images.
- `netlify.toml`: build settings, headers and a commented redirect example.

The dynamic category route generates static pages at build time; it does not
require a production server.

## Content and reference assets

The catalogue groups resources by topic, using responsive product grids and a wider
layout for the single problem-solving toolkit. Category pages include conversation
guidance; About, Our Approach, Contact, policy pages and the 404 share the same calm
visual system. School enquiry links lead directly to guidance and an Etsy contact action.
The hero has five separate paper assets, a staggered
CSS entrance and a small scroll-driven fan effect. Scroll animation progressively
enhances browsers supporting CSS view timelines; other browsers keep the static
composition and entrance. Reduced-motion preferences disable the paper animations. Product purchase links go to their actual Etsy listings.
There are no free downloads supplied, so the free-resources route is retained but hidden
from primary navigation. Instagram is linked. TES links and a direct contact email remain to be supplied.
School enquiries currently lead to a contact page with the Etsy seller contact route.

`assets/brand/` and `output/website-mockups/` are ignored local references. Production
artwork lives in `public/images/` and is included in deployments. See
[asset sources](docs/asset-sources.md) for provenance. Generated mockups are references,
not product covers.

## Deployment

Connect this repository to Netlify. The committed configuration builds with
`npm run build` and publishes `dist/`. No adapter is needed for static output.
No deployment has been created by this setup.

Before launch, confirm the approved biography, original product artwork, contact details,
school licensing and policy copy; set the real domain in Astro configuration
and add a sitemap. Remove the temporary `noindex, nofollow` meta in BaseLayout and
update `public/robots.txt` once the site is ready for indexing.
