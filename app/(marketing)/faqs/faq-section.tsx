'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "Do you offer emergency plumbing services?",
    answer: "Yes, we provide 24/7 emergency plumbing services for both residential and commercial clients. Whether it's a burst pipe or a backed-up drain, we're ready to respond any time, day or night."
  },
  {
    question: "What types of water heaters do you install and repair?",
    answer: "We service and install both traditional tank water heaters and energy-efficient tankless models. We'll help you choose the right option for your home or business and ensure it's installed to code."
  },
  {
    question: "What is hydro jetting and when is it needed?",
    answer: "Hydro jetting is a powerful method of clearing tough blockages and buildup inside pipes using high-pressure water. It's ideal for stubborn clogs and routine maintenance of your sewer and drain lines."
  },
  {
    question: "Are you a licensed and insured plumbing company?",
    answer: "Absolutely. Miracle Man Plumbing Inc. is fully licensed and insured, and we've been providing trusted plumbing services in Prescott Valley since 2005. All work is performed by a certified Master Plumber."
  },
  {
    question: "What is included in your plumbing services?",
    answer: "Our plumbing services cover a wide range of needs, from minor repairs to major installations, including leak detection, drain cleaning, water heater repairs, and more, ensuring your plumbing system is functioning efficiently."
  },
  {
    question: "Do you offer residential plumbing services?",
    answer: "Yes, we provide comprehensive residential plumbing services such as leak repairs, water heater installations, drain cleaning, and fixture repairs to ensure your home's plumbing is in top condition."
  },
  {
    question: "Can you handle commercial plumbing projects?",
    answer: "We offer expert commercial plumbing services for businesses, including installation, repair, and maintenance of water systems, sewer lines, and fixtures, ensuring minimal disruption to your operations and long-lasting results."
  },
  {
    question: "How do I know if my water heater needs repair or replacement?",
    answer: "Signs of a faulty water heater include inconsistent water temperature, strange noises, or leaking. Our professionals can inspect your system and recommend repair or replacement options based on the condition of the unit."
  },
  {
    question: "What services do you offer for toilets?",
    answer: "We offer toilet repair and replacement services, including fixing clogs, leaks, and flushing issues. If your toilet is beyond repair, we can install a new, efficient model tailored to your needs."
  },
  {
    question: "How does leak detection work?",
    answer: "Our advanced leak detection methods use state-of-the-art technology, such as thermal imaging and sound sensors, to accurately pinpoint leaks in your pipes and prevent water damage before it becomes a bigger issue."
  },
  {
    question: "Do you provide emergency plumbing services?",
    answer: "Yes, we offer 24/7 emergency plumbing services for situations such as burst pipes, severe leaks, or clogged drains. Our team is always ready to respond quickly and efficiently to minimize damage and restore your plumbing system."
  }
]

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            onClick={() => toggleItem(index)}
            className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors flex items-center justify-between"
          >
            <span className="text-lg font-semibold text-[#0B2545] pr-4">
              {faq.question}
            </span>
            {openItems.includes(index) ? (
              <ChevronUp className="w-5 h-5 text-[#EDB23A] flex-shrink-0" />
            ) : (
              <ChevronDown className="w-5 h-5 text-[#EDB23A] flex-shrink-0" />
            )}
          </button>
          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
            openItems.includes(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
              <p className="text-gray-700 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}