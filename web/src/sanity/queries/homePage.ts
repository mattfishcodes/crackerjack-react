import { groq } from 'next-sanity'

export const homePageQuery = groq`
  *[_type == "homePage"][0] {
    hero {
      "imageUrl": image.asset->url,
      heading,
      subheading,
      body,
    },
    painPoints {
      "imageUrl": image.asset->url,
      heading,
      items,
    },
    benefits {
      heading,
      items,
    },
    moxiePromo {
      heading,
      body,
      cta-> {
        buttonLink,
        buttonText,
      },
      "logoUrl": logo.asset->url,
    },
    coursePromo {
      heading,
      primaryBody,
      primaryCta-> {
        buttonText,
        buttonSubtext,
        buttonLink,
      },
      secondaryBody,
      secondaryCta-> {
        buttonText,
        buttonSubtext,
        buttonLink,
      },
    },
    services {
      heading,
      items[]-> {
        title,
        description,
        "iconUrl": icon.asset->url,
        "href": "/services#" + slug.current
      },
    },
    process {
      heading,
      steps[] { title, description },
    },
  }
`

export interface CtaButton {
  buttonText: string
  buttonLink: string
  buttonSubtext?: string
  openInNewTab?: boolean
}

export interface HomePageData {
  hero: {
    imageUrl: string
    heading: string
    subheading: string
    body: string
  }
  painPoints: {
    imageUrl: string
    heading: string
    items: string[]
  }
  benefits: {
    heading: string
    items: string[]
  }
  moxiePromo: {
    heading: string
    body: string
    cta: CtaButton
    logoUrl: string
  }
  coursePromo: {
    heading: string
    primaryBody: string
    primaryCta: CtaButton
    secondaryBody: string
    secondaryCta: CtaButton
  }
  services: {
    heading: string
    items: {
      title: string
      description: string
      iconUrl: string
      href: string
    }[]
  }
  process: {
    heading: string
    steps: { title: string; description: string }[]
  }
}
