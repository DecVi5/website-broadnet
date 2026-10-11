# Broadnet Internet Services & ELV Security

Official web application for **Broadnet Internet Services** (Est. 2014) — Chennai and Avadi's leading CCTV surveillance, ELV security integrator, and fiber broadband provider.

**Address:** 1093 Fire Station Road, TNHB, Avadi, Chennai 600054  
**Primary Contact:** [+91 86818 88111](tel:+918681888111)  
**Email:** admin@broadnet.in  
**Website:** [https://www.broadnet.in](https://www.broadnet.in)

---

## 🚀 Tech Stack

- **Framework:** Next.js 16 (App Router with Turbopack)
- **UI Library:** React 19
- **Styling:** Tailwind CSS v4 & Modern Glassmorphism CSS Tokens
- **Icons & Motion:** Lucide React, Framer Motion, Lenis Smooth Scroll
- **Email Dispatch:** Server-side Nodemailer via `/api/enquiry`
- **TypeScript:** Strict type checking with Next.js typegen

---

## 🛠️ Getting Started

### 1. Prerequisites
- Node.js 20.9+ (LTS)
- npm 10+

### 2. Installation
```bash
git clone https://github.com/Devesh223/broadnet-website.git
cd broadnet-website
npm install
```

### 3. Environment Variables
Copy `.env.example` to `.env.local` for local development:
```bash
cp .env.example .env.local
```

Configure the following variables in `.env.local`:
```env
# Admin email — enquiry submissions are delivered here
ADMIN_EMAIL=admin@broadnet.in

# SMTP Configuration (required for the enquiry form to dispatch emails)
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your_email@broadnet.in
SMTP_PASS=your_email_password
```

### 4. Running the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Production Build
```bash
npm run build
npm run start
```

---

## 📁 Architecture & Single Source of Truth

- `data/site.ts`: **Single source of truth** for all business facts, phone numbers, addresses, hours, package specifications, SLAs, and plan pricing.
- `data/services.ts`: Catalog of all 9 core security and networking services.
- `components/PackageCard.tsx`: Unified reusable pricing and specification card for CCTV and Internet packages with "What's Included" breakdown.
- `components/LocationChecker.tsx`: Interactive real-time search & autocomplete coverage checker across 30+ Avadi & Chennai localities.
- `lib/analytics.ts`: Vendor-agnostic analytics event tracking (Call, WhatsApp, Forms, Coverage Check).

---

## 🚢 Deployment Notes

### Deploying to Vercel
1. Import repository into Vercel.
2. In **Project Settings → Environment Variables**, add `ADMIN_EMAIL`, `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, and `SMTP_PASS`.
3. Preview deployments (`*.vercel.app`) automatically serve `X-Robots-Tag: noindex, nofollow` and `robots.txt: Disallow` to protect production SEO rankings.
4. Production domain `https://www.broadnet.in` is fully indexed with dynamic XML sitemaps and localized JSON-LD schemas.
