# SLSG Infosystems — Enterprise Web Platform

> **Official Web Platform for SLSG Infosystems Pvt. Ltd.**  
> *Enterprise Technology & Business Transformation Partner*  
> **Production Domain:** [https://slsginfosystem.com](https://slsginfosystem.com)  
> **Official LinkedIn:** [SLSG Infosystems Pvt. Ltd. on LinkedIn](https://www.linkedin.com/company/slsginfosystems/)  
> **Award Recognition:** Proud Winner — Emerging Enterprise of the Year 2026 · Global RISE Awards (by SMB Connect in association with DCCIA Pune)

---

## 1. Corporate Identity & Legal Registrations

| Attribute | Official Record |
| :--- | :--- |
| **Legal Entity Name** | SLSG Infosystems Private Limited |
| **Corporate Identity Number (CIN)** | `U72900PN2023PTC217856` |
| **Goods & Services Tax ID (GSTIN)** | `27ABKCS167SB1ZB` |
| **Head Office** | 412, B-Wing, Downtown – City Vista, Near World Trade Center, Kharadi, Pune – 411014, Maharashtra, India |
| **Branch Office** | Row House D, Rituparna Society, Utkarsh Society, Lane No. 6, Katraj, Pune – 411046, Maharashtra, India |
| **Official Contact Telephones** | `+91 20-46035505` \| `+91 9763034875` (CEO) \| `+91 9570495256` (COO) |
| **Official Email Addresses** | `contact@slsginfosystem.com` \| `ashok@slsginfosystem.com` \| `anil@slsginfosystem.com` |
| **Corporate Profile Document** | **Company Corporate Profile Ver 1.4** (20 pages, updated October 2026) |

---

## 2. Platform Architecture & Repository Structure

This repository is built as a **high-performance, buildless static multi-page website** designed for instant loading, zero build-step overhead, and native compatibility with **GitHub Pages**, **Cloudflare Pages**, or static web servers (Nginx/Apache/Caddy).

```
SLSG Website/
├── index.html                      # Homepage: Hero, Strategic Alliances (11 OEMs), Clients, Case Highlights, Executive Profiles
├── about.html                      # Company Story, Leadership Bios, Executive Messages, RISE Award Milestone
├── services.html                   # 6 Business Units, Detailed Service Catalog, Delivery Framework, Interactive FAQs
├── contact.html                    # Dual Pune Office Details, Interactive RFP/Enquiry Form with Country Dial Code Picker
├── stories.html                    # Editorial Journal & Insights Index
├── story-our-beginning.html        # Story: The founding principles and defence operations philosophy
├── story-technology-roadmap.html   # Story: Engineering a multi-year enterprise technology roadmap
├── story-hardware-lifecycle.html   # Story: Sustainable hardware procurement, maintenance, and e-waste lifecycle
├── robots.txt                      # Search engine crawl directives & sitemap location
├── sitemap.xml                     # XML sitemap with <loc>, <lastmod>, <changefreq>, and <priority>
├── CNAME                           # Custom production domain pointer (slsginfosystem.com)
├── favicon.ico                     # Multi-resolution root favicon
├── SEO.md                          # Production SEO launch protocol & GSC verification guide
├── README.md                       # Comprehensive system documentation (this file)
│
├── assets/
│   ├── docs/                       # Downloadable corporate literature
│   │   └── SLSG-Corporate-Profile-v1.4.pdf   # 20-page Corporate Profile Ver 1.4 PDF
│   ├── partners/                   # Tier-1 OEM & Strategic Alliance Logos
│   │   ├── tata-communications.png
│   │   ├── yotta.png
│   │   ├── zebra.png
│   │   ├── techknowgreen.png
│   │   ├── peoplelink.png
│   │   ├── staqo.jpg
│   │   ├── sonicwall.png
│   │   ├── realtime.png
│   │   ├── ingram-micro.png
│   │   ├── hpe.png
│   │   └── s4ds.jpg                # Society for Data Sciences (S4DS)
│   ├── clients/                    # Client Logos & Case Implementations
│   │   ├── chandukaka-saraf.png    # Retail Digital Signage (Drishya)
│   │   ├── fiat.png                # Automotive OT & Shift Compliance Software (FIAPL)
│   │   └── [14 other clients]      # Kolte-Patil, DCCIA, Baramati Sahakari Bank, etc.
│   ├── leadership/                 # Executive Leadership Photography
│   │   ├── ashok-srivastava.jpg    # Founder & CEO
│   │   └── anil-kumar.jpg          # Chief Operating Officer
│   ├── logo/                       # Brand Identity Icons & PWA Manifest Assets
│   ├── styles/
│   │   ├── base.css                # Typography, responsive layout tokens, reset, grid system
│   │   └── theme.css               # Light/Dark design tokens, component styling, animations
│   ├── site.js                     # Navigation, mobile drawer, partner filtering, contact form handling
│   └── theme.js                    # Theme management (dark/light mode persistence and toggle)
│
├── docsslsg/                       # Official offline corporate archives
│   ├── SLSG Infosystems - Corporate Profile Ver 1.4.pdf
│   ├── SLSG Infosystems - Corporate Profile V1.2.pdf
│   └── SLSG Product-Services & Clients Details.xlsx
│
└── scripts/
    ├── check_site.py               # Automated validator: landmarks, unique IDs, broken links, anchor targets
    └── check_seo.py                # Automated validator: metadata uniqueness, canonicals, JSON-LD schemas, sitemap
```

---

## 3. Enterprise Business Units & Proprietary Offerings

Based on **Company Corporate Profile Ver 1.4**, SLSG delivers six integrated enterprise capabilities:

### Unit 01: Digital, Cloud & Software Transformation
- **Hyperscale Data Center & Cloud Onboarding**: Direct partnerships with **Yotta Data Services** (Tier-IV sovereign GPU cloud) and **Tata Communications** (Tier-1 global digital network across 190+ countries).
- **Drishya (Proprietary SaaS)**: Enterprise Digital Signage SaaS platform for centralized cloud management of multi-city commercial showroom displays (powering Chandukaka Saraf & Sons across Maharashtra).
- **Data Lense (Proprietary Platform)**: Self-Service BI & Analytics Platform providing automated telemetry, data visualization, and executive reporting.
- **Bespoke Enterprise Software & ERP Middleware**: Custom integrations bridging legacy operational databases with SAP, Oracle, and cloud platforms.
- **Managed Cloud & Cybersecurity**: Kubernetes clusters, managed SOC, VAPT, DDoS mitigation, and SASE security.

### Unit 02: Enterprise Workforce & Mobility Solutions
- **Custom Overtime (OT) & Shift Compliance Software**: Engineered for complex manufacturing plants (developed for **FIAT India Automobiles**) to automate multi-shift scheduling, night allowance calculations, and statutory labor reporting.
- **Zebra Barcode & RFID Automation**: Authorised provider for rugged mobile computers (HHT), industrial barcode scanners, RFID readers, and certified thermal supplies.
- **Payroll, HRMS & Workforce Platforms**: Enterprise human capital management, time-attendance synchronization, and shift management via Staqo.
- **Biometric & Access Control**: AI facial recognition, cloud-connected biometric terminals, and visitor management systems.

### Unit 03: Security & Compliance
- **Physical & Digital Security**: Enterprise CCTV surveillance, turnstile access controllers, and perimeter defense.
- **Corporate Legal Advisory**: Strategic legal support and compliance documentation in association with `slslawfirm.in`.
- **Statutory Approvals & Environmental Audits**: PESO clearances, Fire NOCs, Factory Licenses, and environmental due diligence.

### Unit 04: Managed IT & System Integration
- **Annual Maintenance Contracts (AMC)**: Comprehensive on-site and remote coverage for enterprise servers, networks, and endpoints.
- **Resident Engineer & SLA Helpdesk Support**: Dedicated on-premise IT specialists backed by structured escalation tiers.
- **Infrastructure Audits**: Preventive maintenance schedules, performance telemetry, and network switching/routing optimization.

### Unit 05: Enterprise IT Infrastructure
- **Enterprise Compute & Storage**: High-density rack and blade servers, SAN/NAS arrays (Hewlett Packard Enterprise & Ingram Micro).
- **Workplace Lifecycle Management**: Commercial laptops, desktops, workstations, commercial displays, and peripherals.
- **Flexible Acquisition Models**:
  - **New Procurement**: Tier-1 OEM factory-direct sourcing.
  - **Certified Refurbished Equipment**: Enterprise-grade hardware tested and certified with warranty.
  - **IT Equipment Rental**: Short-term and long-term rental for transient projects and scale-up phases.
  - **Asset Buy-Back**: Structured residual recovery for retired hardware assets.
- **AR/VR On Demand**: Enterprise hardware, headsets, and interactive 3D visualization systems.
- **100% Quality Assurance**: Every device is configuration-checked and QA-tested before dispatch.

### Unit 06: Sustainability & E-Waste Management
- **Certified E-Waste Recycling**: Safe, compliant disposal in association with India's largest government-certified recyclers.
- **ESG & Extended Producer Responsibility (EPR)**: Carbon footprint auditing, EPR compliance credits, and SEBI BRSR alignment via Techknowgreen Solutions.
- **Circular Economy Solutions**: Plastic, battery, and hazardous electronic waste recovery.

---

## 4. Strategic Alliances Ecosystem (11 Global Partners)

SLSG works through direct alliances with global Tier-1 OEMs and specialized innovation institutions:

1. **Tata Communications** *(Enterprise IT)*: Tier-1 IP network, MPLS, SD-WAN, Vayu AI Cloud, SASE, and UCaaS.
2. **Yotta Data Services** *(Enterprise IT)*: Tier-IV sovereign hyperscale colocation, NVIDIA GPU AI cloud, and Drishticam AI video surveillance.
3. **Hewlett Packard Enterprise (HPE)** *(Enterprise IT)*: ProLiant compute, Alletra storage arrays, and HPE GreenLake hybrid cloud.
4. **Ingram Micro** *(Enterprise IT)*: Global cloud distribution, Microsoft 365, AWS, Azure, and data center hardware.
5. **SonicWall** *(Enterprise IT)*: Next-Gen firewalls (NSsp, NSa, TZ series), Secure Mobile Access (SMA), and Capture ATP sandbox.
6. **Society for Data Sciences (S4DS)** *(Enterprise IT)*: Software & Data Science Innovation Partner collaborating on enterprise AI, machine learning R&D, and data governance.
7. **Zebra Technologies** *(Industry Solutions)*: Rugged mobile computers, barcode scanners, RFID readers, and Zebra Workcloud™ software.
8. **Techknowgreen Solutions** *(Industry Solutions)*: EIA clearances, ESG compliance consulting, and turnkey environmental cleantech.
9. **PeopleLink** *(Industry Solutions)*: Interactive flat panels, boardroom automation, LED video walls, and telepresence endpoints.
10. **Staqo Enterprise** *(Enterprise IT)*: Enterprise ERP, HCM, cloud modernization, and workforce tracking.
11. **Realtime Worldwide** *(Industry Solutions)*: AI biometric terminals, facial recognition, and visitor management systems.

---

## 5. Flagship Client Proof Points

- **Retail Digital Signage — Chandukaka Saraf & Sons**: Powering a multi-city commercial showroom digital display network via Drishya SaaS across outlets in Baramati, Pune, and Maharashtra.
- **Automotive Workforce Automation — FIAT India Automobiles**: Engineered custom Overtime (OT) Calculation & Shift Compliance software to streamline factory workforce operations.
- **Enterprise & Banking Clients**: Kolte-Patil Developers Ltd, The Baramati Sahakari Bank Ltd, DCCIA Pune, Redi-Group India, Kapston Services Limited, Codewalla Software, Vozon ComSoft, TECHNE AI, and more.

---

## 6. Technical SEO & Schema.org Structured Data

The platform implements deep Semantic Web markup adhering strictly to [Schema.org](https://schema.org) standards:

| Page | Canonical URL | JSON-LD `@graph` Types | Highlights |
| :--- | :--- | :--- | :--- |
| `index.html` | `https://slsginfosystem.com/` | `Organization`, `WebSite`, `WebPage`, `LocalBusiness` | Enriched with `taxID: "27ABKCS167SB1ZB"`, `legalName`, `sameAs: ["...linkedin..."]`, and Head/Branch office coordinates |
| `services.html` | `https://slsginfosystem.com/services.html` | `WebPage`, `BreadcrumbList`, `FAQPage` | 6 interactive FAQs tagged with `Question` & `acceptedAnswer` for Google Rich Snippets |
| `about.html` | `https://slsginfosystem.com/about.html` | `AboutPage`, `BreadcrumbList`, `Person` (x2) | Detailed Person entities for CEO Ashok Srivastava and COO Anil Kumar (Air Force Veteran) |
| `contact.html` | `https://slsginfosystem.com/contact.html` | `ContactPage`, `BreadcrumbList`, `LocalBusiness` (x2) | Kharadi Head Office & Katraj Branch Office schemas with phone numbers, hours, and geolocation |
| `stories.html` | `https://slsginfosystem.com/stories.html` | `CollectionPage`, `BreadcrumbList` | Journal collection hierarchy |
| `story-*.html` | `https://slsginfosystem.com/story-*.html` | `BlogPosting`, `BreadcrumbList` | Author: `SLSG Infosystems Pvt. Ltd.`, publishing metadata |

### Sitemap & Search Crawler Directives
- `sitemap.xml`: XML sitemap with `<loc>`, `<lastmod>2026-10-21</lastmod>`, `<changefreq>`, and search `<priority>` (1.0 for homepage down to 0.6 for archives).
- `robots.txt`: Directs search engine spiders (Googlebot, Bingbot, etc.) to the sitemap while protecting private utility and script directories (`/scripts/`, `/scratch/`, `/docs/`).

---

## 7. Cross-Device Responsiveness & Theme System

The design is built on a responsive mobile-first foundation:
- **Breakpoints**:
  - Mobile Phones: `360px` – `480px` (single-column cards, full-width touch buttons >48px, compact drawer menu).
  - Tablets: `768px` – `1024px` (dual-column grid, fluid typography, readable line lengths).
  - Laptops & Desktops: `1200px` – `1600px+` (three/four-column grids, subtle entrance animations).
- **Dark/Light Mode**:
  - Implemented via CSS custom properties in `assets/styles/theme.css`.
  - Persisted in browser `localStorage`.
  - Zero Flash of Unstyled Content (FOUC) guaranteed by a blocking pre-paint script in the `<head>` of every HTML document.

---

## 8. Quality Assurance & Verification Scripts

The repository includes two automated test suites with **zero external dependencies**:

### Site Structure & Link Validator
Verifies single `<h1>`, single `<main>`, unique element IDs, valid local file links (including PDF downloads), and cross-page anchor hashes:
```bash
python scripts/check_site.py
```
*(Supports Python 3.8+ on Windows, macOS, and Linux; automatically decodes UTF-8)*.

### SEO & Schema Validator
Verifies unique `<title>` and `<meta description>` tags across all pages, production canonical URLs, valid JSON-LD schemas, breadcrumb targets, and complete `sitemap.xml` coverage:
```bash
python scripts/check_seo.py
```

### JavaScript Syntax Verification
```bash
node --check assets/site.js
node --check assets/theme.js
```

---

## 9. Local Development & Deployment

### Running Locally
To test the website locally, use Python's built-in static server:
```bash
python -m http.server 8080
```
Then open your web browser to: `http://localhost:8080`

### Publishing & Deployment
1. Ensure both test scripts pass cleanly:
   ```bash
   python scripts/check_site.py
   python scripts/check_seo.py
   ```
2. Commit and push changes to the production branch (`main`):
   ```bash
   git add .
   git commit -m "Update platform: Corporate Profile Ver 1.4, Technical SEO, S4DS alliance & deep documentation"
   git push origin main
   ```
3. Cloudflare Pages or GitHub Pages will automatically deploy the static files within 30–60 seconds.
4. Verify custom domain resolution at [https://slsginfosystem.com](https://slsginfosystem.com).

---

## 10. Document Versioning & Contact

- **Current Repository Version**: Ver 6.5 (Multi-page Architecture)
- **Corporate Profile Reference**: Ver 1.4 (October 2026)
- **Lead Developer & Technical Contact**: SLSG Infosystems Engineering Team (`contact@slsginfosystem.com`)
