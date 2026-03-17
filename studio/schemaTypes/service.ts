export const serviceType = {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },
    {
      name: 'slug',
      type: 'slug',
      options: { source: 'title' },
    },
    { name: 'description', type: 'text' },
    {
      name: 'features',
      type: 'array',
      of: [{ type: 'string' }],
    },
    { name: 'icon', type: 'image' },
  ],
}
