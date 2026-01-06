'use client'

import Image from 'next/image'

export default function Logo({ className = '', showTagline = true, size = 'default' }: { className?: string; showTagline?: boolean; size?: 'default' | 'small' | 'large' }) {
  const sizeClasses = {
    default: { width: 160, height: 50 },
    small: { width: 120, height: 38 },
    large: { width: 200, height: 65 }
  }
  
  const taglineSizeClasses = {
    default: 'text-xs md:text-sm',
    small: 'text-xs',
    large: 'text-sm md:text-base'
  }

  const dimensions = sizeClasses[size]

  return (
    <div className={`flex flex-col items-start ${className}`}>
      {/* Logo Image with fallback */}
      <div className="relative flex items-center" style={{ height: dimensions.height }}>
        <Image
          src="/logo.png"
          alt="amzDUDES"
          width={dimensions.width}
          height={dimensions.height}
          priority
          className="object-contain h-full w-auto"
          style={{ 
            maxWidth: `${dimensions.width}px`,
            height: 'auto',
            display: 'block'
          }}
          onError={(e) => {
            // Fallback to text logo if image fails to load
            const target = e.target as HTMLImageElement
            target.style.display = 'none'
            const fallback = target.nextElementSibling as HTMLElement
            if (fallback) fallback.style.display = 'flex'
          }}
        />
        {/* Fallback text logo if image doesn't exist */}
        <div 
          className="hidden items-center gap-0 leading-none"
          style={{ 
            fontSize: size === 'small' ? '1.5rem' : size === 'large' ? '2rem' : '1.75rem',
            height: dimensions.height
          }}
        >
          <span 
            className="font-bold tracking-tight"
            style={{ color: '#2563eb' }}
          >
            amz
          </span>
          <span 
            className="font-bold tracking-tight ml-0.5"
            style={{
              WebkitTextStroke: '2px #1e3a8a',
              WebkitTextFillColor: 'transparent',
              color: 'transparent',
              letterSpacing: '0.05em'
            }}
          >
            DUDES
          </span>
        </div>
      </div>
      {/* Tagline */}
      {showTagline && (
        <p className={`${taglineSizeClasses[size]} text-gray-400 mt-1 font-light tracking-wide`}>
          growth, commitment, gratitude
        </p>
      )}
    </div>
  )
}

