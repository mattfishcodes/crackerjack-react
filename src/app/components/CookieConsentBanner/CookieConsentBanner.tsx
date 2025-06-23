'use client'

import { useEffect, useState } from 'react'
import styles from './CookieConsentBanner.module.scss'

const CookieConsentBanner = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('analyticsConsent')
    if (consent !== 'true') {
      setVisible(true)
    }
  }, [])

  const acceptConsent = () => {
    localStorage.setItem('analyticsConsent', 'true')
    setVisible(false)
    // Reload so analytics script loads (optional)
    location.reload()
  }

  const closeBanner = () => {
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className={styles.container}>
      <span>
        We use cookies to improve your experience. By clicking “Accept,” you
        consent to analytics tracking.
      </span>
      <button onClick={acceptConsent} className={styles.acceptButton}>
        Accept
      </button>
      <button onClick={closeBanner} className={styles.closeButton}>
        X
      </button>
    </div>
  )
}

export default CookieConsentBanner
