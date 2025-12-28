import Image from 'next/image'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Gallery | Miracle Man Plumbing - Our Work in Prescott Valley, AZ',
  description: 'View our portfolio of professional plumbing work in Prescott Valley, Arizona. See examples of our quality residential and commercial plumbing services.',
}

// Simplified gallery images list - focusing on basic IMG files first
const galleryImages = [
  'IMG_0447-1920w.jpg',
  'IMG_0808-1920w.jpg',
  'IMG_0809-1920w.jpg',
  'IMG_0810-1920w.jpg',
  'IMG_1142-1920w.jpg',
  'IMG_1980-1920w.jpg',
  'IMG_2205-1920w.jpg',
  'IMG_3072-1920w.jpg',
  'IMG_3735-1920w.jpg',
  'IMG_6198-1920w.jpg',
  'IMG_6280-1920w.jpg',
  'IMG_6598-1920w.jpg',
  'IMG_7149-1920w.jpg',
  'IMG_7217-1920w.jpg',
  'IMG_7218-1920w.jpg',
  'IMG_7238-1920w.jpg',
  'IMG_7437-1920w.jpg',
  'IMG_7581-1920w.jpg',
  'IMG_7601-1920w.jpg',
  'IMG_7604-1920w.jpg',
  'IMG_7683-1920w.jpg',
  'IMG_7685-1920w.jpg',
  'IMG_7736-1920w.jpg',
  'IMG_7843-1920w.jpg',
  'IMG_7991-1920w.jpg',
  'IMG_8284-1920w.jpg',
  'IMG_8285-1920w.jpg',
  'IMG_8293-1920w.jpg',
  'IMG_8400-1920w.jpg',
  'IMG_8401-1920w.jpg',
  'IMG_8506-1920w.jpg',
  'IMG_8519-1920w.jpg',
  'IMG_8521-1920w.jpg',
  'IMG_8548-1920w.jpg',
  'IMG_8560-1920w.jpg',
  'IMG_8580-1920w.jpg',
  'IMG_8652-1920w.jpg',
  'IMG_8710-1920w.jpg',
  'IMG_8761-1920w.jpg',
  'IMG_8764-1920w.jpg',
  'IMG_9051-1920w.jpg',
  'IMG_9052-1920w.jpg',
  'IMG_9053-1920w.jpg',
  'IMG_9054-1920w.jpg',
  'IMG_9055-1920w.jpg',
  'IMG_9056-1920w.jpg',
  'IMG_9057-1920w.jpg',
  'IMG_9060-1920w.jpg',
  'IMG_9061-1920w.jpg',
  'IMG_9062-1920w.jpg',
  'IMG_9063-1920w.jpg',
  'IMG_9064-1920w.jpg',
  'IMG_9065-1920w.jpg',
  'IMG_9066-1920w.jpg',
  'IMG_9067-1920w.jpg',
  'IMG_9068-1920w.jpg',
  'IMG_9070-1920w.jpg',
  'IMG_9072-1920w.jpg',
  'IMG_9073-1920w.jpg',
  'IMG_9074-1920w.jpg',
  'IMG_9075-1920w.jpg',
  'IMG_9076-1920w.jpg',
  'IMG_9077-1920w.jpg',
  'IMG_9078-1920w.jpg',
  'IMG_9079-1920w.jpg',
  'IMG_9080-1920w.jpg',
  'IMG_9081-1920w.jpg',
  'IMG_9082-1920w.jpg',
  'IMG_9083-1920w.jpg',
  'IMG_9469-1920w.jpg',
  '297381626_452721796861742_505291047771519364_n-1920w.jpg',
  '38425806_1793291934059785_1793571251818594304_n-1920w.jpg',
  '465036585_8590444007677843_3719807791367182706_n-1920w.jpg',
  '2AF29737-EBA1-4ED0-96B7-2ED302AB1A0C-1920w.jpeg',
  '4076CC5E-50B0-41FD-9689-EFDAAFE9CCF7-1920w.jpeg',
  'ECBCC9A8-46A2-4792-97EC-330420D1A25E-1920w.jpeg',
  'EE055AAB-92CE-4627-9F1F-8E25DBC5DFA6-1920w.jpeg',
  'F058704F-4831-4778-8AF9-6B6BB2F7FD8E-1920w.jpeg'
]

export default function GalleryPage() {
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
              OUR WORK GALLERY
            </h1>
            <p className="text-xl mt-4 text-white/90">
              See examples of our professional plumbing services in Prescott Valley, Arizona
            </p>
            <div className="mt-8 flex justify-center">
              <div className="w-24 h-1 bg-white/50 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-8 md:px-12 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B2545] mb-4">
              Quality Plumbing Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse through our portfolio of completed plumbing projects. From residential repairs to commercial installations,
              see the quality and craftsmanship that Miracle Man Plumbing brings to every job.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white"
              >
                <div className="relative aspect-square">
                  <Image
                    src={`/gallery-images/${image}`}
                    alt={`Plumbing work example ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium">Professional Plumbing Work</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8 md:px-12 lg:px-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B2545] mb-4">
              Ready for Quality Plumbing Service?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact Miracle Man Plumbing today for professional, reliable plumbing services in Prescott Valley and surrounding areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-[#0B2545] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#091B36] transition-colors shadow-lg"
              >
                Get Free Estimate
              </Link>
              <a
                href="tel:+19282777663"
                className="border-2 border-[#0B2545] text-[#0B2545] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#0B2545] hover:text-white transition-colors"
              >
                Call (928) 277-7663
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}