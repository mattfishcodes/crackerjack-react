export type CTAButton = {
  buttonText: string
  buttonSubtext?: string
  buttonLink: string
}

export type RetainerPackage = {
  title: string
  hours: string
  price: number
  body: string
}

export type RetainerService = {
  title: string
  items: string[]
}

export type Review = {
  name: string
  body: string
  order: number
}
