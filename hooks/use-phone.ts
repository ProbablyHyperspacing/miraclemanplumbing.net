'use client'

import { usePathname } from 'next/navigation'
import { SITE_CONFIG, TRACKING_PHONES } from '@/lib/constants'

// The phone number to show on the current page: the page's ServiceTitan
// tracking number if it has one (see TRACKING_PHONES), otherwise `fallback`.
// Returns the formats the site uses so swapped numbers look the same.
export function usePhone(fallback: string = SITE_CONFIG.phone) {
  const pathname = usePathname()
  const digits = (TRACKING_PHONES[pathname] ?? fallback).replace(/\D/g, '').slice(-10)
  const [area, prefix, line] = [digits.slice(0, 3), digits.slice(3, 6), digits.slice(6)]

  return {
    href: `tel:+1${digits}`,
    parens: `(${area}) ${prefix}-${line}`, // (928) 830-3575
    dashes: `${area}-${prefix}-${line}`, // 928-830-3575
    spaces: `${area} ${prefix} ${line}`, // 928 830 3575
  }
}
