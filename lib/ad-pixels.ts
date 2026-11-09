// Ad platform pixels loaded on every page (see app/layout.tsx).

// Meta Pixel IDs. 2226641014864021 is the "Miracle Man Plumbing Pixel" the
// Facebook ad campaign optimizes on (Lead event); 1789514218903451 is the
// site's original pixel.
export const META_PIXEL_IDS = ['1789514218903451', '2226641014864021']

// ChatGPT ads Measurement Pixel: the "Miracle Man Plumbing website" data
// source in OpenAI Ads Manager. Docs: developers.openai.com/ads/measurement-pixel
export const OPENAI_PIXEL_ID = 'EiBb4qW3XefYVVY2aBTSuZ'

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
    oaiq?: (...args: unknown[]) => void
  }
}

// Report a lead (contact form sent or phone number tapped) to Meta and
// ChatGPT ads. No-op for any pixel that is blocked or hasn't loaded.
export function trackLead() {
  window.fbq?.('track', 'Lead')
  window.oaiq?.('measure', 'lead_created', { type: 'customer_action' })
}
