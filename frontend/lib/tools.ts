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
    name: 'Office Attendance CRM',
    description: 'Office attendance and employee check-in/check-out tracking with shift rules, approvals, and real-time reporting.',
    subdomain: 'crm.amzdudes.io',
    status: 'active',
    features: [
      'Employee check-in and check-out tracking',
      'Shift scheduling and late/early rules',
      'Manager approvals and audit logs',
      'Attendance reports and payroll-ready exports',
    ],
    icon: 'Clock',
    color: 'bg-indigo-500',
  },
  {
    id: 'sop-hub',
    name: 'SOP Hub',
    description: 'Centralized hub for Standard Operating Procedures with version control and collaboration.',
    subdomain: 'sophub.amzdudes.io',
    status: 'active',
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
    name: 'ClientMax',
    description: 'ClientMax: advanced automation to streamline client operations, onboarding, and account management.',
    subdomain: 'clientmax.amzdudes.io',
    status: 'active',
    features: [
      'Automated client onboarding flows',
      'Recurring task and reminder automation',
      'Multi-channel communication sequences',
      'Pipeline and status change triggers',
      'Deep integration with CRM and billing tools',
    ],
    icon: 'Zap',
    color: 'bg-orange-500',
  },
  {
    id: 'ads-agent',
    name: 'Ads Agent',
    description: 'Manage your Amazon Ads with AI: explore campaigns, get insights, and scale to new markets without spreadsheets.',
    subdomain: 'adsagent.amzdudes.io',
    status: 'active',
    features: [
      'Plain-English campaign exploration',
      'AI-powered performance insights',
      'Audience and targeting suggestions',
      'Rules-based bidding and bid automation',
      'Creative recommendations across formats',
    ],
    icon: 'Zap',
    color: 'bg-sky-500',
  },
]

