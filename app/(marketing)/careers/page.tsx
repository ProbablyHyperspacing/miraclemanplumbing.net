import { Metadata } from 'next'
import { CareersForm } from '@/components/forms/careers-form'

export const metadata: Metadata = {
  title: 'Careers | Miracle Man Plumbing - Join Our Team',
  description: 'Join the Miracle Man Plumbing team. We\'re hiring experienced plumbers in Prescott Valley, AZ. Top pay, bonuses, and career growth opportunities.',
}

const benefits = [
  'A mission-driven company',
  'Growth into higher roles',
  'Top pay and bonuses',
  'Paid training to level up your skillset',
  'A brand that\'s becoming a local standout',
  'A positive, uplifting work environment',
  'Opportunities for career growth',
]

export default function CareersPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center bg-gradient-to-br from-[#0B2545] via-[#0B2545] to-[#EDB23A]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/Miracle-Man-Site-Header-Background.jpg')"
          }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 container mx-auto px-8 md:px-12 lg:px-16">
          <div className="text-center text-white">
            <p className="text-lg md:text-xl text-[#EDB23A] font-semibold mb-4 uppercase tracking-wider">
              Looking for Something Better?
            </p>
            <h1 className="text-[2rem] md:text-[3rem] lg:text-[3.5rem] font-bold leading-tight text-white nav-font">
              We&apos;re Hiring Experienced Plumbers
            </h1>
            <div className="mt-8 flex justify-center">
              <div className="w-24 h-1 bg-[#EDB23A] rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left - Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0B2545] mb-6">
                  Join Our Team
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  We&apos;ve built a team of people who are great at what they do. We treat our customers and each other the right way.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  If that sounds like the kind of place you want to be, we would love to hear from you!
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#0B2545] mb-4">What We Offer</h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#EDB23A] rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-lg">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#0B2545] rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-3">Prefer to reach out directly?</h3>
                <p className="text-white/80 mb-4">Text Caleb or send us an email</p>
                <div className="space-y-2">
                  <a href="tel:9283003606" className="flex items-center gap-2 text-[#EDB23A] font-bold text-lg hover:text-[#C08222] transition-colors">
                    928-300-3606
                  </a>
                  <a href="mailto:miraclemanplumbing@yahoo.com" className="flex items-center gap-2 text-[#EDB23A] font-bold hover:text-[#C08222] transition-colors">
                    miraclemanplumbing@yahoo.com
                  </a>
                </div>
              </div>
            </div>

            {/* Right - Application Form */}
            <div>
              <div className="bg-gray-50 rounded-xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-[#0B2545] mb-2">Apply Now</h3>
                <p className="text-gray-600 mb-6">Fill out the form below and we&apos;ll be in touch.</p>
                <CareersForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
