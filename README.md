# Miracle Man Plumbing Website

A modern, responsive marketing website for plumbing services built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Next.js 15** with App Router and SSR
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **shadcn/ui** component library
- **Resend** for email contact forms
- **Vercel Analytics** and Speed Insights
- **Form validation** with Zod and React Hook Form
- **Responsive design** for all devices
- **SEO optimized** with proper metadata

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4.6
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **Email**: Resend
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
.
├── app/
│   ├── (marketing)/          # Marketing pages group
│   │   ├── layout.tsx         # Shared layout with header/footer
│   │   ├── page.tsx           # Homepage
│   │   └── contact/           # Contact page
│   ├── api/
│   │   └── contact/route.ts   # Contact form API endpoint
│   ├── layout.tsx             # Root layout
│   ├── globals.css            # Global styles + Tailwind
│   └── not-found.tsx          # 404 page
├── components/
│   ├── ui/                    # shadcn/ui components
│   ├── forms/                 # Form components
│   ├── layout/                # Header, Footer, etc.
│   └── analytics.tsx          # Analytics components
├── lib/
│   ├── utils.ts               # Utility functions
│   ├── constants.ts           # Site-wide constants
│   └── metadata.ts            # SEO metadata helpers
└── public/                    # Static assets
```

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   Copy `.env.example` to `.env.local` and fill in your values:
   ```env
   RESEND_API_KEY=your-resend-api-key
   RESEND_FROM_EMAIL=noreply@yourdomain.com
   CONTACT_EMAIL=info@yourdomain.com
   NEXT_PUBLIC_GA_ID=your-google-analytics-id
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open** [http://localhost:3000](http://localhost:3000) in your browser.

## 📧 Email Setup

The contact form uses Resend for email delivery:

1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Add your domain and verify it
4. Update the environment variables

## 🎨 Customization

### Colors and Branding
- Update colors in `tailwind.config.ts`
- Modify CSS variables in `app/globals.css`
- Update site information in `lib/constants.ts`

### Components
- All UI components are in `components/ui/`
- Custom components are in `components/`
- Use `npx shadcn@latest add [component]` to add more components

## 📱 Pages

- **Homepage** (`app/(marketing)/page.tsx`) - Main landing page
- **Contact** (`app/(marketing)/contact/page.tsx`) - Contact form and info
- **404** (`app/not-found.tsx`) - Custom 404 page

## 🧪 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
- `npm run format` - Format code with Prettier

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

This is a standard Next.js app and can be deployed to any platform that supports Node.js.

## 🔧 Development

### Adding New Pages
1. Create files in `app/(marketing)/` for marketing pages
2. Use `generatePageMetadata()` for SEO
3. Follow the existing pattern for consistency

### Adding Components
```bash
npx shadcn@latest add [component-name]
```

### Environment Variables
- `RESEND_API_KEY` - Resend API key for email
- `RESEND_FROM_EMAIL` - From email address
- `CONTACT_EMAIL` - Where contact form emails go
- `NEXT_PUBLIC_GA_ID` - Google Analytics ID (optional)

## 📄 License

This project is private and proprietary to Miracle Man Plumbing.

## 🆘 Support

For technical support or questions about this website, contact the development team.