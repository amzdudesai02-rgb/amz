# Frontend - AMZDudes Platform

Next.js 14 frontend for the AMZDudes automation platform.

## Structure

```
frontend/
├── app/
│   ├── api/              # Next.js API routes
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Main dashboard
│   └── globals.css      # Global styles
├── components/
│   └── ToolCard.tsx     # Tool card component
├── lib/
│   ├── tools.ts         # Tools configuration
│   └── api.ts           # API utilities
├── public/              # Static assets
└── package.json         # Dependencies
```

## Setup

1. **Install dependencies:**
   ```bash
   cd frontend
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open:** http://localhost:3000

## Build

```bash
npm run build
npm start
```

## Deployment

See main `README.md` for deployment instructions.

