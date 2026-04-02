import { defineField, defineType } from 'sanity'

export const serviceType = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  preview: {
    select: { title: 'title' },
  },
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({ name: 'subtitle', type: 'text' }),
    defineField({ name: 'description', type: 'text' }),
    defineField({ name: 'icon', type: 'image' }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' } }),
    defineField({
      name: 'features',
      type: 'array',
      of: [{ type: 'serviceFeature' }],
    }),
  ],
})
