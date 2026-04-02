import { defineField, defineType } from 'sanity'

export const ctaButtonType = defineType({
  name: 'ctaButton',
  title: 'CTA Button',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string' }),
    defineField({
      name: 'buttonText',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'buttonLink',
      type: 'url',
      validation: (r) => r.required(),
    }),
    defineField({ name: 'buttonSubtext', type: 'string' }),
  ],
})
