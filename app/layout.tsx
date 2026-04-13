
import './globals.css'
import Navbar from '../components/navbar'
import Footer from "../components/footer"
import type { ReactNode } from 'react'


export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-16 sm:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

