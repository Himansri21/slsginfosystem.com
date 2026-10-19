# Search visibility setup

The site is a static website; metadata and structured data are present in the
HTML and do not require JavaScript to render. All eight pages have unique titles,
descriptions, canonical URLs, and social sharing metadata. The homepage describes
the organization using existing business contact details. Articles identify SLSG
as the organization author; no publication dates, customer results, reviews, or
ratings have been invented.

## Page focus

| Page | Main topic |
| --- | --- |
| Home | Enterprise IT infrastructure and cloud solutions in Pune |
| About | SLSG company background and leadership |
| Services | Cloud, security, managed IT/AMC, hardware, workforce, sustainability |
| Contact | Kharadi and Katraj office details and service enquiries |
| Stories | Enterprise IT guides and company stories |
| Company story | Founding philosophy and operational experience |
| IT roadmap guide | Business priorities, infrastructure assessment, implementation planning |
| Hardware lifecycle guide | Procurement, maintenance, reuse, and responsible retirement |

## Before production publication

- Review the editorial copy and confirm service scope, contact details, partnerships,
  certifications, awards, and existing commercial claims with the business owner.
- Ensure `https://slsginfosystem.com/` has working HTTPS. This is the production
  hostname used by the canonical URLs and sitemap.
- Publish all HTML files, assets, `robots.txt`, and `sitemap.xml` together.
- Prevent the development deployment from being indexed using hosting-level
  `X-Robots-Tag: noindex` headers or a development-only robots meta tag. Do not
  add noindex to the production branch. Canonical tags alone are not an access
  control or a reliable way to exclude staging from search.

## After publication

Verify the domain in Google Search Console using the supplied DNS TXT record,
then submit `https://slsginfosystem.com/sitemap.xml`. Inspect representative live
URLs and check Google's Rich Results Test for the structured data. Track indexed
pages, search queries, impressions, clicks, and enquiry conversions over time.
For local discovery, maintain an accurate Google Business Profile if eligible.

Local validation:

```sh
python3 scripts/check_site.py
python3 scripts/check_seo.py
node --check assets/site.js
node --check assets/theme.js
```

Local checks validate source structure, not Google indexing, search ranking, or
live server redirects. Rankings depend on many factors; metadata and structured
data do not guarantee ranking improvements or rich results.

References:

- https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- https://developers.google.com/search/docs/appearance/structured-data/organization
- https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
