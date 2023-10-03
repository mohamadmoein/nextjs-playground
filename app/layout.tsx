import './(website)/globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import Link from "next/link";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Proxy Endpoint App',
  description: 'Testing proxy endpoint behaviour',
}

export default function RootLayout({children,}: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <body className={inter.className}>
    {children}
    </body>
    </html>
  )
}
