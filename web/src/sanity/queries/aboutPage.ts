import { groq } from 'next-sanity'

import { ctaFragment } from '../fragments'
import { type CTAButton } from '../types'

const personByName = (name: string) => `
  *[_type == "person" && name == "${name}"][0]{
    name,
    "imageUrl": image.asset->url,
    bio,
    certificates[] {
      "imageUrl": asset->url
    }
  }
`

export const aboutPageQuery = groq`
*[_type == "aboutPage"][0]{
  "christine": ${personByName('Christine Warner')},
  consultPromo {
    heading,
    cta-> ${ctaFragment}
  },
  "matthew": ${personByName('Matthew Fisher')},
  coreValues {
    heading,
    values,
    memes[] {
      "imageUrl": asset->url
    }
  },
  footerPromo {
    heading,
    body,
    primaryCta-> ${ctaFragment},
    secondaryCta-> ${ctaFragment}
  }
}
`

interface PersonData {
  name: string
  imageUrl: string
  bio: string
  certificates: {
    imageUrl: string
  }[]
}

export interface AboutPageData {
  christine: PersonData
  consultPromo: {
    heading: string
    cta: CTAButton
  }
  matthew: PersonData
  coreValues: {
    heading: string
    values: string[]
    memes: { imageUrl: string }[]
  }
  footerPromo: {
    heading: string
    body: string
    primaryCta: CTAButton
    secondaryCta: CTAButton
  }
}
