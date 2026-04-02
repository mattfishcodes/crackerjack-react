import { defineField, defineType } from 'sanity'

export const retainerPackageType = defineType({
  name: 'retainerPackage',
  title: 'Retainer Package',
  type: 'object',
  fields: [
    defineField({ name: 'title', type: 'string' }),
    defineField({ name: 'hours', type: 'string' }),
    defineField({ name: 'price', type: 'number' }),
    defineField({ name: 'body', type: 'text' }),
  ],
})
