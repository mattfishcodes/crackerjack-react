import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: 'kn74ytrq',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
})
