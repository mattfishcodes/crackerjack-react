import { defineField, defineType } from 'sanity'

export const retainerServiceType = defineType({
  name: 'retainerService',
  title: 'Retainer Service',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'items',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (r) => r.required(),
    }),
  ],
})
