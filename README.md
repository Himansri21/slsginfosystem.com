# SLSG Infosystems website

A buildless static website, compatible with GitHub Pages and Cloudflare Pages.

## Pages

- `index.html`: introduction, technology partners, clients, CEO and COO profiles, and journal highlights.
- `about.html`: company story, principles, leadership, and recognition.
- `services.html`: service portfolio, industries, and delivery framework.
- `stories.html`: journal index, linking to three standalone articles.
- `contact.html`: enquiry form and office locations.

Shared styling lives in `assets/styles/base.css` and `assets/styles/theme.css`.
Shared interactions live in `assets/site.js`; theme preferences use `assets/theme.js`
and a small pre-paint initializer in each page's head.

The introductory journal articles are editorial copy for review. They do not claim
customer results or invent customer case studies.

## Local preview and checks

Run `python3 -m http.server 8080` from this directory, then visit
http://localhost:8080. No build or dependency installation is required.

Run `python3 scripts/check_site.py` to check local links, assets, anchors, and
page landmarks. Run `node --check assets/site.js` and
`node --check assets/theme.js` to check JavaScript syntax.

Publish the root directory, including all HTML files and `assets/`. Changes are
local until committed and pushed to the relevant publishing branch.
