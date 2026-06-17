import { Metadata } from 'next'
import { SignatureBuilder } from './signature-builder'

// Internal team tool — keep it out of search and nav.
export const metadata: Metadata = {
  title: 'Email Signature Builder | Miracle Man Plumbing',
  description: 'Internal tool for creating Miracle Man Plumbing email signatures.',
  robots: { index: false, follow: false },
}

export default function EmailSignaturePage() {
  return <SignatureBuilder />
}
