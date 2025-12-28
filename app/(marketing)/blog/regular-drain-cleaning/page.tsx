import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Calendar, User, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'The Importance of Regular Drain Cleaning for Your Home | Miracle Man Plumbing',
  description: 'Learn why regular drain cleaning is essential for your Prescott Valley home. Prevent clogs, odors, and costly repairs with professional maintenance.',
}

export default function RegularDrainCleaningPage() {
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
              DRAIN CLEANING IMPORTANCE
            </h1>
            <p className="text-xl mt-4 text-white/90">
              Essential Home Maintenance
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
                The Importance of Regular Drain Cleaning for Your Home
              </h1>

              <div className="flex items-center gap-6 text-gray-600 mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>April 30, 2025</span>
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
                Keeping your home's drains clean is one of the most essential yet overlooked parts of maintaining a healthy plumbing system. Over time, debris like grease, soap, food particles, and hair can build up in your pipes, leading to slow drains, unpleasant odors, and even severe blockages. Regular drain cleaning not only helps you avoid these issues but also extends the life of your plumbing, saving you from costly repairs in the future.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-[#0B2545] mt-12 mb-6">
                The Dangers of Neglecting Drain Maintenance
              </h2>
              <p>
                When drains are neglected, the buildup inside pipes becomes harder and harder to remove. Minor clogs can turn into full blockages, causing backups that may damage your home's floors and walls. In some cases, standing water can create a breeding ground for bacteria and mold, which can pose serious health risks for you and your family. Preventative maintenance like routine drain cleaning ensures that your plumbing system stays in good condition and your home remains safe and hygienic.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-[#0B2545] mt-12 mb-6">
                Benefits of Regular Drain Cleaning
              </h2>
              <p>
                One of the major benefits of regular drain cleaning is improved water flow. Clean pipes allow water to move efficiently through your plumbing system without obstruction. This means faster draining sinks, tubs, and toilets, reducing the chance of water pooling or overflowing. It also prevents unnecessary strain on your pipes, minimizing the risk of leaks or bursts that could lead to expensive water damage repairs.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-[#0B2545] mt-12 mb-6">
                Eliminating Odors and Pests
              </h2>
              <p>
                In addition to functional benefits, regular drain cleaning can also eliminate bad odors that often originate from clogged pipes. Food scraps, grease, and other debris can rot and produce foul smells, especially in kitchen drains. Regularly cleaning out the buildup keeps your home smelling fresh and clean. It also deters pests like fruit flies and cockroaches that are attracted to the organic material lingering in dirty drains.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-[#0B2545] mt-12 mb-6">
                Long-Term Savings and Protection
              </h2>
              <p>
                Homeowners should also consider the long-term financial benefits of maintaining clean drains. Ignoring small clogs can lead to major plumbing emergencies that require expensive interventions, such as pipe replacements or extensive water damage restoration. A simple, affordable maintenance routine can help you avoid these costly problems and extend the lifespan of your entire plumbing system. It's a smart investment in the overall value and comfort of your home.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-[#0B2545] mt-12 mb-6">
                Professional Drain Cleaning vs. DIY Solutions
              </h2>
              <p>
                There are many ways to clean your drains, from natural remedies like baking soda and vinegar to professional hydro-jetting services. While DIY methods can offer temporary relief, they often don't address the root of the problem. Professional plumbers use specialized tools to thoroughly remove buildup without damaging your pipes. They can also spot potential issues early, helping you fix them before they turn into major problems.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-[#0B2545] mt-12 mb-6">
                How Often Should You Clean Your Drains?
              </h2>
              <p>
                Many experts recommend scheduling professional drain cleaning at least once a year. However, households with heavy usage, such as large families or homes with frequent guests, might benefit from more frequent cleanings. Additionally, if you notice warning signs like slow drains, frequent clogs, or unpleasant smells, it's a clear indication that you should call a professional as soon as possible.
              </p>

              <div className="bg-gradient-to-r from-[#0B2545] to-[#EDB23A] rounded-2xl p-8 text-white mt-12">
                <p className="text-lg leading-relaxed">
                  Miracle Man Plumbing Inc. has proudly served homeowners in Prescott Valley, AZ, for over 20 years with reliable and professional plumbing solutions. Don't wait for a major plumbing issue to disrupt your home—schedule your regular drain cleaning service today and experience the peace of mind that comes from a properly maintained plumbing system. Call us now to keep your drains flowing freely!
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