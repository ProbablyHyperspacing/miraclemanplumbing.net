import { Metadata } from 'next'
import { LeaveAReview } from './leave-a-review'

// Utility page for the review QR code only — keep it out of search and nav so
// it doesn't compete with the real /reviews page.
export const metadata: Metadata = {
  title: 'Leave a Review | Miracle Man Plumbing',
  description: 'Leave a Google review for Miracle Man Plumbing.',
  robots: { index: false, follow: false },
}

export default function LeaveAReviewPage() {
  return <LeaveAReview />
}
