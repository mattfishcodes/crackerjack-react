import { defineField, defineType } from 'sanity'

export const softwareSectionType = defineType({
  name: 'softwareSection',
  title: 'Software Section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
    defineField({
      name: 'list',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
})
