# The Curious Brain Toolkit

Astro website with a representative homepage based on the approved calm design. Static HTML output, plain
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
  Our Approach, About, Contact, policy placeholders and 404.
- `src/layouts/BaseLayout.astro`: shared document metadata, header and footer.
- `src/components/`: reusable navigation, framework and resource cards.
- `src/data/resources.ts`: six verified Etsy listings and category definitions.
- `src/data/site.ts`: navigation, branding text and external destinations.
- `src/styles/global.css`: responsive plain CSS with self-hosted Nunito headings.
- `public/`: optimised production brand artwork and genuine Etsy cover images.
- `netlify.toml`: build settings, headers and a commented redirect example.

The dynamic category route generates static pages at build time; it does not
require a production server.

## Content and reference assets

The homepage is styled; other pages retain their basic structure with shared typography,
navigation and resource cards. The hero has five separate paper assets, a staggered
CSS entrance and a small scroll-driven fan effect. Scroll animation progressively
enhances browsers supporting CSS view timelines; other browsers keep the static
composition and entrance. Reduced-motion preferences disable the paper animations. Product purchase links go to their actual Etsy listings.
There are no free downloads supplied, so the free-resources route is retained but hidden
from navigation. TES links, an Instagram URL and a direct contact email remain to be supplied.
School enquiries currently lead to a contact page with the Etsy seller contact route.

`assets/brand/` and `output/website-mockups/` are ignored local references. Production
artwork lives in `public/images/` and is included in deployments. See
[asset sources](docs/asset-sources.md) for provenance. Generated mockups are references,
not product covers.

## Deployment

Connect this repository to Netlify. The committed configuration builds with
`npm run build` and publishes `dist/`. No adapter is needed for static output.
No deployment has been created by this setup.

Before launch, confirm content, contact details, TES/Instagram URLs, licensing and
policy copy; finish the remaining pages; set the real domain in Astro configuration
and add a sitemap. Remove the temporary `noindex, nofollow` meta in BaseLayout and
update `public/robots.txt` once the site is ready for indexing.
