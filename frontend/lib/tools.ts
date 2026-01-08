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

export const tools: Tool[] = [
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
    name: 'Wholesale CRM Automation',
    description: 'Powerful customer relationship management with automated workflows and intelligent insights for wholesale operations.',
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

