import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Nazura AI — Keep Your Pet's Presence Alive",
  description:
    'A personalised 75-second video message from your pet. Created from your photos, memories, and love. Delivered within 24 hours.',
  metadataBase: new URL('https://www.nazuraai.com'),
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: "Nazura AI — Keep Your Pet's Presence Alive",
    description:
      'A personalised 75-second video message from your pet. Created from your photos, memories, and love. Delivered within 24 hours.',
    url: 'https://www.nazuraai.com',
    siteName: 'Nazura AI',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Nazura AI',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Nazura AI — Keep Your Pet's Presence Alive",
    description:
      'A personalised 75-second video message from your pet. Created from your photos, memories, and love. Delivered within 24 hours.',
    images: [
      'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1200&q=80',
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
      <body>{children}</body>
    </html>
  )
}
