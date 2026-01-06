import { Tool } from './tools'

export interface ToolsResponse {
  tools: Tool[]
  total: number
  active: number
  coming_soon: number
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api'

export async function fetchTools(status?: 'active' | 'coming-soon'): Promise<ToolsResponse> {
  try {
    const url = status 
      ? `${API_BASE_URL}/tools?status=${status}`
      : `${API_BASE_URL}/tools`
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    })

    if (!response.ok) {
      throw new Error('Failed to fetch tools')
    }

    return await response.json()
  } catch (error) {
    console.error('Error fetching tools from API:', error)
    // Fallback to local data
    throw error
  }
}

export async function fetchToolById(toolId: string): Promise<Tool> {
  try {
    const response = await fetch(`${API_BASE_URL}/tools/${toolId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error('Failed to fetch tool')
    }

    return await response.json()
  } catch (error) {
    console.error('Error fetching tool:', error)
    throw error
  }
}

export async function fetchStats() {
  try {
    const response = await fetch(`${API_BASE_URL}/stats`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 60 },
    })

    if (!response.ok) {
      throw new Error('Failed to fetch stats')
    }

    return await response.json()
  } catch (error) {
    console.error('Error fetching stats:', error)
    throw error
  }
}

