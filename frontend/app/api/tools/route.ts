import { NextResponse } from 'next/server'

export interface Tool {
  id: string
  name: string
  description: string
  subdomain: string
  status: 'active' | 'coming-soon'
  features: string[]
  icon: string
  color: string
}

export interface ToolsResponse {
  tools: Tool[]
  total: number
  active: number
  coming_soon: number
}

// Fallback to local data if API is not available
const LOCAL_TOOLS: Tool[] = [
  {
    id: 'reimbursement',
    name: 'Reimbursement Automation',
    description: 'Streamline and automate your reimbursement processes with intelligent workflow management.',
    subdomain: 'reimbursement.amzdudes.io',
    status: 'active',
    features: [
      'Automated expense tracking',
      'Smart approval workflows',
      'Real-time notifications',
      'Comprehensive reporting',
    ],
    icon: 'Receipt',
    color: 'bg-blue-500',
  },
  {
    id: 'crm',
    name: 'CRM Automation',
    description: 'Powerful customer relationship management with automated workflows and intelligent insights.',
    subdomain: 'crm.amzdudes.io',
    status: 'active',
    features: [
      'Contact management',
      'Sales pipeline automation',
      'Email integration',
      'Analytics dashboard',
    ],
    icon: 'Users',
    color: 'bg-green-500',
  },
  {
    id: 'sop-hub',
    name: 'SOP Hub',
    description: 'Centralized hub for Standard Operating Procedures with version control and collaboration.',
    subdomain: 'sop.amzdudes.io',
    status: 'coming-soon',
    features: [
      'Document management',
      'Version control',
      'Team collaboration',
      'Compliance tracking',
    ],
    icon: 'FileText',
    color: 'bg-purple-500',
  },
  {
    id: 'automation-4',
    name: 'Automation Tool',
    description: 'Advanced automation capabilities to streamline your business processes.',
    subdomain: 'automation.amzdudes.io',
    status: 'coming-soon',
    features: [
      'Workflow automation',
      'Integration capabilities',
      'Custom triggers',
      'Performance monitoring',
    ],
    icon: 'Zap',
    color: 'bg-orange-500',
  },
]

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')

    // Try to fetch from Python backend, fallback to local data
    let tools = LOCAL_TOOLS

    // Filter by status if provided
    if (status) {
      tools = tools.filter(tool => tool.status === status)
    }

    const active = LOCAL_TOOLS.filter(t => t.status === 'active').length
    const comingSoon = LOCAL_TOOLS.filter(t => t.status === 'coming-soon').length

    const response: ToolsResponse = {
      tools,
      total: LOCAL_TOOLS.length,
      active,
      coming_soon: comingSoon,
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error('Error fetching tools:', error)
    // Return local data as fallback
    const response: ToolsResponse = {
      tools: LOCAL_TOOLS,
      total: LOCAL_TOOLS.length,
      active: LOCAL_TOOLS.filter(t => t.status === 'active').length,
      coming_soon: LOCAL_TOOLS.filter(t => t.status === 'coming-soon').length,
    }
    return NextResponse.json(response)
  }
}

