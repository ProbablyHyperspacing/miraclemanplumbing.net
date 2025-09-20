# Next.js 15 SSR Marketing Site Stack Template

## 🚀 Quick Start

```bash
npx create-next-app@latest my-app --typescript --tailwind --app --src-dir=false --import-alias="@/*"
cd my-app
```

## 📦 Core Stack

### Framework
- **Next.js 15.4.6** - App Router with SSR/SSG capabilities
- **React 18+** - Latest React features
- **TypeScript** - Type safety throughout

### Styling & UI
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible component library
  ```bash
  npx shadcn-ui@latest init
  npx shadcn-ui@latest add button card dialog form input label select textarea toast
  ```
- **Lucide Icons** - Beautiful, consistent icon set
  ```bash
  npm install lucide-react
  ```

### Performance & SEO
```bash
npm install @vercel/analytics @vercel/speed-insights
```

## 🏗️ Project Structure

```
.
├── app/
│   ├── (marketing)/          # Marketing pages group
│   │   ├── layout.tsx         # Shared layout with header/footer
│   │   ├── page.tsx           # Homepage
│   │   └── [slug]/            # Dynamic routes
│   ├── api/                   # API routes
│   │   └── contact/route.ts   # Contact form handler
│   ├── layout.tsx             # Root layout
│   ├── globals.css            # Global styles + Tailwind
│   └── not-found.tsx          # 404 page
├── components/
│   ├── ui/                    # shadcn/ui components
│   ├── sections/              # Page sections
│   ├── forms/                 # Form components
│   └── layout/                # Header, Footer, etc.
├── lib/
│   ├── utils.ts               # Utility functions
│   └── constants.ts           # Site-wide constants
├── public/
│   ├── images/                # Optimized images
│   └── fonts/                 # Local fonts (optional)
├── data/                      # JSON data files
└── types/                     # TypeScript types
```

## 🎨 Essential Components Setup

### 1. Root Layout (`app/layout.tsx`)
```tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Your Site Title',
  description: 'Your site description',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
```

### 2. Marketing Layout (`app/(marketing)/layout.tsx`)
```tsx
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  )
}
```

### 3. Tailwind Config (`tailwind.config.ts`)
```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#your-color',
          // Add your brand colors
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-in-out',
        'slide-up': 'slide-up 0.3s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
export default config
```

## 📧 Email/Contact Form Setup

### Email Service (Resend)
```bash
npm install resend
```

Create `.env.local`:
```env
RESEND_API_KEY=your-api-key
RESEND_FROM_EMAIL=noreply@yourdomain.com
```

### API Route (`app/api/contact/route.ts`)
```ts
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: 'your-email@domain.com',
      subject: 'New Contact Form Submission',
      html: `<p>Message from ${body.name}</p>`,
    })
    
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to send' },
      { status: 500 }
    )
  }
}
```

## 🔍 SEO & Analytics

### Google Analytics Setup
```tsx
// components/google-analytics.tsx
'use client'

import Script from 'next/script'

export function GoogleAnalytics({ gaId }: { gaId?: string }) {
  if (!gaId) return null
  
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  )
}
```

### Metadata Helper
```ts
// lib/metadata.ts
import { Metadata } from 'next'

export function generatePageMetadata({
  title,
  description,
  path = '',
}: {
  title: string
  description: string
  path?: string
}): Metadata {
  const baseUrl = 'https://yourdomain.com'
  const url = `${baseUrl}${path}`
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: url,
    },
  }
}
```

## 🎯 Performance Optimizations

### 1. Image Optimization
```tsx
import Image from 'next/image'

// Always use Next.js Image component
<Image
  src="/hero.jpg"
  alt="Hero"
  width={1920}
  height={1080}
  priority // for above-fold images
  placeholder="blur"
  blurDataURL="..." // generate with plaiceholder
/>
```

### 2. Font Optimization
```tsx
// Use next/font for optimal loading
import { Inter } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})
```

### 3. Dynamic Imports for Heavy Components
```tsx
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(
  () => import('@/components/heavy-component'),
  { 
    loading: () => <div>Loading...</div>,
    ssr: true // or false for client-only
  }
)
```

## 🚢 Deployment (Vercel)

### Install Vercel CLI
```bash
npm i -g vercel
```

### Deploy
```bash
vercel --prod
```

### Environment Variables
Set in Vercel Dashboard:
- `RESEND_API_KEY`
- `NEXT_PUBLIC_GA_ID` (for Google Analytics)
- Any other API keys

## 📝 Additional Libraries to Consider

### Forms & Validation
```bash
npm install react-hook-form zod @hookform/resolvers
```

### Animations
```bash
npm install framer-motion
# or
npm install @formkit/auto-animate
```

### Date Handling
```bash
npm install date-fns
```

### State Management (if needed)
```bash
npm install zustand
# or
npm install jotai
```

## 🎨 Design System Tips

1. **Create a consistent color palette** in Tailwind config
2. **Set up typography scale** using Tailwind's prose or custom classes
3. **Establish spacing system** (use consistent padding/margins)
4. **Create reusable components** for CTAs, cards, sections
5. **Use CSS variables** for dynamic theming

## 🔧 Development Workflow

### Scripts to add to `package.json`:
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit",
    "format": "prettier --write ."
  }
}
```

### Install dev dependencies:
```bash
npm install -D prettier eslint-config-prettier @types/node
```

## 📋 Launch Checklist

- [ ] Set up custom domain
- [ ] Configure SSL certificate
- [ ] Set up Google Analytics
- [ ] Add sitemap.xml generation
- [ ] Implement robots.txt
- [ ] Set up error monitoring (Sentry)
- [ ] Configure email service
- [ ] Test all forms
- [ ] Optimize images
- [ ] Run Lighthouse audit
- [ ] Set up redirects for old URLs
- [ ] Configure CDN/caching
- [ ] Add security headers
- [ ] Set up backup system
- [ ] Create 404 page
- [ ] Test on all devices
- [ ] Cross-browser testing
- [ ] Set up uptime monitoring

## 🔐 Security Best Practices

1. **Validate all inputs** (server-side)
2. **Sanitize user content** before displaying
3. **Use environment variables** for secrets
4. **Implement rate limiting** on API routes
5. **Add CSRF protection** for forms
6. **Set security headers** in next.config.js:

```js
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
]
```

## 🚀 Performance Targets

- **Lighthouse Score**: 90+ on all metrics
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Core Web Vitals**: All green
- **Bundle Size**: < 200KB initial JS

---

This template provides a solid foundation for building performant, SEO-friendly marketing sites with Next.js 15. Customize based on your specific needs!