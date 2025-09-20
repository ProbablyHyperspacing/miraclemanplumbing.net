'use client'

import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
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

export function AnalyticsProviders() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID
  
  return (
    <>
      <GoogleAnalytics gaId={gaId} />
      <Analytics />
      <SpeedInsights />
    </>
  )
}