import { groq } from 'next-sanity'

export const contactPageQuery = groq`
*[_type == "contactPage"][0]{
    heading,
    formUrl,
}
`

export interface ContactPageData {
  heading: string
  formUrl: string
}
