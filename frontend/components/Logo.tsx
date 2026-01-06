'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Logo({ className = '', showTagline = true, size = 'default' }: { className?: string; showTagline?: boolean; size?: 'default' | 'small' | 'large' }) {
  const [imageError, setImageError] = useState(false)
  
  const sizeClasses = {
    default: { 
      logoWidth: 140, 
      logoHeight: 45,
      fontSize: '1.5rem',
      taglineSize: 'text-xs md:text-sm'
    },
    small: { 
      logoWidth: 110, 
      logoHeight: 35,
      fontSize: '1.25rem',
      taglineSize: 'text-xs'
    },
    large: { 
      logoWidth: 180, 
      logoHeight: 58,
      fontSize: '1.875rem',
      taglineSize: 'text-sm md:text-base'
    }
  }
  
  const dimensions = sizeClasses[size]

  return (
    <div className={`flex flex-col items-start ${className}`}>
      {/* Logo Container */}
      <div className="relative flex items-center" style={{ height: `${dimensions.logoHeight}px`, minHeight: `${dimensions.logoHeight}px` }}>
        {!imageError ? (
          <Image
            src="/logo.png"
            alt="amzDUDES"
            width={dimensions.logoWidth}
            height={dimensions.logoHeight}
            priority
            className="object-contain h-full w-auto"
            style={{ 
              maxWidth: `${dimensions.logoWidth}px`,
              height: 'auto',
              display: 'block'
            }}
            onError={() => setImageError(true)}
          />
        ) : (
          /* Fallback text logo if image doesn't exist */
          <div 
            className="flex items-center gap-0 leading-none"
            style={{ 
              fontSize: dimensions.fontSize,
              height: `${dimensions.logoHeight}px`,
              lineHeight: 1
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
        )}
      </div>
      {/* Tagline */}
      {showTagline && (
        <p className={`${dimensions.taglineSize} text-gray-400 mt-1.5 font-light tracking-wide`}>
          growth, commitment, gratitude
        </p>
      )}
    </div>
  )
}
