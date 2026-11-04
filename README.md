# AYURVEDAM

Frontend for the AYURVEDAM website: Panchakarma wellness and traditional Kerala massage.

Built with Next.js (App Router), React, TypeScript, Tailwind CSS, Motion, Lucide React, React Hook Form and Zod.

## Local setup

You need [Node.js](https://nodejs.org/) 20.9 or newer (22 LTS or later is recommended) and npm.

```bash
git clone https://github.com/AYURVEDAM-V1/ayurvedam-frontend.git
cd ayurvedam-frontend
npm install
cp .env.example .env.local
npm run dev
```

Then open <http://localhost:3000>.

## Scripts

| Command             | What it does                                  |
| ------------------- | --------------------------------------------- |
| `npm run dev`       | Starts the development server                 |
| `npm run build`     | Creates the production build                  |
| `npm run start`     | Serves the production build                   |
| `npm run lint`      | Checks the code with ESLint                   |
| `npm run typecheck` | Generates route types and checks TypeScript   |

## Project structure

```text
src/
├── app/                Pages and the root layout
├── components/
│   ├── layout/         Header, footer, mobile menu and shared page parts
│   └── ui/             Small reusable pieces such as Button and Section
├── config/             Business details and navigation
└── lib/                Helpers, including the phone and WhatsApp links
```

## Editing business details

All contact details live in [src/config/site.ts](src/config/site.ts). Change a value there and it updates across the site.

The fields set to `null` (`email`, `address`, `hours` and `mapEmbedUrl`) are waiting for the client. Until they are filled in, the site shows an honest placeholder.

Before going live, set `NEXT_PUBLIC_SITE_URL` to the real website address. Canonical links, sharing tags and the sitemap depend on it.

## Content rules

Do not publish anything the client has not confirmed. That includes doctor credentials, years of experience, certifications, insurance coverage, reviews, success rates, medical outcomes and prices.

Describe therapies as traditional wellness practices, and avoid claims that they treat or cure a condition.

## Design system

The design language is called "Kasavu & Laterite". Its tokens are in [src/app/globals.css](src/app/globals.css).

| Token        | Value     | Use                                                |
| ------------ | --------- | -------------------------------------------------- |
| `ivory`      | `#F7F3EA` | Page background                                    |
| `sand`       | `#EAE1D3` | Alternate sections                                 |
| `cocoa`      | `#302B26` | Text and dark sections                             |
| `muted`      | `#655B51` | Secondary text                                     |
| `terracotta` | `#B8745C` | Decoration and large display type only             |
| `laterite`   | `#9A4F36` | Links, small accent text and primary buttons       |
| `sage`       | `#A7B5A0` | Accent text on dark sections                       |
| `whatsapp`   | `#0F7B6E` | WhatsApp buttons                                   |

- **Type:** Cormorant Garamond for headings, DM Sans for body text.
- **Contrast:** terracotta is below 4.5:1 on ivory and cocoa, so never use it for small text.
- **Shapes:** corners stay square. Avoid arches and pill shapes.
- **Signature:** the `kasavu` utility draws the woven border taken from a kasavu sari.
- **Buttons:** the `className` prop can only add styles. Use the `size` and `variant` props to change a button, and wrap it in an element to hide it at a breakpoint.

## Branches

- `main`: stable, production-ready code
- `develop`: integration branch for completed features
- `feature/*`: one branch for each piece of work, merged into `develop` through a pull request

`develop` is merged into `main` only after testing and approval.

Do not run `npm audit fix --force`. The remaining audit findings are in ESLint's development tooling, and that command would downgrade ESLint and break linting.
