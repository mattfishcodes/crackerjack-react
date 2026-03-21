import { defineField, defineType } from 'sanity'

export const retainerSectionType = defineType({
  name: 'retainerSection',
  title: 'Retainer Package Section',
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
      name: 'disclaimer',
      type: 'text',
    }),
    defineField({
      name: 'transformation',
      type: 'transformationSection',
    }),
  ],
})
