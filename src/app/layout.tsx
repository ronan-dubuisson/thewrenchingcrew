import type { Metadata } from 'next'
import { Bebas_Neue, Libre_Baskerville } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Wrenching crew',
  description:
    'Motorcycle club dedicated to preserving the past and embracing the spirit of freedom on the open road.',
}

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-heading',
})

const libre = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-body',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className={`${bebas.variable} ${libre.variable}`}>{children}</body>
    </html>
  )
}
