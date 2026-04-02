import { defineField, defineType } from 'sanity'

export const contactPageType = defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  preview: {
    prepare() {
      return {
        title: 'Contact Page',
      }
    },
  },
  fields: [
    defineField({ name: 'heading', type: 'string' }),
    defineField({ name: 'formUrl', type: 'string' }),
  ],
})
