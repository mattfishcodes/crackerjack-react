import { defineField, defineType } from 'sanity'

export const serviceCardType = defineType({
  name: 'serviceCard',
  title: 'Service Card',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({ name: 'description', type: 'text' }),
    defineField({ name: 'icon', type: 'image' }),
    defineField({
      name: 'linkPath',
      type: 'string',
      description: 'e.g. /services#crm-setup',
    }),
  ],
})
