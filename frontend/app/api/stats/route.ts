import { NextResponse } from 'next/server'
import { tools } from '@/lib/tools'

export async function GET() {
  try {
    const stats = {
      total_tools: tools.length,
      active_tools: tools.filter(t => t.status === 'active').length,
      coming_soon_tools: tools.filter(t => t.status === 'coming-soon').length,
    }

    return NextResponse.json(stats)
  } catch (error) {
    console.error('Error fetching stats:', error)
    return NextResponse.json(
      { error: 'Failed to fetch stats' },
      { status: 500 }
    )
  }
}

