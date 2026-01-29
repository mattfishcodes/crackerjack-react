'use client'

import { cn } from '@/lib/utils'
import { Button } from '@/shadcn/ui/button'
import { X } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function ConsentToast() {
  const [visible, setVisible] = useState(false)

  const giveConsent = (consent: 'granted' | 'denied') => {
    // @ts-expect-error gtag defined in head
    gtag('consent', 'update', {
      analytics_storage: consent,
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    })

    localStorage.setItem('analytics_consent', consent)
  }

  useEffect(() => {
    const analyticsConsent: string =
      localStorage.getItem('analytics_consent') || 'denied'

    if (analyticsConsent === 'granted') {
      // eslint-disable-next-line
      setVisible(false)
      giveConsent('granted')
      return
    }

    if (analyticsConsent === 'denied') {
      setVisible(true)
      giveConsent('denied')
    }
  }, [])

  return (
    <div
      className={cn(
        'pointer-events-none fixed right-8 bottom-8 max-w-3/4 min-w-1/3 rounded-md border bg-white p-8 opacity-0 transition-opacity',
        visible && 'pointer-events-auto opacity-100',
      )}
    >
      <Button
        className='float-right mb-4'
        variant='outline'
        onClick={() => setVisible(false)}
      >
        <X />
      </Button>
      <div>We use cookies for analytics to improve this site.</div>
      <div className='pb-4'>You can accept or reject analytics cookies.</div>
      <Button
        className='me-2'
        onClick={() => {
          setVisible(false)
          giveConsent('granted')
        }}
      >
        Accept
      </Button>
      <Button onClick={() => setVisible(false)}>Reject</Button>
    </div>
  )
}
