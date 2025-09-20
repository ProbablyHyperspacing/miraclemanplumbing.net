import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Phone, Calculator } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'

export function CallToActionBar() {
  return (
    <section className="bg-gradient-to-r from-[#1d588d] via-[#1e60a0] to-[#1d588d] py-12">
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          <div className="flex items-center gap-4 text-white">
            <div className="bg-white/20 rounded-full p-3">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <div>
              <p className="text-lg font-medium opacity-90">Need Help Now?</p>
              <Link 
                href={`tel:${SITE_CONFIG.phone}`}
                className="text-2xl md:text-3xl font-bold hover:text-[#28b8e9] transition-colors"
              >
                928-830-3575
              </Link>
            </div>
          </div>
          
          <div className="hidden lg:block w-px h-16 bg-white/30"></div>
          
          <div className="flex items-center gap-4">
            <div className="bg-white/20 rounded-full p-3">
              <Calculator className="w-8 h-8 text-white" />
            </div>
            <div className="text-center lg:text-left">
              <p className="text-lg font-medium text-white/90 mb-2">Want a Free Quote?</p>
              <Button 
                size="lg"
                asChild
                className="bg-[#28b8e9] hover:bg-[#1fa3d1] text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
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