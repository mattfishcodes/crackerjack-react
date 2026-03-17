export const processSectionType = {
  name: 'processSection',
  title: 'Process Section',
  type: 'object',
  fields: [
    {
      name: 'steps',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string' },
            { name: 'description', type: 'text' },
          ],
        },
      ],
    },
  ],
}
