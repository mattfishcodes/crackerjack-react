'use client'

import { cn } from '@/lib/utils'
import { Button } from '@/shadcn/ui/button'
import { X } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function ConsentDialog() {
  const [visible, setVisible] = useState(false)

  const updateConsent = (consent: 'granted' | 'denied') => {
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
    const storedConsent = localStorage.getItem('analytics_consent')

    if (storedConsent === null) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(true)
    }
  }, [])

  return (
    <div
      className={cn(
        'pointer-events-none fixed right-8 bottom-8 left-8 translate-y-50 rounded-md border bg-white px-8 py-4 opacity-0 transition-all duration-500 md:left-auto',
        visible && 'pointer-events-auto translate-y-0 opacity-100',
      )}
    >
      <div className='mb-4 flex justify-between gap-4'>
        <div>
          <div>We use cookies for analytics to improve this site.</div>
          <div>You can accept or reject analytics cookies.</div>
        </div>
        <Button variant='outline' onClick={() => setVisible(false)}>
          <X />
        </Button>
      </div>
      <Button
        className='me-2'
        onClick={() => {
          setVisible(false)
          updateConsent('granted')
        }}
      >
        Accept
      </Button>
      <Button
        onClick={() => {
          setVisible(false)
          updateConsent('denied')
        }}
      >
        Reject
      </Button>
    </div>
  )
}
