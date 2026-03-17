import { defineField, defineType } from 'sanity'

export const ctaType = defineType({
  name: 'cta',
  title: 'CTA',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'buttonText',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'buttonSubtext',
      type: 'string',
    }),
    defineField({
      name: 'buttonLink',
      type: 'url',
      validation: (rule) => rule.required(),
    }),
  ],
})
