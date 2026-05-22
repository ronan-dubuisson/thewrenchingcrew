import type { Metadata } from 'next'
import { Bebas_Neue, Libre_Baskerville } from 'next/font/google'
import '@styles/globals.css'
import { NextIntlClientProvider } from 'next-intl'

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

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return (
    <html lang={locale}>
      <body className={`${bebas.variable} ${libre.variable}`}>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  )
}
