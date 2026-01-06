'use client'

export default function Logo({ className = '', showTagline = true, size = 'default' }: { className?: string; showTagline?: boolean; size?: 'default' | 'small' | 'large' }) {
  const sizeClasses = {
    default: 'text-3xl md:text-4xl',
    small: 'text-2xl md:text-3xl',
    large: 'text-4xl md:text-5xl'
  }
  
  const taglineSizeClasses = {
    default: 'text-xs md:text-sm',
    small: 'text-xs',
    large: 'text-sm md:text-base'
  }

  return (
    <div className={`flex flex-col items-start ${className}`}>
      {/* Main Logo */}
      <div className={`flex items-center gap-0 leading-none ${sizeClasses[size]}`}>
        {/* "amz" part - solid vibrant blue */}
        <span 
          className="font-bold tracking-tight relative"
          style={{ color: '#2563eb' }} // vibrant blue-600
        >
          <span className="relative z-10">amz</span>
          {/* Stylized 'a' with arrow effect */}
          <span 
            className="absolute left-0 bottom-0 w-2 h-2 border-l-2 border-b-2 border-blue-600 transform rotate-45 -translate-x-0.5 translate-y-0.5 opacity-0 md:opacity-100"
            style={{ borderColor: '#2563eb' }}
          ></span>
        </span>
        {/* "DUDES" part - outline style with darker indigo blue */}
        <span 
          className="font-bold tracking-tight relative ml-0.5"
          style={{
            WebkitTextStroke: '2px #1e3a8a', // darker indigo blue-800
            WebkitTextFillColor: 'transparent',
            color: 'transparent',
            letterSpacing: '0.05em'
          }}
        >
          DUDES
        </span>
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

