'use client'

import { Tool } from '@/lib/tools'
import { 
  Receipt, 
  Users, 
  FileText, 
  Zap, 
  ExternalLink,
  Clock
} from 'lucide-react'

const iconMap = {
  Receipt,
  Users,
  FileText,
  Zap,
}

interface ToolCardProps {
  tool: Tool
}

export default function ToolCard({ tool }: ToolCardProps) {
  const Icon = iconMap[tool.icon as keyof typeof iconMap] || Zap

  const handleClick = () => {
    if (tool.status === 'active') {
      window.location.href = `https://${tool.subdomain}`
    }
  }

  return (
    <div
      onClick={handleClick}
      className={`
        group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl 
        transition-all duration-300 cursor-pointer overflow-hidden
        border border-gray-200 hover:border-primary-300
        ${tool.status === 'active' ? 'hover:scale-[1.02] hover:-translate-y-1' : 'opacity-75 cursor-not-allowed'}
      `}
    >
      {/* Status Badge */}
      {tool.status === 'coming-soon' && (
        <div className="absolute top-5 right-5 z-10">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full shadow-sm">
            <Clock className="w-3.5 h-3.5" />
            Coming Soon
          </span>
        </div>
      )}

      {/* Color Accent Bar */}
      <div className={`h-1.5 ${tool.color} group-hover:h-2 transition-all`} />

      {/* Content */}
      <div className="p-8">
        {/* Icon */}
        <div className={`inline-flex p-4 rounded-xl mb-6 ${tool.color.replace('-500', '-100')} group-hover:scale-110 transition-transform duration-300`}>
          <Icon className={`w-7 h-7 ${tool.color.replace('bg-', 'text-')}`} />
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
          {tool.name}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-base mb-6 leading-relaxed line-clamp-2">
          {tool.description}
        </p>

        {/* Features */}
        <div className="space-y-3 mb-6">
          {tool.features.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className={`w-2 h-2 rounded-full ${tool.color} flex-shrink-0`} />
              <span className="text-sm text-gray-600 font-medium">{feature}</span>
            </div>
          ))}
          {tool.features.length > 3 && (
            <div className="text-xs text-gray-400 font-medium ml-5">
              +{tool.features.length - 3} more features
            </div>
          )}
        </div>

        {/* Action */}
        <div className="flex items-center justify-between pt-6 border-t border-gray-100">
          <span className={`text-base font-semibold ${
            tool.status === 'active' 
              ? 'text-primary-600 group-hover:text-primary-700' 
              : 'text-gray-400'
          }`}>
            {tool.status === 'active' ? 'Open Tool' : 'Coming Soon'}
          </span>
          {tool.status === 'active' && (
            <div className="flex items-center gap-2 text-primary-600 group-hover:gap-3 transition-all">
              <span className="text-sm font-medium">Visit</span>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          )}
        </div>
      </div>

      {/* Hover Effect Overlay */}
      {tool.status === 'active' && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 via-primary-500/0 to-primary-500/0 group-hover:from-primary-500/5 group-hover:via-primary-500/3 group-hover:to-primary-500/10 transition-all duration-300 pointer-events-none rounded-2xl" />
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/0 group-hover:bg-primary-500/10 rounded-full blur-2xl transition-all duration-300 pointer-events-none" />
        </>
      )}
    </div>
  )
}

