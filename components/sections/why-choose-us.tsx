'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'

const reasons = [
  {
    title: "Reliable Plumbing with Integrity",
    description: "At Miracle Man Plumbing Inc., we believe in doing the job right with honest and fair pricing every time. Our customers know they can count on us for quality work and transparent service from start to finish."
  },
  {
    title: "24/7 Emergency Services",
    description: "Plumbing problems don't wait, and neither do we. Our team is available around the clock to handle urgent issues and restore your peace of mind."
  },
  {
    title: "Trusted Local Expertise Since 2005",
    description: "We've been proudly serving Prescott Valley and surrounding communities since 2005. As a licensed Master Plumber, I bring decades of hands-on experience and certification to every job."
  },
  {
    title: "Locally Owned, Personally Committed",
    description: "As a locally owned and operated business, we take pride in treating our customers like neighbors. You'll always get personalized service and a commitment to your satisfaction."
  }
]

export function WhyChooseUs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1d588d] mb-4">
            Why Choose Us?
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Left side - Image */}
          <div className="flex justify-center lg:justify-start h-[450px]">
            <Image
              src="/images/MMPworker.jpg.webp"
              alt="Miracle Man Plumbing Professional"
              width={400}
              height={450}
              className="rounded-lg shadow-xl object-cover h-full w-auto"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
          </div>
          
          {/* Right side - FAQ Accordion */}
          <div className="space-y-4">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors h-[100px]"
                >
                  <h3 className="text-xl font-bold text-[#1d588d]">
                    {reason.title}
                  </h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-[#1d588d] transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div className={`transition-all duration-300 ease-out ${
                  openIndex === index 
                    ? 'max-h-40 opacity-100' 
                    : 'max-h-0 opacity-0 overflow-hidden'
                }`}>
                  <div className="px-6 pb-4 bg-gray-50">
                    <p className="text-gray-600 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}