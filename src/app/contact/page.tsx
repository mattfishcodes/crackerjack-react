'use client'

import { useEffect, useRef, useState } from 'react'
import Script from 'next/script'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import styles from './page.module.scss'
import PageHeader from '@/app/components/PageHeader/PageHeader'
import Container from '@/app/components/Container/Container'

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
                if (iframeRef.current?.style.height !== '4px') {
                  setLoaded(true)
                }
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
  }, [])

  return (
    <main>
      <PageHeader title='Contact Us' />

      <h4 className={styles.heading}>
        We&apos;d Love to Help You - Reach Out Today!
      </h4>

      <Container>
        <Script
          type='text/javascript'
          src='https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.10/iframeResizer.min.js'
        ></Script>

        <div style={{ width: '100%', minHeight: '600px' }}>
          <iframe
            id='moxie-website-contact-form'
            ref={iframeRef}
            className={`${styles.iframe} ${loaded ? styles.loaded : ''}`}
          ></iframe>

          {!loaded && (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <FontAwesomeIcon icon={faSpinner} className={styles.spinner} />
            </div>
          )}
        </div>
      </Container>
    </main>
  )
}
