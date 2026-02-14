import { fetchSheetJson, parseSheet } from '@mattfishcodes/google-sheets'
import { type Review, reviewSchema } from './schemas/review'

const url =
  'https://docs.google.com/spreadsheets/d/1aPg1NT8tz1O1udHp9K9lwVI65shtT23Am1NHMq5JjII/gviz/tq?tqx=out:json&headers=1'

export async function getReviews() {
  const reviewsJson = await fetchSheetJson(url)

  const reviews = await parseSheet(reviewsJson, reviewSchema, {
    errorLogger:
      process.env.NODE_ENV !== 'production' ? console.warn : undefined,
  })

  return reviews as Review[]
}
