import React from 'react'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const siteUrl = 'https://tobams-dmd9.vercel.app/'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Tobams Group | Training, Talent Development & Consulting',
    template: '%s | Tobams Group',
  },
  description:
    'Tobams Group is an innovative consultancy firm reshaping the future of tech talent development in Africa, specializing in talent acquisition, internships, corporate training, and skill development with a global perspective.',
  keywords: [
    'Tobams Group',
    'TG Academy',
    'tech talent development',
    'corporate training',
    'capacity development',
    'talent recruitment',
    'management development program',
    'tech talent solutions',
    'IT consulting services',
    'leadership training Africa',
  ],
  authors: [{ name: 'Tobams Group' }],
  creator: 'Tobams Group',
  publisher: 'Tobams Group',
  icons: {
    icon: [{ url: '/logo.png', type: 'image/png' }],
    shortcut: '/favicon.ico',
    apple: [{ url: '/logo.png' }],
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Tobams Group',
    title: 'Tobams Group | Training, Talent Development & Consulting',
    description:
      'Corporate training, personalised coaching, capacity development, and tech talent solutions — reshaping careers and organisations across Africa.',
    images: [{ url: '/logo.png', alt: 'Tobams Group logo' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tobams Group | Training, Talent Development & Consulting',
    description:
      'Corporate training, personalised coaching, capacity development, and tech talent solutions — reshaping careers and organisations across Africa.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#571244',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}