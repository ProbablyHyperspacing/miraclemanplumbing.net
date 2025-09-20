import Image from 'next/image'

export function ExcellenceSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Content */}
          <div className="h-[500px] flex flex-col justify-center overflow-hidden">
            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-bold text-[#1d588d] leading-tight">
                REDEFINING PLUMBING EXCELLENCE WITH <span className="text-[#28b8e9]">UNMATCHED PRECISION</span> IN PRESCOTT VALLEY, ARIZONA
              </h3>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed text-base mb-4">
                  Miracle Man Plumbing Inc. takes pride in providing a thorough spectrum of plumbing services carefully designed to fit the particular and changing requirements of residential and commercial properties in Prescott Valley, Arizona, and the surrounding areas.
                </p>
                <p className="text-gray-700 leading-relaxed text-base mb-4">
                  Our goal has always been to provide expert plumbing solutions based on integrity, accuracy, and unrivaled expertise. Being a fully qualified and authorized plumbing business, we are ready to tackle various difficulties, from emergency leak repairs and regular maintenance to sophisticated system installs and complicated diagnostics.
                </p>
                <p className="text-gray-700 leading-relaxed text-base">
                  Every property we handle gains from tailored attention supported by years of hands-on knowledge and a thorough awareness of current plumbing technologies. We emphasize delivering long-lasting, high-performance outcomes that provide peace of mind rather than just solving issues.
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="flex justify-center lg:justify-end h-[500px]">
            <div className="relative">
              <Image
                src="/images/MMPworking.jpg.webp"
                alt="Miracle Man Plumbing Professional at Work"
                width={500}
                height={600}
                className="rounded-xl shadow-2xl object-cover h-[500px] w-auto"
                priority
              />
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#28b8e9] rounded-full opacity-20 -z-10"></div>
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-[#1d588d] rounded-full opacity-20 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}