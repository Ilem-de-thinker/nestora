# Nestora — Tech-Skills Training Institute & Learning Platform

Nestora is a premier tech-skills training institute and global remote career accelerator that equips ambitious African talent with high-income digital capabilities and remote-ready physical infrastructure.

---

## 1. Brand Identity & Design System

The platform is designed around Nestora's signature **Milky & Emerald** identity:

- **Milky Canvas & Surfaces**:
  - Main background: `#FAF8F3` (warm off-white/cream)
  - Card & alternate sections: `#F3EFE6`
  - Dividing hairlines & borders: `#E8E3D6`
- **Forest & Emerald Green**:
  - Primary CTA / Links / Active states: `#0F6B4A`
  - Lighter highlight / hover: `#3FA773`
  - Soft tint for badges and cards: `#E6F2EA`
  - Deep near-black green for headings & footer: `#0B1F17`
  - High-contrast body text: `#2D3A34`

Design decisions adhere strictly to the universal frontend design constitution:
- Single-elevation card depths
- Zero-pill metadata discipline (clean unboxed text with typographic separators)
- 3-Zone Top Bar Contract
- WCAG AA accessible contrast
- Zero external broken images via resilient generated image assets and fallback containers

---

## 2. Route Architecture

The platform uses framework/data-style routing via `createBrowserRouter` + `RouterProvider` from `react-router`:

| Route | View Purpose |
| :--- | :--- |
| `/` | **Gateway Home**: Clear value proposition, teaser tracks, physical starter kit thesis, mentor teaser, alumni proof, 100% funded fellowship callout band. |
| `/programs` | **Programs Directory**: Filterable by track (Engineering, Design, Cloud & AI, Special Initiative). |
| `/programs/scholarship` | **The Nestora Impact Fellowship**: Dedicated grant page covering eligibility, selection stages, 6-week intensive breakdown, and direct apply CTA. |
| `/programs/:slug` | **Program Detail**: Deep dive with curriculum sprints, deliverables, tuition, prerequisites, and assigned mentors. |
| `/courses` | **Modular Skill Sprints**: Searchable catalog with level and category filters. |
| `/courses/:slug` | **Course Detail**: Syllabus breakdown with interactive lessons and enrollment modal. |
| `/apply` | **4-Step Admissions Stepper**: Form validation, track preselection (e.g. `?program=scholarship`), remote readiness, and success screen. |
| `/mentors` | **Mentors Directory**: Practitioner profiles from Moniepoint, Stripe, Paystack, and Ex-Andela. |
| `/mentors/:slug` | **Mentor Profile**: Bio, expertise badges, and weekly live office hours. |
| `/about` | **Institute Philosophy**: The Nestora thesis, core pillars, and regional learning hub coordinates. |
| `/careers-outcomes` | **Alumni Stories**: Verifiable before/after role transformations, salary multipliers, and hiring partner roster. |
| `/faq` | **Knowledge Base**: Categorized accordion covering grants, starter kit logistics, and admissions. |
| `/contact` | **Campuses & Inquiries**: Admissions inquiry form with validation and regional hub addresses (Lagos, Nairobi, London). |
| `/login` | **Student Sign In**: One-click demo fellow login (`Adebayo Ogunlesi`) or email entry. |
| `/dashboard` | **Student Workspace**: Cohort progress bar, active assignment submissions, live video room links, and remote starter kit hardware delivery tracker. |
| `*` | **404 Page**: Branded route-unmapped state with navigation links back to the gateway. |

---

## 3. Component Inventory

- **Layout & Shell**:
  - `Navbar`: 3-zone contract, responsive drawer, student session status
  - `Footer`: Rich near-black green footer with regional hubs and newsletter
  - `ScrollToTop`: Route-change scroll position reset
  - `ErrorBoundary`: System error handling with reload options
- **UI System**:
  - `Button`: Primary, secondary, outline, ghost, dark, and cream variants with loading state
  - `Card`: Canvas, surface, and dark styles with hairline borders
  - `Badge`: Clean non-pill tags in green, neutral, and dark variants
  - `Input`, `Textarea`, `Select`: Accessible form controls with error states and focus rings
  - `Accordion`: Collapsible syllabus and FAQ items with ARIA states
  - `Modal`: Accessible dialog modal with ESC listener and backdrop blur
  - `ImageWithFallback`: Resilient image rendering with `referrerPolicy="no-referrer"`

---

## 4. Local Development

Run the development server locally:

```bash
# 1. Install dependencies
npm install

# 2. Start Vite development server on port 3000
npm run dev
```

Visit `http://localhost:3000` in your browser.

---

## 5. Production Build & Linting

```bash
# Type check and build optimized bundle into dist/
npm run build

# Preview production build locally
npm run preview
```

---

## 6. Vercel Deployment (Zero Extra Config)

This repository includes a pre-configured `vercel.json` with client-side SPA rewrites:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Deploying via Vercel CLI:
```bash
npx vercel
```

### Deploying via GitHub / Vercel Dashboard:
1. Push this repository to GitHub or GitLab.
2. In the Vercel Dashboard, select **Add New Project** and import the repository.
3. Framework preset: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`
6. Click **Deploy**. All deep links (e.g. `/programs/scholarship`, `/apply?program=scholarship`, `/dashboard`) work seamlessly on reload and direct navigation.
