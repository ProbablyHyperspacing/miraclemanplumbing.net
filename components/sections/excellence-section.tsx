import Image from 'next/image'

export function ExcellenceSection() {
  return (
    <section className="py-10 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-16">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-start">
          {/* Left side - Content */}
          <div className="lg:h-[500px] flex flex-col justify-center overflow-hidden order-2 lg:order-1">
            <div className="space-y-4 lg:space-y-6">
              <h3 className="text-lg lg:text-2xl font-bold text-[#0B2545] leading-tight text-center lg:text-left nav-font">
                REDEFINING PLUMBING EXCELLENCE WITH <span className="text-[#EDB23A]">UNMATCHED PRECISION</span> IN PRESCOTT VALLEY, ARIZONA
              </h3>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed text-sm lg:text-base mb-3 lg:mb-4 text-center lg:text-left">
                  Miracle Man Plumbing Inc. takes pride in providing a thorough spectrum of plumbing services carefully designed to fit the particular and changing requirements of residential and commercial properties in Prescott Valley, Arizona, and the surrounding areas.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm lg:text-base mb-3 lg:mb-4 text-center lg:text-left">
                  Our goal has always been to provide expert plumbing solutions based on integrity, accuracy, and unrivaled expertise. Being a fully qualified and authorized plumbing business, we are ready to tackle various difficulties, from emergency leak repairs and regular maintenance to sophisticated system installs and complicated diagnostics.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm lg:text-base text-center lg:text-left">
                  Every property we handle gains from tailored attention supported by years of hands-on knowledge and a thorough awareness of current plumbing technologies. We emphasize delivering long-lasting, high-performance outcomes that provide peace of mind rather than just solving issues.
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="flex justify-center h-[250px] lg:h-[500px] order-1 lg:order-2">
            <div className="relative">
              <Image
                src="/images/MMPworking.jpg.webp"
                alt="Miracle Man Plumbing Professional at Work"
                width={500}
                height={600}
                className="rounded-xl shadow-2xl object-cover h-[250px] lg:h-[500px] w-auto"
                priority
              />
              {/* Decorative elements - hidden on mobile */}
              <div className="hidden lg:block absolute -bottom-6 -left-6 w-24 h-24 bg-[#EDB23A] rounded-full opacity-20 -z-10"></div>
              <div className="hidden lg:block absolute -top-6 -right-6 w-16 h-16 bg-[#0B2545] rounded-full opacity-20 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}