import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ReVitalize Med Spa: Top Med Spa in Muncie, IN',
  description: 'Enhance your natural beauty at ReVitalize Med Spa in Muncie, IN. ' +
  'Experience medical-grade procedures in a serene spa setting. Begin your rejuvenating ' +
  'journey with us today!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
