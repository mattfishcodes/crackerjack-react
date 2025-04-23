'use client'

import React, { useEffect, useState } from 'react'
import Script from 'next/script'
import PageHeader from '../components/PageHeader/PageHeader'
import Container from '../components/Container/Container'

export default function Contact() {
  const [loaded, setLoaded] = useState(false)

  const injectForm = () => {
    const moxieFrame: HTMLElement | null = document.getElementById(
      'moxie-website-contact-form',
    )

    if (moxieFrame !== null) {
      /* @ts-expect-error iframe element has src */
      moxieFrame.src =
        'https://hello.withmoxie.com/01/crackerjack-solutions/website-contact-form?inFrame=true&sourceUrl=' +
        encodeURIComponent(window.location.href)

      moxieFrame.onload = () => {
        setLoaded(true)
      }
      setTimeout(
        () =>
          /* @ts-expect-error included in cdn script below */
          iFrameResize(
            {
              heightCalculationMethod: 'min',
              sizeWidth: true,
              sizeHeight: true,
              log: false,
              checkOrigin: false,
            },
            '#moxie-website-contact-form',
          ),
        100,
      )

      window.addEventListener(
        'message',
        (event) => {
          if (
            event.origin === 'https://hello.withmoxie.com' &&
            event.data &&
            event.data.startsWith('[Redirect]')
          ) {
            const url = event.data.slice(10)
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

      <Container>
        <Script
          type='text/javascript'
          src='https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.10/iframeResizer.min.js'
        ></Script>
        <div style={{ width: '100%', minHeight: '600px' }}>
          <iframe
            id='moxie-website-contact-form'
            style={{
              padding: '0px',
              margin: '0px',
              border: 'none',
              maxWidth: '100%',
              minWidth: '100%',
              display: loaded ? 'inline' : 'none',
            }}
          ></iframe>

          <h2 style={{ display: loaded ? 'none' : 'inline' }}>Loading...</h2>
        </div>
      </Container>
    </main>
  )
}
