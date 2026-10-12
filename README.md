# The Curious Brain Toolkit

Unstyled Astro skeleton for the Curious Brain website. Static HTML output, plain
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
- `src/data/resources.ts`: draft catalogue and category definitions.
- `src/data/site.ts`: navigation, branding text and external destinations.
- `src/styles/global.css`: intentionally empty apart from a comment.
- `public/`: production downloads and unprocessed assets when supplied.
- `netlify.toml`: build settings, headers and a commented redirect example.

The dynamic category route generates static pages at build time; it does not
require a production server.

## Content and reference assets

This is a structural starting point, not launch-ready content. Missing shop URLs,
listings, downloads and contact information are explicitly marked rather than
replaced with invented URLs or dead buttons. Set them in the data files.

`assets/brand/` and `output/website-mockups/` are ignored local references. Nothing
in the skeleton depends on them. Copy approved production artwork into
`src/assets/` or `public/` when styling begins so deployments include it.

## Deployment

Connect this repository to Netlify. The committed configuration builds with
`npm run build` and publishes `dist/`. No adapter is needed for static output.
No deployment has been created by this setup.

Before launch, add approved artwork, URLs, contact details, licensing and policy
copy; apply the chosen calm design; set the real domain in Astro configuration
and add a sitemap. Remove the temporary `noindex, nofollow` meta in BaseLayout and
update `public/robots.txt` once the site is ready for indexing.
