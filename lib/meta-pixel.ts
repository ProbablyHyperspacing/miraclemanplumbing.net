// Meta Pixel IDs loaded on every page. 2226641014864021 is the "Miracle Man
// Plumbing Pixel" the Facebook ad campaign optimizes on (Lead event);
// 1789514218903451 is the site's original pixel.
export const META_PIXEL_IDS = ['1789514218903451', '2226641014864021']

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

// Report a lead (contact form sent or phone number tapped) to Meta.
// No-op if the pixel is blocked or hasn't loaded.
export function trackLead() {
  window.fbq?.('track', 'Lead')
}
