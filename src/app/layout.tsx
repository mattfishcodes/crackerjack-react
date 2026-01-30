import type { Metadata } from 'next'
import {
  Meow_Script,
  Montserrat,
  Titillium_Web,
  Urbanist,
} from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ConsentDialog from '@/components/ConsentDialog'

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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <Script
          id='google-consent-defaults'
          strategy='beforeInteractive'
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}

                  gtag('consent', 'default', {
                    ad_storage: 'denied',
                    analytics_storage: 'denied',
                    ad_user_data: 'denied',
                    ad_personalization: 'denied',
                    wait_for_update: 500
                  });`,
          }}
        />
        <Script
          id='google-tag-manager'
          strategy='beforeInteractive'
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-TH5JV84B');`,
          }}
        />

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
        <noscript>
          <iframe
            src='https://www.googletagmanager.com/ns.html?id=GTM-TH5JV84B'
            height='0'
            width='0'
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        <Header />
        {children}
        <Footer />
        <ConsentDialog />
      </body>
    </html>
  )
}
