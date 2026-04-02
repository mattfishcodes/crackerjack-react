import { defineField, defineType } from 'sanity'

export const aboutPageType = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  preview: {
    prepare() {
      return {
        title: 'About Page',
      }
    },
  },
  fields: [
    defineField({
      name: 'consultPromo',
      type: 'object',
      fields: [
        defineField({ name: 'heading', type: 'string' }),
        defineField({
          name: 'cta',
          type: 'reference',
          to: [{ type: 'ctaButton' }],
        }),
      ],
    }),
    defineField({
      name: 'coreValues',
      type: 'object',
      fields: [
        defineField({ name: 'heading', type: 'string' }),
        defineField({
          name: 'values',
          type: 'array',
          of: [{ type: 'string' }],
        }),
        defineField({ name: 'memes', type: 'array', of: [{ type: 'image' }] }),
      ],
    }),
    defineField({
      name: 'footerPromo',
      type: 'object',
      fields: [
        defineField({ name: 'heading', type: 'string' }),
        defineField({ name: 'body', type: 'text' }),
        defineField({
          name: 'primaryCta',
          type: 'reference',
          to: [{ type: 'ctaButton' }],
        }),
        defineField({
          name: 'secondaryCta',
          type: 'reference',
          to: [{ type: 'ctaButton' }],
        }),
      ],
    }),
  ],
})
