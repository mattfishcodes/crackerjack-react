'use client'

import { useEffect, useRef, useState } from 'react'
import Script from 'next/script'
import { PageHeader } from '@/components/PageHeader'
import { Container } from '@/components/Container'
import { LoaderCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

const isProduction = process.env.NODE_ENV === 'production'

export default function Contact() {
  const [loaded, setLoaded] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement | null>(null)

  const injectForm = () => {
    if (iframeRef.current !== null) {
      iframeRef.current.src =
        'https://hello.withmoxie.com/01/crackerjack-solutions/website-contact-form?inFrame=true&sourceUrl=' +
        encodeURIComponent(window.location.href)

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
    if (isProduction) {
      injectForm()
    }
  }, [])

  return (
    <main>
      <PageHeader>Contact Us</PageHeader>

      <h4 className='m-0 mt-8 text-center italic'>
        We&apos;d Love to Help You - Reach Out Today!
      </h4>

      <Container>
        <Script
          type='text/javascript'
          src='https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.10/iframeResizer.min.js'
        ></Script>

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
              <LoaderCircle className='text-primary h-20 w-20 animate-spin' />
            </div>
          )}
        </div>
      </Container>
    </main>
  )
}
