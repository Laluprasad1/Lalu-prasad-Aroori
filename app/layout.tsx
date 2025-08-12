import "./globals.css"

import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import siteMetadata from './metadata.json'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: siteMetadata["/"].title,
  description: siteMetadata["/"].description,
  keywords: siteMetadata["/"].keywords,
  openGraph: {
    title: siteMetadata["/"].title,
    description: siteMetadata["/"].description,
    type: 'website',
    images: [siteMetadata["/"].ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata["/"].title,
    description: siteMetadata["/"].description,
    images: [siteMetadata["/"].ogImage],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
    </html>
  )
}
