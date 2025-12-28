import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Phone, Calculator } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'

export function CallToActionBar() {
  return (
    <section className="bg-[#EDB23A] py-6 lg:py-12">
      <div className="container mx-auto px-4 lg:px-16">
        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col items-center gap-4">
          <Button
            size="lg"
            asChild
            className="w-full bg-[#0B2545] hover:bg-[#C08222] text-white py-4 text-lg font-semibold rounded-full"
          >
            <Link href={`tel:${SITE_CONFIG.phone}`} className="flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              Call Now: 928-830-3575
            </Link>
          </Button>
          <Button
            size="lg"
            asChild
            variant="outline"
            className="w-full border-2 border-[#0B2545] text-[#0B2545] hover:bg-[#0B2545] hover:text-white py-4 text-lg font-semibold rounded-full"
          >
            <Link href="/contact">Get Free Estimate</Link>
          </Button>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex flex-row items-center justify-center gap-16">
          <div className="flex items-center gap-4 text-[#0B2545]">
            <div className="bg-[#0B2545] rounded-full p-3">
              <Phone className="w-8 h-8 text-[#EDB23A]" />
            </div>
            <div>
              <p className="text-lg font-medium">Need Help Now?</p>
              <Link
                href={`tel:${SITE_CONFIG.phone}`}
                className="text-3xl font-bold hover:text-[#C08222] transition-colors"
              >
                928-830-3575
              </Link>
            </div>
          </div>

          <div className="w-px h-16 bg-[#0B2545]/30"></div>

          <div className="flex items-center gap-4">
            <div className="bg-[#0B2545] rounded-full p-3">
              <Calculator className="w-8 h-8 text-[#EDB23A]" />
            </div>
            <div>
              <p className="text-lg font-medium text-[#0B2545] mb-2">Want a Free Quote?</p>
              <Button
                size="lg"
                asChild
                className="bg-[#0B2545] hover:bg-[#C08222] text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <Link href="/contact">Get Free Estimate</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}