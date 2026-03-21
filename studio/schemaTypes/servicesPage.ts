import { defineField, defineType } from 'sanity'

export const servicesPageType = defineType({
  name: 'servicesPage',
  title: 'Services Page',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string' }),
    defineField({ name: 'retainer', type: 'retainerSection' }),
    defineField({ name: 'software', type: 'softwareSection' }),
    defineField({ name: 'reviewsHeading', type: 'string' }),
  ],
})
