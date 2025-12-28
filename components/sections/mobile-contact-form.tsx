'use client'

import { ContactForm } from '@/components/forms/contact-form'

export function MobileContactForm() {
  return (
    <section className="lg:hidden bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-[#EDB23A]">
          <h2 className="text-2xl font-bold text-[#EDB23A] text-center mb-2">
            WANT A FREE QUOTE?
          </h2>
          <p className="text-gray-600 text-center text-sm mb-6">
            Fill out the form and we&apos;ll get back to you quickly!
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
