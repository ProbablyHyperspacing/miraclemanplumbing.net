'use client'

import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Script from 'next/script'
import { useEffect } from 'react'
import { trackLead } from '@/lib/meta-pixel'

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

// Pages whose phone links aren't customer leads: the hiring line on /careers
// and the internal email signature builder.
const NON_LEAD_PATHS = ['/careers', '/email-signature']

// Counts a tap on any phone link as a Meta Lead. This counts the tap, not
// whether the call connected.
export function MetaPhoneLeads() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.('a[href^="tel:"]')
      if (!link || NON_LEAD_PATHS.some((p) => window.location.pathname.startsWith(p))) return
      trackLead()
    }
    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [])

  return null
}

export function AnalyticsProviders() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID

  return (
    <>
      <GoogleAnalytics gaId={gaId} />
      <MetaPhoneLeads />
      <Analytics />
      <SpeedInsights />
    </>
  )
}