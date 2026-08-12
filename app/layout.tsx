import type { Metadata } from 'next'
import './globals.css'
import CustomCursor from '@/components/CustomCursor'

export const metadata: Metadata = {
  title: 'Yakir Oren | Full-Stack Product Engineer',
  description: 'Production workflow software, AI-assisted systems, and TypeScript product demos by Yakir Oren.',
  openGraph: {
    title: 'Yakir Oren | Full-Stack Product Engineer',
    description: 'Explore production platforms and live TypeScript demos.',
    url: 'https://ya1-oa.github.io',
    siteName: 'Yakir Oren Portfolio',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg text-text">
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}
