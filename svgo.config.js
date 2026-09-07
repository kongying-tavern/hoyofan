export default {
  plugins: [
    'preset-default',
    {
      name: 'removeAttributesBySelector',
      params: {
        selectors: [
          {
            selector: 'svg',
            attributes: ['xml:space', 'preserveAspectRatio'],
          },
        ],
      },
    },
  ],
}
