import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rachelle Tania Lopez — Executive Assistant & Operations Support',
  description: 'Virtual Executive Assistant specializing in executive communications, operations coordination, CRM management, and administrative excellence. Available for remote opportunities.',
  keywords: 'Executive Assistant, Virtual Assistant, Operations Support, Remote Work, Philippines',
  authors: [{ name: 'Rachelle Tania Lopez' }],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  openGraph: {
    title: 'Rachelle Tania Lopez — Executive Assistant',
    description: 'Helping executives and businesses focus on growth through strategic administrative support.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var t = localStorage.getItem('theme');
                if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
