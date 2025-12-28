import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Calendar, User, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Understanding the Benefits of Hydro Jetting for Pipe Cleaning | Miracle Man Plumbing',
  description: 'Learn about hydro jetting benefits for pipe cleaning in Prescott Valley, AZ. Eco-friendly, effective, and safe for all plumbing systems.',
}

export default function HydroJettingBenefitsPage() {
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
              HYDRO JETTING BENEFITS
            </h1>
            <p className="text-xl mt-4 text-white/90">
              Professional Pipe Cleaning Solutions
            </p>
            <div className="mt-8 flex justify-center">
              <div className="w-24 h-1 bg-white/50 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <article className="py-20 bg-white">
        <div className="container mx-auto px-8 md:px-12 lg:px-16">
          <div className="max-w-4xl mx-auto">
            {/* Back to Blog */}
            <Link
              href="/blog"
              className="inline-flex items-center text-[#EDB23A] font-semibold hover:text-[#0B2545] transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to Blog
            </Link>

            {/* Article Header */}
            <header className="mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B2545] mb-6 leading-tight">
                Understanding the Benefits of Hydro Jetting for Pipe Cleaning
              </h1>

              <div className="flex items-center gap-6 text-gray-600 mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>June 27, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span>Miracle Man Plumbing Team</span>
                </div>
              </div>

              <div className="w-full h-1 bg-gradient-to-r from-[#0B2545] to-[#EDB23A] rounded-full mb-8"></div>
            </header>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
              <p className="text-xl leading-relaxed">
                Hydro jetting is a powerful method for cleaning pipes by using highly pressurized water streams to remove stubborn clogs, buildup, and debris. Unlike traditional snaking methods that only punch through blockages, hydro jetting thoroughly scours the interior of the pipe, restoring it to near-original condition. This service is highly effective for both residential and commercial plumbing systems, tackling everything from grease and sludge to invasive tree roots. Hydro jetting offers a deep clean that few other methods can match.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-[#0B2545] mt-12 mb-6">
                How Hydro Jetting Prevents Future Problems
              </h2>
              <p>
                Over time, your pipes can collect layers of grime, soap scum, grease, and mineral deposits that gradually lead to slower drains and frequent clogs. Standard cleaning methods often only provide temporary relief. Hydro jetting goes beyond surface cleaning by completely clearing out buildup and flushing the entire pipe system. As a result, you&apos;ll experience fewer blockages, better water flow, and improved plumbing health. Regular hydro jetting can even help extend the life of your pipes and prevent costly emergency repairs.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-[#0B2545] mt-12 mb-6">
                Safe for Different Types of Plumbing
              </h2>
              <p>
                Hydro jetting is a versatile solution suitable for a variety of plumbing systems. Whether your property is older with delicate pipes or equipped with newer plumbing materials, professional plumbers can adjust the water pressure to suit your system. Skilled technicians ensure that the right level of pressure is used to clean without damaging pipes. From kitchen drains and bathroom lines to sewer systems and commercial drains, hydro jetting is adaptable and highly effective across multiple applications.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-[#0B2545] mt-12 mb-6">
                Eco-Friendly and Chemical-Free Cleaning
              </h2>
              <p>
                Another major advantage of hydro jetting is its environmentally friendly nature. It relies solely on the power of water to clean the pipes, eliminating the need for harsh chemicals that could harm your plumbing and the surrounding environment. Chemical drain cleaners can cause pipe corrosion over time and introduce toxins into water supplies. With hydro jetting, you get an eco-conscious cleaning solution that is safe for your pipes, your property, and the environment.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-[#0B2545] mt-12 mb-6">
                Cost Savings Over Time
              </h2>
              <p>
                While hydro jetting might have a higher upfront cost compared to traditional pipe cleaning methods, it provides significant long-term savings. By thoroughly cleaning your pipes, you reduce the likelihood of major plumbing emergencies, sewer line replacements, and frequent service calls. Homeowners and businesses that invest in regular hydro jetting enjoy improved plumbing performance, fewer disruptions, and reduced repair bills. It&apos;s a smart investment that protects your plumbing and your wallet over the years.
              </p>

              <div className="bg-gradient-to-r from-[#0B2545] to-[#EDB23A] rounded-2xl p-8 text-white mt-12">
                <p className="text-lg leading-relaxed">
                  When you need professional hydro jetting services in Prescott Valley, AZ, Miracle Man Plumbing Inc. is the trusted team to call. With over 20 years of experience, we have the expertise to safely and efficiently clear your pipes, no matter the severity of the blockage. Our team uses the latest hydro jetting technology to ensure your plumbing is thoroughly cleaned and protected. Don&apos;t wait for clogs to cause bigger problems—contact us today to schedule your hydro jetting service and experience the benefits of a cleaner, healthier plumbing system!
                </p>

                <div className="mt-6">
                  <a
                    href="tel:+19288303575"
                    className="bg-white text-[#0B2545] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg inline-flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call (928) 830-3575
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}