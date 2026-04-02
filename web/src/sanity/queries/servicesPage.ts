import { groq } from 'next-sanity'

import { ctaFragment } from '../fragments'
import {
  type CTAButton,
  type RetainerPackage,
  type RetainerService,
  type Review,
} from '../types'

export const servicesPageQuery = groq`
   *[_type == "servicesPage"][0]{
        consultPromo {
          heading,
          body,
          cta-> ${ctaFragment}
        },
        "servicesCards": *[_type == "service"]{
          title,
          subtitle,
          slug,
          features[] {
            heading,
            body
          }
        },
        retainerPackages {
          heading,
          body,
          disclaimer,
          items[] {
            title,
            hours,
            price,
            body,
          },
        },
        retainerBenefits {
          heading,
          items,
        },
        retainerPromo {
          heading,
          body,
          cta-> ${ctaFragment}
        },
        retainerServices {
          heading,
          body,
          items[] {
            title,
            items,
          }
        },
        reviews {
          heading,
          "items": *[_type == 'review']{name, body, order},
        },
        tools {
          heading,
          body,
          items,
        },
        footerPromo {
          heading,
          primaryBody,
          primaryCta-> ${ctaFragment},
          secondaryBody,
          secondaryCta-> ${ctaFragment},
        },
    }
`

export interface ServicesPageData {
  consultPromo: {
    heading: string
    body: string
    cta: CTAButton
  }
  servicesCards: {
    title: string
    subtitle: string
    slug: { current: string }
    features: {
      heading: string
      body: string
    }[]
  }[]
  retainerPackages: {
    heading: string
    body: string
    disclaimer: string
    items: RetainerPackage[]
  }
  retainerBenefits: {
    heading: string
    items: string[]
  }
  retainerPromo: {
    heading: string
    body: string
    cta: CTAButton
  }
  retainerServices: {
    heading: string
    body: string
    items: RetainerService[]
  }
  reviews: {
    heading: string
    items: Review[]
  }
  tools: {
    heading: string
    body: string
    items: string[]
  }
  footerPromo: {
    heading: string
    primaryBody: string
    primaryCta: CTAButton
    secondaryBody: string
    secondaryCta: CTAButton
  }
}
