module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',

    'eslint-config-airbnb-base',
  ],
  plugins: ['prettier'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  env: {
    browser: true,
    node: true,
  },
};
