import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Restaurant Landing page',
  description: 'A simply restaurant landing page',
  name: 'viewport',
  content: 'width=device-width, initial-scale=1'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="w-fit h-fit">{children}</body>
    </html>
  )
}
