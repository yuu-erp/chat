module.exports = {
    plugins: ['boundaries'],
    rules: {
      'boundaries/element-types': [2, {
        default: 'disallow',
        rules: [
          {
            from: 'modules/chat/ui',
            allow: ['modules/chat/domain', 'modules/chat/application'],
          },
          {
            from: 'modules/chat/infrastructure',
            allow: ['modules/chat/domain', 'modules/chat/application'],
          },
          {
            from: ['modules/**'],
            disallow: ['modules/**/infrastructure/**', 'modules/**/ui/**'],
          }
        ],
      }],
    },
    settings: {
      'boundaries/elements': [
        { type: 'domain', pattern: 'modules/*/domain' },
        { type: 'application', pattern: 'modules/*/application' },
        { type: 'infrastructure', pattern: 'modules/*/infrastructure' },
        { type: 'ui', pattern: 'modules/*/ui' },
      ],
    },
  'prettier/prettier': [
      'warn',
      {
        arrowParens: 'always',
        semi: false,
        trailingComma: 'none',
        tabWidth: 2,
        endOfLine: 'auto',
        useTabs: false,
        singleQuote: true,
        printWidth: 120,
        jsxSingleQuote: true
      }
    ]
  }
  