import { defineField, defineType } from 'sanity'

export const bioType = defineType({
  name: 'bio',
  title: 'Bio',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'body',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
