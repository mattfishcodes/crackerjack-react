import { type Metadata } from 'next'

import {
  Meow_Script,
  Montserrat,
  Titillium_Web,
  Urbanist,
} from 'next/font/google'

import './globals.css'
import ConsentLoader from '@/components/ConsentLoader'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

const meowScript = Meow_Script({
  weight: ['400'],
  variable: '--font-meow-script',
  subsets: ['latin'],
})

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
})

const titilliumWeb = Titillium_Web({
  weight: ['400', '600'],
  variable: '--font-titillium-web',
  subsets: ['latin'],
})

const urbanist = Urbanist({
  variable: '--font-urbanist',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    template: '%s | Crackerjack Solutions',
    default: 'Crackerjack Solutions',
  },
  description:
    'Crackerjack Solutions | Empowering Entrepreneurs and Business Leaders | Project, Systems and Operations Management',
  icons: {
    icon: ['/favicon-96x96.png', '/favicon.svg'],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    title: 'Crackerjack Solutions',
    statusBarStyle: 'black-translucent',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${meowScript.variable} ${montserrat.variable} ${titilliumWeb.variable} ${urbanist.variable} antialiased`}
      >
        <ConsentLoader />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
