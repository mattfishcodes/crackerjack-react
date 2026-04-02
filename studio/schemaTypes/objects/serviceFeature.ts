import { defineField, defineType } from 'sanity'

export const serviceFeatureType = defineType({
  name: 'serviceFeature',
  title: 'Service Feature',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'body',
      type: 'text',
      validation: (r) => r.required(),
    }),
  ],
})
