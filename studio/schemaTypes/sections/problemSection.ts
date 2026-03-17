export const problemSectionType = {
  name: 'problemSection',
  title: 'Problem Section',
  type: 'object',
  fields: [
    { name: 'heading', type: 'string' },
    {
      name: 'problems',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
}
