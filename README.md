# ONOX Quote Engine

Modern, single-page enterprise quotation generator built for ONO Yazılım A.Ş.

Live Demo: https://yukselono.github.io/onox-quote-engine/

---

## Overview

ONOX Quote Engine is a premium React + Vite based quotation system designed for:

- Enterprise IoT projects
- Sustainability solutions
- Smart city deployments
- ESG / Carbon reporting services
- Hardware + software bundled offers

The system generates visually premium A4-ready quotation documents optimized for:

- PDF export
- Printing
- Enterprise procurement workflows
- Investor & government presentations

---

## Features

### Enterprise A4 Proposal Layout
- Clean Apple-inspired visual language
- Single-page structured proposal
- Print optimized
- PDF export ready

### Dynamic Pricing Engine
- Multi-item pricing
- Quantity calculations
- Automatic tax calculations
- Multi-currency support:
  - USD
  - EUR
  - TRY

### Technical Specification Builder
- Dynamic spec table
- Add/remove technical parameters
- Editable architecture details

### Product Visualization
- SVG-based device renders
- Device pairing visualizations
- Dynamic logo upload support

### Commercial Workflow
- Payment terms
- Delivery timelines
- Warranty details
- Signature sections
- Supplier / customer blocks

### Fully Client-Side
- No backend required
- Fast static deployment
- GitHub Pages compatible

---

## Tech Stack

- React 18
- Vite 5
- Lucide React
- Pure SVG rendering
- CSS-in-JS global styling

---

## Project Structure

```bash
onox-quote-engine/
│
├── public/
├── src/
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/yukselono/onox-quote-engine.git
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

---

## Production Build

```bash
npm run build
```

Preview production build locally:

```bash
npm run preview
```

---

## GitHub Pages Deployment

Deploy directly to GitHub Pages:

```bash
npm run deploy
```

Required `package.json` configuration:

```json
"homepage": "https://yukselono.github.io/onox-quote-engine"
```

Required `vite.config.js`:

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/onox-quote-engine/",
});
```

---

## Example Use Cases

- Carbon reporting quotations
- SUNX deployment proposals
- IoT hardware offers
- Smart building packages
- ESG consulting proposals
- AI integration offers
- Sustainability platform licensing

---

## Future Roadmap

Planned features:

- PDF generation engine
- CRM integration
- Proposal templates
- AI-assisted quotation builder
- Dynamic branding system
- QR code embedding
- Multi-page proposal support
- Proposal analytics
- E-signature integration

---

## License

Private internal project of ONO Yazılım A.Ş.

All rights reserved.

---

## ONO Yazılım A.Ş.

ONO develops:

- Smart sustainability systems
- Carbon intelligence platforms
- IoT infrastructure
- AI-powered environmental analytics
- Smart city technologies

Website:
https://onox.dev

---
