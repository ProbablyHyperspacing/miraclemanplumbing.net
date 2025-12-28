import { Metadata } from 'next'
import { FAQSection } from './faq-section'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Miracle Man Plumbing - Prescott Valley, AZ',
  description: 'Find answers to common plumbing questions from homeowners in Prescott Valley, Arizona. Expert answers from Miracle Man Plumbing professionals.',
}

export default function FAQPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[35vh] flex items-center bg-gradient-to-br from-[#0B2545] via-[#0B2545] to-[#EDB23A]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/Miracle-Man-Site-Header-Background.jpg')"
          }}
        ></div>

        {/* Dark Tint for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#EDB23A]/20 rounded-full blur-lg"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-8 md:px-12 lg:px-16">
          <div className="text-center text-white">
            <h1 className="text-[1.75rem] md:text-[2.25rem] lg:text-[2.75rem] font-bold leading-tight text-white">
              FREQUENTLY ASKED QUESTIONS
            </h1>
            <p className="text-xl mt-4 text-white/90">
              Your Plumbing Questions Answered
            </p>
            <div className="mt-8 flex justify-center">
              <div className="w-24 h-1 bg-white/50 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-8 md:px-12 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B2545] mb-4">
              Essential Information
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to the most frequently asked questions about plumbing services, maintenance, and repairs.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <FAQSection />
          </div>
        </div>
      </section>
    </div>
  )
}