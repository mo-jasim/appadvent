
import './globals.css'
import Navbar from '../components/navbar'
import Footer from "../components/footer"
import type { ReactNode } from 'react'
import { Saira } from 'next/font/google'

const saira = Saira({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-saira',
})


export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={saira.variable}>
        <Navbar />
        <main className="pt-16 sm:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

