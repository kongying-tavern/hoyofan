export default {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-sass-guidelines',
  ],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['theme', 'tailwind', 'utility'],
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['export', 'deep'],
      },
    ],
    'property-no-unknown': [
      true,
      {
        ignoreSelectors: [':export'],
      },
    ],
  },
}
