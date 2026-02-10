'use client'

import ConsentProvider from '@mattfishcodes/cookie-consent'

export default function ConsentLoader() {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID

  if (gtmId === undefined) {
    return null
  }

  return <ConsentProvider gtmId={gtmId} />
}
