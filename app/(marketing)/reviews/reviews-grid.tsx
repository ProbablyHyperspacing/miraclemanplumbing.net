'use client'

import { useState } from 'react'
import { Star, X } from 'lucide-react'

const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + '...'
}

interface Review {
  name: string
  rating: number
  timeAgo: string
  badge?: string
  isNew?: boolean
  review: string
}

interface ReviewsGridProps {
  reviews: Review[]
}

export function ReviewsGrid({ reviews }: ReviewsGridProps) {
  const [selectedReview, setSelectedReview] = useState<number | null>(null)

  return (
    <>
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0B2545] mb-4">
          What Our Customers Say
        </h2>
        <p className="text-xl text-gray-600">
          Real reviews from real customers who experienced our quality service
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-6 h-[350px] flex flex-col cursor-pointer"
            onClick={() => setSelectedReview(index)}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-semibold text-[#0B2545]">{review.name}</h4>
                  {review.badge && (
                    <span className="bg-[#EDB23A] text-white text-xs px-2 py-1 rounded-full">
                      {review.badge}
                    </span>
                  )}
                  {review.isNew && (
                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                      New
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-500 mb-2">
                  {review.timeAgo}
                </p>

                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>

            {/* Review Text */}
            <div className="flex-1">
              <p className="text-gray-700 leading-relaxed text-sm">
                {truncateText(review.review, 180)}
              </p>
              {review.review.length > 180 && (
                <button className="text-[#EDB23A] text-sm font-medium mt-2 hover:underline">
                  Read more
                </button>
              )}
            </div>

            {/* Google Logo */}
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-gradient-to-r from-blue-500 via-red-500 via-yellow-500 to-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">G</span>
                </div>
                <span className="text-xs text-gray-500">Google Review</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedReview !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              {/* Modal Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-xl font-semibold text-[#0B2545]">
                      {reviews[selectedReview].name}
                    </h4>
                    {reviews[selectedReview].badge && (
                      <span className="bg-[#EDB23A] text-white text-sm px-3 py-1 rounded-full">
                        {reviews[selectedReview].badge}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-500 mb-3">
                    {reviews[selectedReview].timeAgo}
                  </p>

                  {/* Star Rating */}
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(reviews[selectedReview].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedReview(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Full Review Text */}
              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed text-base">
                  {reviews[selectedReview].review}
                </p>
              </div>

              {/* Google Logo */}
              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-500 via-red-500 via-yellow-500 to-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">G</span>
                  </div>
                  <span className="text-sm text-gray-500">Google Review</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}