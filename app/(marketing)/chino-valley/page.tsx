import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Plumbing Services in Chino Valley, AZ | Miracle Man Plumbing',
  description: 'Professional plumbing services in Chino Valley, Arizona. Emergency repairs, installations, and maintenance. Fast, reliable service.',
}

export default function ChinoValleyPage() {
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
              CHINO VALLEY, AZ
            </h1>
            <p className="text-xl mt-4 text-white/90">
              Professional Plumbing Services
            </p>
            <div className="mt-8 flex justify-center">
              <div className="w-24 h-1 bg-white/50 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-8 md:px-12 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B2545] mb-8 text-center">
              Residential & Commercial Plumbing Services in Chino Valley, AZ
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                To ensure a smooth, safe, and efficient work and living ambiance in your workplace and home; you need a robust plumbing solution. Without it, your daily operations can be interrupted in many ways. Plumbing does not only mean installing a tap in your kitchen or repairing a fixture in the bathroom. Residential and commercial plumbing services in Chino Valley, AZ, ensure a dependable infrastructure where you can enjoy your commercial activities of daily household chores. On the other hand, a faulty plumbing system can do the opposite. It can create different types of hazards for you, your family, and workers. Your daily business operations and household chores can be interrupted constantly.
              </p>

              <p>
                This is why you should look for a reliable and professional plumbing company that has experience in handling both commercial and residential plumbing requirements. The aim of this hiring should be getting their assistance for installing, repairing, replacing, and maintaining your plumbing system whenever you need it the most. These experts are known for delivering world-class emergency plumbing solutions to ensure your mental peace and reduce the risks of plumbing malfunction.
              </p>

              <p>
                Commercial plumbing is typically more complex than the residential plumbing system. However, these experts have the knowledge, training, and tools to handle both these sectors with equal dedication and efficiency. They know about the right equipment to be used in commercial and residential plumbing systems to ensure seamless installation and quick repairs.
              </p>

              <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-[#EDB23A] mt-8">
                <p className="text-lg font-medium text-[#0B2545]">
                  Miracle Man Plumbing Inc. is your most trusted partner in residential and commercial plumbing services in Chino Valley, AZ. With more than 20 years of experience, we specialize in both residential and commercial plumbing solutions. Our team is ready to deliver 24/7 emergency services. We are your most reliable local plumber with the finest customer care and transparent pricing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Chino Valley Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B2545] mb-6">
                About - Chino Valley, AZ
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Chino Valley is a town located in Yavapai County, in the central highlands of Arizona. Chino Valley offers a rural, small-town lifestyle. Residents enjoy a close-knit community with a friendly atmosphere. The town has a history rooted in agriculture, which continues to influence its culture and economy. Visitors can explore Granite Creek Vineyards, an organic vineyard offering wine tastings in a picturesque setting. Establishments like Lucy&apos;s Bar & Grill provide a taste of local cuisine and hospitality. The area is ideal for off-roading, hiking, and exploring the natural beauty of the high desert.
                </p>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/chino.jpeg"
                  alt="Chino Valley, Arizona landscape and community"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-8 md:px-12 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B2545] mb-4">
              Our Residential & Commercial Plumbing Services in Chino Valley, AZ
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {[
                  'Plumbing Services',
                  'Residential Plumbing',
                  'Commercial Plumbing',
                  'Drain Cleaning',
                  'Water Heater Repair & Installation',
                  'Hydro Jetting',
                  'Toilet Repair & Replacement',
                  'Faucet & Fixture Repair',
                  'Leak Detection & Repair',
                  'Garbage Disposal Repair & Replacement',
                  'Sewer Line Inspection & Repair',
                  'Pipe Repair & Repiping',
                  'Water Filtration System Installation',
                  'Water Softener Installation & Maintenance',
                  'Emergency Plumbing Services',
                  'Shower & Tub Plumbing Services',
                  'Main Water Line Services'
                ].map((service, index) => (
                  <div key={index} className="flex items-center py-3 border-b border-gray-100 last:border-b-0">
                    <div className="bg-[#EDB23A] rounded-full w-3 h-3 mr-4 flex-shrink-0"></div>
                    <span className="text-[#0B2545] font-medium text-lg">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8 md:px-12 lg:px-16">
          <div className="bg-gradient-to-r from-[#0B2545] to-[#EDB23A] rounded-2xl shadow-xl p-8 md:p-12 text-white">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Hire Us! Best and Top Rated Residential & Commercial Plumbing Services in Chino Valley, AZ
              </h2>

              <div className="max-w-4xl mx-auto mb-8">
                <p className="text-lg text-white/90 leading-relaxed">
                  Miracle Man Plumbing Inc. offers a wide range of plumbing solutions at the most reasonable price. If you need the best residential and commercial plumbing services in Chino Valley, AZ; we are here with a long list. From drain cleaning and water heater repair to leak detection and repair and water filter system installation – our experts are ready to execute different types of jobs according to your needs and budget. Give us a call to get more details.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+19288303575"
                  className="bg-white text-[#0B2545] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (928) 830-3575
                </a>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#0B2545] transition-colors inline-flex items-center justify-center"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Happy Customers Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-8 md:px-12 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B2545] mb-4">
              HAPPY CUSTOMERS!
            </h2>
            <p className="text-xl text-gray-600">
              What our customers say
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                rating: 5,
                text: "We had a major problem with our septic tank and Miracle Man personel handled this major excavation and repair in a very timely and fair way. Personnel were hard working, courteous and non-stop. Cost was extremely reasonable and I would not hesitate to call them again. I my opinion Miracle Man plumbing is the best in the state.",
                author: "Ray P."
              },
              {
                rating: 5,
                text: "A copper pipe burst in the crawl space above my ceiling. Caleb and his assistant stayed late on Friday evening to get it repaired. It was a very tight crawlspace. I think that most plumbers would have cut a hole in my ceiling, but not these guys. I am so appreciative of the high level of service and dedication. Above and beyond!",
                author: "Robert O."
              },
              {
                rating: 5,
                text: "My tub was bubbling and not draining properly. I called and got an appointment right away. Caleb and Michael came out, had to remove my toilet and run a snake through my main sewage line. They were very knowledgeable, fast and professional. Highly recommend",
                author: "Volkmar S."
              },
              {
                rating: 5,
                text: "I've had some issues with my garbage disposal and a sink leak. I request maintenance through my rental company, but they seem to always come in a timely manner and are very kind, respectful, and communicative. Most recently had Caleb and Michael come help, and they did a great job!",
                author: "Emma E."
              }
            ].map((review, index) => (
              <div key={index} className="relative bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="absolute top-4 right-4">
                  <svg className="w-8 h-8 text-[#EDB23A] opacity-20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="text-[#0B2545] font-bold text-lg">
                  — {review.author}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left side - Contact Form */}
            <div className="space-y-6">
              <div className="mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-[#0B2545] mb-4">
                  Get Your Free Estimate
                </h2>
                <p className="text-xl text-gray-600">
                  Contact us today for professional plumbing services in Chino Valley, AZ
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B2545] focus:border-transparent transition-colors bg-white text-[#0B2545]"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B2545] focus:border-transparent transition-colors bg-white text-[#0B2545]"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B2545] focus:border-transparent transition-colors bg-white text-[#0B2545]"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B2545] focus:border-transparent transition-colors bg-white text-[#0B2545]"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B2545] focus:border-transparent transition-colors bg-white text-[#0B2545]"
                  >
                    <option value="">Select a service</option>
                    <option value="emergency">Emergency Repair</option>
                    <option value="installation">Installation</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="drain-cleaning">Drain Cleaning</option>
                    <option value="backflow">Backflow Prevention & Testing</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B2545] focus:border-transparent transition-colors resize-vertical bg-white text-[#0B2545]"
                    placeholder="Please describe your plumbing needs or any questions you have..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0B2545] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#091B36] transition-colors shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Right side - Map */}
            <div className="space-y-6">
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#0B2545] mb-4">
                  Our Service Area
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-[#0B2545]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Prescott Valley, AZ & surrounding areas
                  </p>
                  <p className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-[#0B2545]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    (928) 830-3575
                  </p>
                  <p className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-[#0B2545]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    24/7 Emergency Service Available
                  </p>
                </div>
              </div>

              {/* Map Container */}
              <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg h-[450px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52668.24429313935!2d-112.355577!3d34.610587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872d48b8a92b31dd%3A0x4b8b8b8b8b8b8b8b!2sPrescott%20Valley%2C%20AZ!5e0!3m2!1sen!2sus!4v1642684937000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Miracle Man Plumbing Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}