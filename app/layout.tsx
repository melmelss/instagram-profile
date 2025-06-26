import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Melissa Oficial',
  description: 'Semana do consumidor',
  generator: 'Dev.brasil',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
