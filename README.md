# Aurudu Landing Page

Sinhala New Year (අලුත් අවුරුද්ද) landing page with a friendly UI, four festive colors, and a 3D animated cube.

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to load Sinhala-friendly fonts.

## Notes

- Theme colors are defined in `src/app/globals.css`.
- The 3D cube animation is pure CSS (no external animation libraries).
- The sun 3D effect is rendered with `@react-three/fiber` and `three`.
- To enable the FMBindumathi font, add the font files to `public/fonts/`:
  - `FMBindumathi-Regular.woff2`
  - `FMBindumathi-Regular.ttf`
- Open-source photos are loaded from Unsplash (see `src/app/page.js`).
