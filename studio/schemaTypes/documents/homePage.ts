import { defineField, defineType } from 'sanity'

export const homePageType = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  preview: {
    prepare() {
      return {
        title: 'Home Page',
      }
    },
  },
  fields: [
    // Hero
    defineField({
      name: 'hero',
      type: 'object',
      fields: [
        defineField({ name: 'image', type: 'image' }),
        defineField({ name: 'heading', type: 'string' }),
        defineField({ name: 'subheading', type: 'string' }),
        defineField({ name: 'body', type: 'text' }),
      ],
    }),

    // Pain Points
    defineField({
      name: 'painPoints',
      type: 'object',
      fields: [
        defineField({ name: 'image', type: 'image' }),
        defineField({ name: 'heading', type: 'string' }),
        defineField({
          name: 'items',
          type: 'array',
          of: [{ type: 'string' }],
        }),
      ],
    }),

    // Benefits
    defineField({
      name: 'benefits',
      type: 'object',
      fields: [
        defineField({ name: 'heading', type: 'string' }),
        defineField({
          name: 'items',
          type: 'array',
          of: [{ type: 'string' }],
        }),
      ],
    }),

    // Moxie Promo
    defineField({
      name: 'moxiePromo',
      title: 'Moxie Promo',
      type: 'object',
      fields: [
        defineField({ name: 'heading', type: 'string' }),
        defineField({ name: 'body', type: 'text' }),
        defineField({
          name: 'cta',
          type: 'reference',
          to: [{ type: 'ctaButton' }],
        }),
        defineField({ name: 'logo', type: 'image' }),
      ],
    }),

    // Course Promo
    defineField({
      name: 'coursePromo',
      title: 'Course Promo',
      type: 'object',
      fields: [
        defineField({ name: 'heading', type: 'string' }),
        defineField({ name: 'primaryBody', type: 'text' }),
        defineField({
          name: 'primaryCta',
          type: 'reference',
          to: [{ type: 'ctaButton' }],
        }),
        defineField({ name: 'secondaryBody', type: 'string' }),
        defineField({
          name: 'secondaryCta',
          type: 'reference',
          to: [{ type: 'ctaButton' }],
        }),
      ],
    }),

    // Services
    defineField({
      name: 'services',
      type: 'object',
      fields: [
        defineField({ name: 'heading', type: 'string' }),
        defineField({
          name: 'items',
          type: 'array',
          of: [{ type: 'reference', to: [{ type: 'service' }] }],
        }),
      ],
    }),

    // Process
    defineField({
      name: 'process',
      type: 'object',
      fields: [
        defineField({ name: 'heading', type: 'string' }),
        defineField({
          name: 'steps',
          type: 'array',
          of: [{ type: 'processStep' }],
        }),
      ],
    }),
  ],
})
