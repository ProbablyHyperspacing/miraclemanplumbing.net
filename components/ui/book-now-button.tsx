'use client'

interface BookNowButtonProps {
  className?: string
  children: React.ReactNode
}

export function BookNowButton({ className, children }: BookNowButtonProps) {
  return (
    <button
      className={`se-booking-show ${className ?? ''}`}
      type="button"
    >
      {children}
    </button>
  )
}
