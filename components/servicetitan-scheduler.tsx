'use client'

import { useEffect } from 'react'
import { trackLead } from '@/lib/ad-pixels'

declare global {
  interface Window {
    ScheduleEngine?: {
      addEventListener: (event: string, listener: () => void) => void
    }
  }
}

export function ServiceTitanScheduler() {
  useEffect(() => {
    // Only inject once
    if (document.getElementById('se-widget-embed')) return

    const s = document.createElement('script')
    s.id = 'se-widget-embed'
    s.src = 'https://embed.scheduler.servicetitan.com/scheduler-v1.js'
    s.setAttribute('data-api-key', 'd6x7vyzymgttqqkzfknobns7')
    s.setAttribute('data-schedulerid', 'sched_nmq8ab4anmna49825sra380q')
    s.defer = true
    // Count a finished online booking as a lead (Meta and ChatGPT ads). The
    // booking happens inside ServiceTitan's iframe; the embed script relays
    // its "BookingBooked" event to the page when the booking is completed.
    s.onload = () => window.ScheduleEngine?.addEventListener('BookingBooked', trackLead)
    document.body.appendChild(s)
  }, [])

  return (
    <button
      className="se-booking-show fixed bottom-6 right-6 bg-[#EDB23A] hover:bg-[#C08222] text-[#0B2545] px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 z-50 flex items-center space-x-2 cursor-pointer"
      type="button"
    >
      Book Now
    </button>
  )
}
