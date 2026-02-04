'use client'

import initConsent from 'cookie-consent'
import { useEffect } from 'react'

export default function ConsentProvider() {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_GTM_ID === undefined) {
      if (process.env.NODE_ENV !== 'production') {
        console.warn('No Google tag ID specified!')
      }
      return
    }

    initConsent({ gtmId: process.env.NEXT_PUBLIC_GTM_ID })
  }, [])

  return null
}
