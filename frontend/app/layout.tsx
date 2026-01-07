import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'amzDUDES - Automation Platform',
  description: 'Professional automation tools for your business needs. Growth, commitment, gratitude.',
  icons: {
    icon: [
      { url: '/amz-favicons.png', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/amz-favicons.png', type: 'image/png' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/amz-favicons.png" type="image/png" />
        <link rel="apple-touch-icon" href="/amz-favicons.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

