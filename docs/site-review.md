# Private site review and launch decisions

This is an internal working note, not website content. The site is still staged: `BaseLayout.astro` applies `noindex, nofollow` globally as an intentional prelaunch gate. Keep that gate in place until the owner approves launch. A production domain is needed before a sitemap can be published with absolute canonical URLs.

## Route inventory

The Astro source currently generates these routes:

| Route | Source | Notes |
| --- | --- | --- |
| `/` | `src/pages/index.astro` | Home |
| `/resources/` | `src/pages/resources/index.astro` | Resource catalogue |
| `/about/` | `src/pages/about/index.astro` | About Sarah |
| `/our-approach/` | `src/pages/our-approach/index.astro` | Approach |
| `/contact/` | `src/pages/contact/index.astro` | Etsy contact route |
| `/free-resources/` | `src/pages/free-resources/index.astro` | States no free downloads are available |
| `/privacy-policy/` | `src/pages/privacy-policy/index.astro` | Privacy information |
| `/cookie-policy/` | `src/pages/cookie-policy/index.astro` | Cookie information |
| `/terms-of-use/` | `src/pages/terms-of-use/index.astro` | Website and resource use |
| `/resource-licensing/` | `src/pages/resource-licensing/index.astro` | Resource permissions |
| `/emotional-literacy-resources-ks2/` | `src/pages/[category].astro` | Generated from the emotional-literacy category |
| `/worry-anxiety-resources-children/` | `src/pages/[category].astro` | Generated from the worry-anxiety category |
| `/problem-solving-skills-children/` | `src/pages/[category].astro` | Generated from the problem-solving category |
| 404 fallback | `src/pages/404.astro` | Error page; should not appear in a sitemap |

There is no sitemap generator or sitemap route in the current source.

## Owner decisions needed before policy pages can be final

- **Privacy controller:** Confirm the legal controller’s name and contact details; the lawful basis for each processing purpose; retention periods; how people can exercise their data rights; and the correct route for complaints to the ICO. The current site links to Etsy for enquiries, but that does not establish the controller’s legal identity or the full privacy contact route.
- **Hosting and technical data:** Confirm the chosen host, its access-log fields and retention, who can access logs, and whether its configuration sets cookies or uses other browser storage. Recheck privacy and cookie wording against the deployed configuration. Also confirm any analytics, embedded media or other third-party code before launch.
- **Terms:** Confirm the responsible legal identity and governing jurisdiction. Obtain appropriate review of any liability or other legal clauses before adding them; none should be inferred from the current copy.
- **School and professional licences:** Supply the approved permissions for class, group and organisation use, including permitted users, copies, settings and sharing. Provide the relevant TES listing or enquiry destination if school purchasing will be offered there. Until then, the site does not state licence terms or promise a TES route.
- **Sarah’s biography:** Approve the public biography and the exact professional credentials/registration wording to use. The site currently attributes the toolkit to Dr Sarah Cook, Clinical Psychologist; do not expand that claim without approved details.
- **Launch and sitemap:** Confirm the production domain and canonical hostname. Keep the global `noindex, nofollow` directive as an intentional prelaunch gate until launch is approved; then create and verify the sitemap using the production domain and review indexing settings together.

## Catalogue and inner-page design completion

The catalogue now uses topic navigation, responsive product grids, practical purchase/use FAQs and a school enquiry call to action. Category pages reuse that layout with conversation guidance and a horizontal treatment for a single product. About, Our Approach and Contact have designed sections and clear next steps; policy pages use a consistent reading layout with information navigation. Free Resources and the 404 also use the shared inner-page system.

School links point to `/contact/#school-enquiries`, which includes an enquiry checklist and a direct Etsy shop action. No new contact channel, licence or biography details have been invented. The factual owner/deployment decisions listed above remain outstanding.
