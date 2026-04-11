'use client'

import { useEffect } from 'react'

export function ServiceTitanScheduler() {
  useEffect(() => {
    // Only inject once
    if (document.getElementById('se-widget-embed')) return

    const s = document.createElement('script')
    s.id = 'se-widget-embed'
    s.src = 'https://embed.scheduler.servicetitan.com/scheduler-v1.js'
    s.setAttribute('data-api-key', 'd6x7vyzymgttqqkzfknobns7')
    s.setAttribute('data-schedulerid', 'sched_nmq8ab4annna49825sra380q')
    s.defer = true
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
