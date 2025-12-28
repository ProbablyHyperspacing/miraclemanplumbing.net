'use client'

import { Star, Shield, CheckCircle, Clock } from 'lucide-react'

const badges = [
  {
    icon: Star,
    title: "5-Star Rated",
    subtitle: "70+ Five-Star Reviews"
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    subtitle: "ROC# 206195 & 232054"
  },
  {
    icon: CheckCircle,
    title: "Satisfaction Guaranteed",
    subtitle: "Quality Workmanship"
  },
  {
    icon: Clock,
    title: "24/7 Service",
    subtitle: "Emergency Available"
  }
]

export function TrustBadges() {
  return (
    <section className="lg:hidden bg-white py-6 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-4 gap-2">
          {badges.map((badge, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <badge.icon className="w-6 h-6 text-[#0B2545] mb-1" strokeWidth={1.5} />
              <p className="text-xs font-bold text-[#0B2545] leading-tight">{badge.title}</p>
              <p className="text-[10px] text-gray-500 leading-tight">{badge.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
