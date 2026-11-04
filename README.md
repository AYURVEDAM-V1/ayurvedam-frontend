# AYURVEDAM

Frontend for the AYURVEDAM website: Panchakarma wellness and traditional Kerala massage.

The site is one long page based on the template the client created. It is built with Next.js (App Router), React, TypeScript, Tailwind CSS, React Hook Form and Zod.

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

| Command             | What it does                                |
| ------------------- | ------------------------------------------- |
| `npm run dev`       | Starts the development server               |
| `npm run build`     | Creates the production build                |
| `npm run start`     | Serves the production build                 |
| `npm run lint`      | Checks the code with ESLint                 |
| `npm run typecheck` | Generates route types and checks TypeScript |

## Project structure

```text
src/
├── app/                The page, root layout, styles, sitemap and robots file
├── components/
│   ├── booking/        The enquiry form and the links that preselect a service
│   ├── layout/         Top bar, header, footer and floating WhatsApp button
│   ├── sections/       One component for each section of the page
│   └── ui/             Small reusable pieces such as Button and Section
├── config/             Business details and navigation
├── data/               Therapies, Panchakarma, dosha questions and FAQ text
└── lib/                Helpers, including phone, WhatsApp and booking logic
```

## Editing content

- **Business details:** [src/config/site.ts](src/config/site.ts). Change a value there and it updates across the site.
- **Therapies:** [src/data/therapies.ts](src/data/therapies.ts). Add a `duration` to show a session length on its card.
- **Panchakarma:** [src/data/panchakarma.ts](src/data/panchakarma.ts).
- **Dosha questions:** [src/data/dosha.ts](src/data/dosha.ts).
- **FAQ and other home page text:** [src/data/home.ts](src/data/home.ts).

Before going live, set `NEXT_PUBLIC_SITE_URL` to the real website address. Canonical links, sharing tags and the sitemap depend on it.

## Content rules

The page text comes from the client's template, and the client has confirmed its details. Do not add new credentials, certifications, insurance coverage, reviews, success rates, medical outcomes or prices unless the client supplies them.

The health wording should be approved by a qualified practitioner before the site goes live.

## Booking enquiries

There is no backend. The form prepares a WhatsApp message, and the visitor reviews and sends it themselves. Nothing is stored or sent by the site, so the form must never say that a session is booked.

## Design tokens

The colours, fonts and spacing come from the client's template. They are defined in [src/app/globals.css](src/app/globals.css), and dark mode follows the visitor's system setting.

| Tailwind token | Light     | Dark      | Use                                 |
| -------------- | --------- | --------- | ----------------------------------- |
| `page`         | `#F2F4EE` | `#111A16` | Page background                     |
| `surface`      | `#FFFFFF` | `#17231E` | Cards and the form                  |
| `band`         | `#1E3A2F` | `#0B1411` | Green sections                      |
| `band-fg`      | `#EEF2EA` | `#E6ECE4` | Text on green sections              |
| `ink`          | `#1B2A23` | `#E4EAE2` | Main text                           |
| `muted`        | `#56665D` | `#A3B2A8` | Secondary text                      |
| `line`         | `#D4DCD2` | `#2A3A32` | Borders                             |
| `turmeric`     | `#D9A11E` | `#E8B43A` | Primary buttons                     |
| `copper`       | `#A65A2A` | `#D9895A` | Accents on light backgrounds        |
| `oil`          | `#C98F2E` | `#E0A84A` | Illustration and result bars        |
| `oil-text`     | `#CC9230` | `#E0A84A` | Gold text on green sections         |

- **Type:** Marcellus for headings, Karla for body text and Tiro Devanagari Hindi for Devanagari.
- **Contrast:** never use `copper` as text on `band`, or `oil` for small text on `band`. Both are below 4.5:1 in light mode.
- **Buttons:** the `className` prop can only add styles, because `cn` joins classes without resolving conflicts. To hide a button at a breakpoint, wrap it in an element.

## Branches

- `main`: stable, production-ready code
- `develop`: integration branch for completed features
- `feature/*`: one branch for each piece of work, merged into `develop` through a pull request

`develop` is merged into `main` only after testing and approval.

Do not run `npm audit fix --force`. The remaining audit findings are in ESLint's development tooling, and that command would downgrade ESLint and break linting.
