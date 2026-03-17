export const transformationSectionType = {
  name: 'transformationSection',
  title: 'Transformation Section',
  type: 'object',
  fields: [
    { name: 'heading', type: 'string' },
    {
      name: 'benefits',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
}
