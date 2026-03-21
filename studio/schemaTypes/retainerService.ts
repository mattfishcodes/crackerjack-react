import { defineField, defineType } from 'sanity'

export const retainerServiceType = defineType({
  name: 'retainerService',
  title: 'Retainer Service',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'order',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'features',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (rule) => rule.required(),
    }),
  ],
})
