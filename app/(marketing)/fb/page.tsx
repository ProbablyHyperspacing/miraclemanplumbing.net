import { Metadata } from 'next'
import HomePage from '../page'

// Facebook ads landing page: the home page with the Facebook ServiceTitan
// tracking number swapped in (see TRACKING_PHONES in lib/constants.ts).
// Kept out of search results so only ad traffic lands here.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default HomePage
