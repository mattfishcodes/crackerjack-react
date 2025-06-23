'use client'

import { useState, useEffect } from 'react'
import Script from 'next/script'

const GoogleTag = () => {
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    if (process.env.NODE_ENV === 'production' && hasConsent()) {
      setShouldLoad(true)
    }
  }, [])

  function hasConsent() {
    try {
      return localStorage.getItem('analyticsConsent') === 'true'
    } catch {
      return false
    }
  }

  if (!shouldLoad) return null

  return (
    <>
      <Script
        src='https://www.googletagmanager.com/gtag/js?id=G-Z1BQEY2FDY'
        strategy='afterInteractive'
      />
      <Script
        id='gtag-script'
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Z1BQEY2FDY');`,
        }}
      />
    </>
  )
}

export default GoogleTag
