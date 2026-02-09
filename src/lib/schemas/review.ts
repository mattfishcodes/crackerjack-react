import * as z from 'zod'

export const reviewSchema = z.object({
  name: z.string().min(1),
  body: z.string().min(1),
})

export type Review = z.infer<typeof reviewSchema>
