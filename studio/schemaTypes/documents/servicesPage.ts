import { defineField, defineType } from 'sanity'

export const servicesPageType = defineType({
  name: 'servicesPage',
  title: 'Services Page',
  type: 'document',
  preview: {
    prepare() {
      return {
        title: 'Services Page',
      }
    },
  },
  fields: [
    defineField({
      name: 'consultPromo',
      title: 'Consult Promo',
      type: 'object',
      fields: [
        defineField({ name: 'heading', type: 'string' }),
        defineField({ name: 'body', type: 'string' }),
        defineField({
          name: 'cta',
          type: 'reference',
          to: [{ type: 'ctaButton' }],
        }),
      ],
    }),
    defineField({
      name: 'retainerPackages',
      title: 'Retainer Pacakges',
      type: 'object',
      fields: [
        defineField({ name: 'heading', type: 'string' }),
        defineField({ name: 'body', type: 'text' }),
        defineField({ name: 'disclaimer', type: 'text' }),
        defineField({
          name: 'items',
          type: 'array',
          of: [{ type: 'retainerPackage' }],
        }),
      ],
    }),
    defineField({
      name: 'retainerBenefits',
      title: 'Retainer Benefits',
      type: 'object',
      fields: [
        defineField({ name: 'heading', type: 'string' }),
        defineField({ name: 'items', type: 'array', of: [{ type: 'string' }] }),
      ],
    }),
    defineField({
      name: 'retainerPromo',
      title: 'Retainer Promo',
      type: 'object',
      fields: [
        defineField({ name: 'heading', type: 'string' }),
        defineField({ name: 'body', type: 'string' }),
        defineField({
          name: 'cta',
          type: 'reference',
          to: [{ type: 'ctaButton' }],
        }),
      ],
    }),
    defineField({
      name: 'retainerServices',
      title: 'Retainer Services',
      type: 'object',
      fields: [
        defineField({ name: 'heading', type: 'string' }),
        defineField({ name: 'body', type: 'string' }),
        defineField({
          name: 'items',
          type: 'array',
          of: [{ type: 'retainerService' }],
        }),
      ],
    }),
    defineField({
      name: 'reviews',
      title: 'Reviews',
      type: 'object',
      fields: [defineField({ name: 'heading', type: 'string' })],
    }),
    defineField({
      name: 'tools',
      title: 'Tools',
      type: 'object',
      fields: [
        defineField({ name: 'heading', type: 'string' }),
        defineField({ name: 'body', type: 'text' }),
        defineField({ name: 'items', type: 'array', of: [{ type: 'string' }] }),
      ],
    }),
    defineField({
      name: 'footerPromo',
      title: 'Footer Promo',
      type: 'object',
      fields: [
        defineField({ name: 'heading', type: 'string' }),
        defineField({ name: 'primaryBody', type: 'text' }),
        defineField({
          name: 'primaryCta',
          type: 'reference',
          to: [{ type: 'ctaButton' }],
        }),
        defineField({ name: 'secondaryBody', type: 'text' }),
        defineField({
          name: 'secondaryCta',
          type: 'reference',
          to: [{ type: 'ctaButton' }],
        }),
      ],
    }),
  ],
})
