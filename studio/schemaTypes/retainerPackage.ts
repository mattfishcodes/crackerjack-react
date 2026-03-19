import { defineField, defineType } from 'sanity'

export const retainerPackageType = defineType({
  name: 'retainerPackage',
  title: 'Retainer Package',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'hours',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
