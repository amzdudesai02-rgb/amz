'use client'

import { useEffect, useState } from 'react'
import ToolCard from '@/components/ToolCard'
import Logo from '@/components/Logo'
import { tools } from '@/lib/tools'
import { Sparkles, ArrowRight, CheckCircle2, Zap, TrendingUp } from 'lucide-react'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const activeTools = tools.filter(tool => tool.status === 'active')
  const comingSoonTools = tools.filter(tool => tool.status === 'coming-soon')

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
      {/* Header */}
      <header className="border-b border-gray-200/80 bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Logo />
            <nav className="hidden md:flex items-center gap-8">
              <a href="#tools" className="text-gray-600 hover:text-primary-600 transition-colors font-medium text-sm">
                Tools
              </a>
              <a href="#about" className="text-gray-600 hover:text-primary-600 transition-colors font-medium text-sm">
                About
              </a>
              <a href="#tools" className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all shadow-md hover:shadow-lg text-sm font-medium">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className={`text-center mb-20 transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Professional Automation Platform
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
            Streamline Your
            <span className="block bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
              Business Operations
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Powerful automation tools designed to help your business work smarter, faster, and more efficiently.
            Everything you need, all in one place.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#tools" className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl text-lg font-semibold transform hover:-translate-y-0.5">
              Explore Tools
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#about" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-700 rounded-xl hover:bg-gray-50 transition-all shadow-md hover:shadow-lg text-lg font-semibold border border-gray-200">
              Learn More
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-primary-100 rounded-xl">
                <TrendingUp className="w-6 h-6 text-primary-600" />
              </div>
            </div>
            <div className="text-4xl font-bold text-primary-600 mb-2">
              {tools.length}
            </div>
            <div className="text-gray-600 font-medium">Total Tools</div>
          </div>
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-green-100 rounded-xl">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <div className="text-4xl font-bold text-green-600 mb-2">
              {activeTools.length}
            </div>
            <div className="text-gray-600 font-medium">Active Tools</div>
          </div>
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-purple-100 rounded-xl">
                <Sparkles className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <div className="text-4xl font-bold text-purple-600 mb-2">
              {comingSoonTools.length}
            </div>
            <div className="text-gray-600 font-medium">Coming Soon</div>
          </div>
        </div>

        {/* Tools Section */}
        <section id="tools" className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Automation Tools
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover powerful tools designed to automate and streamline your business processes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {activeTools.map((tool) => (
              <div 
                key={tool.id}
                className={`transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: mounted ? '0ms' : '0ms' }}
              >
                <ToolCard tool={tool} />
              </div>
            ))}
          </div>
        </section>

        {/* Coming Soon Section */}
        {comingSoonTools.length > 0 && (
          <section className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Coming Soon
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Exciting new tools are on the way to expand your automation capabilities
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {comingSoonTools.map((tool) => (
                <div 
                  key={tool.id}
                  className={`transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: mounted ? '100ms' : '0ms' }}
                >
                  <ToolCard tool={tool} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* About Section */}
        <section id="about" className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-10 md:p-16 shadow-2xl border border-gray-200 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary-100 rounded-lg">
                <Sparkles className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">About amzDUDES Platform</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                  amzDUDES is a comprehensive automation platform designed to help businesses streamline
                  their operations and improve efficiency. Our suite of tools covers everything from
                  reimbursement management to CRM automation, all built with modern technology and
                  user-friendly interfaces.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Each tool is designed to work independently while maintaining consistency in design
                  and user experience. Access any tool directly from this dashboard, or navigate to
                  its dedicated subdomain for focused workflows.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Modern Technology</h4>
                    <p className="text-gray-600 text-sm">Built with the latest frameworks and best practices</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Scalable Architecture</h4>
                    <p className="text-gray-600 text-sm">Designed to grow with your business needs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Professional Design</h4>
                    <p className="text-gray-600 text-sm">Clean, intuitive interfaces for better user experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white/80 backdrop-blur-sm mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="mb-4">
                <Logo showTagline={true} size="default" />
              </div>
              <p className="text-gray-600 text-sm max-w-md mt-2">
                Professional automation platform designed to streamline your business operations
                and improve efficiency.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Platform</h4>
              <ul className="space-y-2">
                <li><a href="#tools" className="text-gray-600 hover:text-primary-600 transition-colors text-sm">Tools</a></li>
                <li><a href="#about" className="text-gray-600 hover:text-primary-600 transition-colors text-sm">About</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary-600 transition-colors text-sm">Features</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-primary-600 transition-colors text-sm">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary-600 transition-colors text-sm">Terms of Service</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary-600 transition-colors text-sm">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <span className="text-gray-600 text-sm mb-4 md:mb-0">
                © 2024 amzDUDES. All rights reserved.
              </span>
              <div className="flex gap-6">
                <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors text-sm">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors text-sm">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

