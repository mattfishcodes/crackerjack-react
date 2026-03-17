export const homePageType = {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },

    { name: 'hero', type: 'heroSection' },
    { name: 'problem', type: 'problemSection' },
    { name: 'transformation', type: 'transformationSection' },
    { name: 'promo', type: 'promoSection' },
    { name: 'courseCta', type: 'ctaSection' },

    {
      name: 'servicesHeading',
      type: 'string',
      initialValue: 'Services',
    },

    { name: 'process', type: 'processSection' },
  ],
}
