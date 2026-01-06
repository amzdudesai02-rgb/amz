'use client'

import Image from 'next/image'

export default function Logo({ className = '', showTagline = true, size = 'default' }: { className?: string; showTagline?: boolean; size?: 'default' | 'small' | 'large' }) {
  const sizeClasses = {
    default: { width: 180, height: 60 },
    small: { width: 120, height: 40 },
    large: { width: 240, height: 80 }
  }
  
  const taglineSizeClasses = {
    default: 'text-xs md:text-sm',
    small: 'text-xs',
    large: 'text-sm md:text-base'
  }

  const dimensions = sizeClasses[size]

  return (
    <div className={`flex flex-col items-start ${className}`}>
      {/* Logo Image */}
      <div className="relative" style={{ width: dimensions.width, height: dimensions.height }}>
        <Image
          src="/logo.png"
          alt="amzDUDES - Growth, Commitment, Gratitude"
          width={dimensions.width}
          height={dimensions.height}
          priority
          className="object-contain"
          style={{ width: 'auto', height: 'auto' }}
        />
      </div>
      {/* Tagline */}
      {showTagline && (
        <p className={`${taglineSizeClasses[size]} text-gray-400 mt-1.5 font-light tracking-wide`}>
          growth, commitment, gratitude
        </p>
      )}
    </div>
  )
}

