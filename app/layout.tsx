import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rachelle Tania Lopez - Executive Assistant & Operations Support',
  description: 'Virtual Executive Assistant & Operations Support professional specializing in administrative workflows, CRM systems, and process optimization.',
  keywords: 'Executive Assistant, Virtual Assistant, Operations Support, Administrative Support, Remote Work',
  authors: [{ name: 'Rachelle Tania Lopez' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  )
}
