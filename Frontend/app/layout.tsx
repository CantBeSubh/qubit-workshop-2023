import './globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import type { Metadata } from 'next'
import { ThemeProvider } from "@/provider/theme-provider"
import { Toaster } from 'react-hot-toast'

export const metadata: Metadata = {
  title: 'QUBIT Workshop',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className='flex flex-col justify-between h-screen'>
              <Navbar />
              {children}
              <Footer />
            </div>
            <Toaster position='top-right' />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
