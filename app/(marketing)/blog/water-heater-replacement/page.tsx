import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Calendar, User, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How to Tell When It\'s Time to Replace Your Water Heater | Miracle Man Plumbing',
  description: 'Learn the key signs that indicate it\'s time to replace your water heater in Prescott Valley, AZ. Expert advice from Miracle Man Plumbing.',
}

export default function WaterHeaterReplacementPage() {
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
              WATER HEATER REPLACEMENT
            </h1>
            <p className="text-xl mt-4 text-white/90">
              Know When It's Time for a New Unit
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
                How to Tell When It's Time to Replace Your Water Heater
              </h1>

              <div className="flex items-center gap-6 text-gray-600 mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>May 12, 2025</span>
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
                Your water heater works hard every day, providing hot water for showers, cleaning, and cooking. But like all appliances, it doesn't last forever. Knowing when it's time to replace your water heater can save you from unexpected breakdowns, costly repairs, and water damage. Here are the key signs to watch for so you can plan ahead and avoid the inconvenience of a failing unit.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-[#0B2545] mt-12 mb-6">
                1. Age of the Water Heater
              </h2>
              <p>
                One of the easiest ways to know if it's time for a replacement is to check the age of your water heater. Most traditional tank water heaters last around 8–12 years, while tankless models can last longer with proper maintenance. If your water heater is over a decade old, it's wise to start considering a new one, even if it's still working. Older units are more prone to leaks, inefficiency, and sudden failures.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-[#0B2545] mt-12 mb-6">
                2. Rusty Water or Rust on the Heater
              </h2>
              <p>
                If you notice rusty water coming from your hot water taps, it could be a sign that your water heater is corroding from the inside. Over time, corrosion can eat through the metal, causing leaks or a complete tank failure. Similarly, visible rust on the outside of the heater is a red flag. In either case, it's often more cost-effective to replace the unit rather than risk a major leak or breakdown.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-[#0B2545] mt-12 mb-6">
                3. Frequent Repairs and Strange Noises
              </h2>
              <p>
                Are you calling a plumber for water heater repairs more often? Frequent repairs are a clear sign that your unit is nearing the end of its life. Additionally, if your water heater is making strange noises, such as rumbling, banging, or popping, it could mean that sediment has built up at the bottom of the tank. This buildup can harden over time, making the heater less efficient and more prone to damage.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-[#0B2545] mt-12 mb-6">
                4. Inconsistent or Insufficient Hot Water
              </h2>
              <p>
                Nothing is more frustrating than running out of hot water halfway through a shower. If you notice that your water isn't staying hot as long as it used to, or if the water temperature fluctuates wildly, it's a strong indication that your water heater is struggling to keep up. Aging elements or a failing thermostat could be to blame, but in many cases, a replacement is the best solution to restore consistent performance.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-[#0B2545] mt-12 mb-6">
                5. Visible Leaks or Water Pooling Around the Heater
              </h2>
              <p>
                A small leak might not seem like a big deal at first, but it can quickly turn into a serious problem. Water pooling around your heater usually means there's a crack in the tank, which is irreversible. Once the tank itself begins leaking, it's only a matter of time before a full rupture occurs. Replacing the water heater immediately can help you avoid costly water damage to your home.
              </p>

              <div className="bg-gradient-to-r from-[#0B2545] to-[#EDB23A] rounded-2xl p-8 text-white mt-12">
                <p className="text-lg leading-relaxed">
                  If you're experiencing any of these signs, it's time to call the experts. Miracle Man Plumbing Inc. has been providing trusted plumbing services in Prescott Valley, AZ, for over 20 years. Our skilled team can inspect your system, recommend the best solution, and professionally install a new, efficient water heater tailored to your needs. Don't wait for a total breakdown—contact us today to schedule your water heater inspection and replacement!
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