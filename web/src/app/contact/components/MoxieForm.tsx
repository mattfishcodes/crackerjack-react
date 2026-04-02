'use client'

import { useEffect, useRef, useState } from 'react'

import { LoaderCircle } from 'lucide-react'

import Script from 'next/script'

import Container from '@/components/Container'
import { cn } from '@/lib/utils'

export default function MoxieForm({ url }: { url: string }) {
  const [loaded, setLoaded] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement | null>(null)

  const injectForm = () => {
    if (iframeRef.current !== null) {
      const iframeUrl = `${url}?inFrame=true&sourceUrl=${encodeURIComponent(window.location.href)}`

      iframeRef.current.src = iframeUrl

      iframeRef.current.onload = () => {
        setTimeout(() => {
          /* @ts-expect-error iFrameResize included in cdn script below */
          iFrameResize(
            {
              heightCalculationMethod: 'min',
              sizeWidth: true,
              sizeHeight: true,
              log: false,
              checkOrigin: false,
              onResized: () => {
                setLoaded(true)
              },
            },
            '#moxie-website-contact-form',
          )
        }, 100)
      }

      window.addEventListener(
        'message',
        (event) => {
          if (
            event.origin === 'https://hello.withmoxie.com' &&
            event.data &&
            event.data.startsWith('[Redirect]')
          ) {
            const url = event.data.slice(10)
            console.log(event.data)
            window.location = url
          }
        },
        false,
      )
    }
  }

  useEffect(() => {
    injectForm()
  })

  return (
    <Container>
      <Script src='https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.10/iframeResizer.min.js'></Script>

      <div className='min-h-150 w-full'>
        <iframe
          id='moxie-website-contact-form'
          ref={iframeRef}
          className={cn(
            'border-primary m-0 hidden min-w-full rounded-md border-2 p-0',
            loaded && 'inline',
          )}
        ></iframe>

        {!loaded && (
          <div className='flex justify-center'>
            <LoaderCircle className='text-secondary-foreground h-20 w-20 animate-spin' />
          </div>
        )}
      </div>
    </Container>
  )
}
