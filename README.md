# Aethereum Quantum Smart Token

Next-generation blockchain token with quantum-resistant cryptography, built with Next.js and integrated with Vercel Speed Insights.

## Features

- ⚡ Built with Next.js 14 (App Router)
- 📊 Integrated with Vercel Speed Insights for performance monitoring
- 🎨 TypeScript for type safety
- 🔍 ESLint configured for code quality
- 🚀 Optimized for deployment on Vercel

## Vercel Speed Insights Integration

This project includes Vercel Speed Insights for real-time performance monitoring. The integration has been implemented following the official Vercel documentation.

### What's Included

- **`@vercel/speed-insights` package**: Installed and configured
- **SpeedInsights Component**: Added to the root layout (`app/layout.tsx`)
- **Automatic Tracking**: Performance metrics are automatically collected once deployed to Vercel

### How It Works

The `<SpeedInsights />` component is placed in the root layout file at `app/layout.tsx`:

```tsx
import { SpeedInsights } from '@vercel/speed-insights/next'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
```

This component automatically:
- Tracks Core Web Vitals (LCP, FID, CLS, FCP, TTFB)
- Reports real user metrics from production traffic
- Provides insights in the Vercel dashboard

### Viewing Speed Insights Data

After deploying to Vercel:

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Click on the **Speed Insights** tab
4. View performance metrics and Core Web Vitals

The tracking script will be available at `/_vercel/speed-insights/script.js` after deployment.

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, pnpm, yarn, or bun

### Installation

Install dependencies using your preferred package manager:

```bash
# Using pnpm (recommended)
pnpm install

# Using npm
npm install

# Using yarn
yarn install

# Using bun
bun install
```

### Development

Run the development server:

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Building for Production

Create an optimized production build:

```bash
pnpm build
# or
npm run build
# or
yarn build
# or
bun run build
```

### Linting

Run ESLint to check for code quality issues:

```bash
pnpm lint
# or
npm run lint
# or
yarn lint
# or
bun run lint
```

## Deployment to Vercel

### Method 1: Deploy via CLI

Install the Vercel CLI if you haven't already:

```bash
pnpm i -g vercel
# or
npm i -g vercel
```

Deploy your application:

```bash
vercel deploy
```

### Method 2: Deploy via Git Integration

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your repository on [Vercel](https://vercel.com/new)
3. Vercel will automatically detect Next.js and configure the build settings
4. Click "Deploy"

### Enabling Speed Insights on Vercel

1. Navigate to your project on the [Vercel Dashboard](https://vercel.com/dashboard)
2. Click on the **Speed Insights** tab
3. Click **Enable** to activate Speed Insights
4. Deploy your application (or trigger a redeploy)
5. Once deployed, visit your site to generate traffic
6. Return to the Speed Insights tab to view your performance data

> **Note:** Speed Insights data will appear after your site receives real user traffic. It may take a few minutes to a few hours for data to populate depending on traffic volume.

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with SpeedInsights component
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── public/
│   └── favicon.svg      # Favicon
├── .eslintrc.json       # ESLint configuration
├── .gitignore           # Git ignore rules
├── next.config.js       # Next.js configuration
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
└── README.md           # This file
```

## Learn More

### Next.js Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

### Vercel Speed Insights

- [Speed Insights Documentation](https://vercel.com/docs/speed-insights)
- [Speed Insights Package](https://vercel.com/docs/speed-insights/package)
- [Understanding Metrics](https://vercel.com/docs/speed-insights/metrics)
- [Privacy Policy](https://vercel.com/docs/speed-insights/privacy-policy)

## License

See [LICENSE](LICENSE) file for details.
