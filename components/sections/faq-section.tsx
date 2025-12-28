'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

const faqs = [
  {
    id: 1,
    question: "Do you offer emergency plumbing services?",
    answer: "Yes, we provide 24/7 emergency plumbing services for both residential and commercial clients. Whether it's a burst pipe or a backed-up drain, we're ready to respond any time, day or night."
  },
  {
    id: 2,
    question: "What types of water heaters do you install and repair?",
    answer: "We service and install both traditional tank water heaters and energy-efficient tankless models. We'll help you choose the right option for your home or business and ensure it's installed to code."
  },
  {
    id: 3,
    question: "What is hydro jetting and when is it needed?",
    answer: "Hydro jetting is a powerful method of clearing tough blockages and buildup inside pipes using high-pressure water. It's ideal for stubborn clogs and routine maintenance of your sewer and drain lines."
  },
  {
    id: 4,
    question: "Are you a licensed and insured plumbing company?",
    answer: "Absolutely. Miracle Man Plumbing Inc. is fully licensed and insured, and we've been providing trusted plumbing services in Prescott Valley since 2005. All work is performed by a certified Master Plumber."
  }
]

const additionalFaqs = [
  {
    id: 5,
    question: "Is it really necessary to flush my water heater annually?",
    answer: "Yes, especially in Arizona where hard water causes rapid sediment buildup. Over time, sediment reduces efficiency, shortens the heater's lifespan, and can even cause rumbling noises or leaks. Flushing once a year helps preserve the heater's performance and ensures even heating. Miracle Man Plumbing Inc. offers professional flushing services and tank inspections, especially important for households relying on standard tank heaters. It's a small maintenance task that can prevent early replacement costs."
  },
  {
    id: 6,
    question: "What are the signs that my sewer line might be damaged or clogged?",
    answer: "Slow drains throughout the house, gurgling toilets, sewage odors, and occasional backups often point to a sewer line issue. Invasive tree roots, shifting soil, or pipe deterioration are common in Prescott Valley. Unlike a simple drain clog, a compromised sewer line needs professional diagnostics. We use video camera inspections to locate the exact problem—whether it's a blockage, break, or sagging section—so we can recommend the most efficient, least invasive repair method possible."
  },
  {
    id: 7,
    question: "What's the difference between a slab leak and a regular leak, and why is it serious?",
    answer: "A slab leak occurs when pipes beneath your home's concrete foundation break or leak. Unlike visible leaks, slab leaks often go undetected until they cause foundation damage, mold growth, or unusually high water bills. Signs include warm spots on floors, cracked tiles, or the sound of running water with all fixtures off. Miracle Man Plumbing Inc. uses non-invasive electronic leak detection to pinpoint the issue and offers trenchless repair options to minimize disruption and repair time."
  },
  {
    id: 8,
    question: "What are the long-term advantages of installing a tankless water heater?",
    answer: "Tankless water heaters provide hot water on demand and typically last longer than traditional tanks. They're highly efficient, reducing energy costs, and they save space. For households with unpredictable hot water usage, they offer unlimited supply without standby heat loss. Miracle Man Plumbing Inc. assesses your home's size and usage habits to recommend the right unit and ensure it's installed with proper venting, gas supply, and water filtration—key to ensuring your investment pays off."
  },
  {
    id: 9,
    question: "Can plumbing upgrades really increase my home's value?",
    answer: "Absolutely. Replacing old fixtures with energy-efficient ones, installing modern PEX or copper piping, and upgrading water heaters or filtration systems make your home more appealing to buyers. Buyers in Prescott Valley are especially cautious of older plumbing due to hard water wear. Miracle Man Plumbing Inc. helps you prioritize upgrades that not only improve functionality but also offer excellent ROI when selling your home."
  },
  {
    id: 10,
    question: "How can I reduce water waste and lower my monthly bill?",
    answer: "Start by fixing small leaks—dripping faucets and running toilets waste gallons daily. Install low-flow fixtures and consider a pressure regulator if your pressure exceeds 80 PSI. Water softeners also reduce scaling, improving appliance efficiency. Miracle Man Plumbing Inc. offers water audits and eco-friendly product installations to help you cut waste and save money without sacrificing comfort or performance."
  }
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [additionalOpenIndex, setAdditionalOpenIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const toggleAdditionalAccordion = (index: number) => {
    setAdditionalOpenIndex(additionalOpenIndex === index ? null : index)
  }

  return (
    <section className="py-10 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="text-center mb-6 lg:mb-16">
          <h2 className="text-2xl lg:text-4xl font-bold text-[#0B2545] mb-2 lg:mb-4 nav-font">
            Frequently Asked Questions
          </h2>
          <p className="text-sm lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our plumbing services in Prescott Valley
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Left side - Image (hidden on mobile) */}
          <div className="hidden lg:flex justify-start h-[450px]">
            <Image
              src="/images/MMPfaq.jpg.webp"
              alt="Miracle Man Plumbing professional plumber answering customer questions"
              width={400}
              height={450}
              className="rounded-lg shadow-xl object-cover h-full w-auto"
            />
          </div>

          {/* Right side - FAQ Accordion */}
          <div className="space-y-3 lg:space-y-4">
            {faqs.map((faq, index) => (
              <div key={faq.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-4 lg:px-6 py-4 lg:py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors min-h-[70px] lg:h-[100px]"
                >
                  <h3 className="text-sm lg:text-xl font-bold text-[#0B2545] pr-2">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-[#0B2545] transition-transform duration-300 flex-shrink-0 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div className={`transition-all duration-300 ease-out ${
                  openIndex === index
                    ? 'max-h-48 lg:max-h-40 opacity-100'
                    : 'max-h-0 opacity-0 overflow-hidden'
                }`}>
                  <div className="px-4 lg:px-6 pb-4 bg-gray-50">
                    <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Full-Width FAQ Section */}
        <div className="mt-10 lg:mt-16">
          <div className="text-center mb-6 lg:mb-12">
            <h3 className="text-xl lg:text-4xl font-bold text-[#0B2545] mb-2 lg:mb-4">
              More Questions & Answers
            </h3>
            <p className="text-sm lg:text-lg text-gray-600">
              Get detailed answers to common plumbing questions
            </p>
          </div>

          <div className="space-y-3 lg:space-y-4">
            {additionalFaqs.map((faq, index) => (
              <div key={faq.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => toggleAdditionalAccordion(index)}
                  className="w-full px-4 lg:px-6 py-4 lg:py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-sm lg:text-xl font-bold text-[#0B2545] pr-2">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-[#0B2545] transition-transform duration-300 flex-shrink-0 ${
                      additionalOpenIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div className={`transition-all duration-300 ease-out ${
                  additionalOpenIndex === index
                    ? 'max-h-[500px] lg:max-h-96 opacity-100'
                    : 'max-h-0 opacity-0 overflow-hidden'
                }`}>
                  <div className="px-4 lg:px-6 pb-4 lg:pb-6 bg-gray-50">
                    <p className="text-gray-700 leading-relaxed text-sm lg:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-8 lg:mt-12">
          <p className="text-gray-600 mb-4 text-sm lg:text-base">
            Still have questions? We&apos;re here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center">
            <a
              href="tel:(928) 713-0004"
              className="inline-flex items-center justify-center px-4 lg:px-6 py-2.5 lg:py-3 bg-[#EDB23A] hover:bg-[#C08222] text-white font-semibold rounded-lg transition-colors text-sm lg:text-base"
            >
              Call (928) 713-0004
            </a>
            <a
              href="mailto:info@miraclemanplumbing.com"
              className="inline-flex items-center justify-center px-4 lg:px-6 py-2.5 lg:py-3 border-2 border-[#0B2545] text-[#0B2545] hover:bg-[#0B2545] hover:text-white font-semibold rounded-lg transition-colors text-sm lg:text-base"
            >
              Send Email
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}