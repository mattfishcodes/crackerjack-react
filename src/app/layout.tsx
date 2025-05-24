import type { Metadata } from 'next'
import {
  Meow_Script,
  Montserrat,
  Titillium_Web,
  Urbanist,
} from 'next/font/google'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import './globals.scss'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Script from 'next/script'

config.autoAddCss = false

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
  title: 'Crackerjack Solutions - Virtual Business Management Services',
  description:
    'Crackerjack Solutions | Empowering Entrepreneurs and Business Leaders | Project, Systems and Operations Management',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        {process.env.NODE_ENV === 'production' && (
          <>
            <Script
              id='cookieyes'
              src='https://cdn-cookieyes.com/client_data/ec6aea4d0b987f40283650e6/script.js'
            ></Script>
            <Script
              id='cookieyes-banner'
              src='https://cdn-cookieyes.com/client_data/ec6aea4d0b987f40283650e6/banner.js'
            ></Script>
          </>
        )}
        <link
          rel='icon'
          type='image/png'
          href='/favicon-96x96.png'
          sizes='96x96'
        />
        <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <meta
          name='apple-mobile-web-app-title'
          content='Crackerjack Solutions'
        />
        <link rel='manifest' href='/site.webmanifest' />
      </head>
      <body
        className={`${meowScript.variable} ${montserrat.variable} ${titilliumWeb.variable} ${urbanist.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
