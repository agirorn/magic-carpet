module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    'plugin:promise/recommended',
  ],
  plugins: ['promise'],
  rules: {
    complexity: ['error', 4],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'spec/**/*.js',
          'scripts',
        ],
      },
    ],
  },
};
