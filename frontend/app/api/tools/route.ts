import { NextResponse } from 'next/server'
import { tools as toolsData } from '@/lib/tools'

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

// Use the centralized tools data from lib/tools.ts to avoid duplication
const LOCAL_TOOLS: Tool[] = toolsData

export const dynamic = 'force-dynamic'

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
