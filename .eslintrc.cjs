module.exports = {
  // Specify environment settings
  env: { browser: true, es2020: true },
  // Extend ESLint configurations
  extends: [
    'eslint:recommended', // Use ESLint recommended rules
    'plugin:react/recommended', // Use recommended rules for React
    'plugin:react/jsx-runtime', // Use recommended rules for React JSX runtime
    'plugin:react-hooks/recommended', // Use recommended rules for React hooks
  ],
  // Ignore specific patterns or directories
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  // Specify parser options
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  // Specify settings for React
  settings: { react: { version: '18.2' } },
  // Specify ESLint plugins
  plugins: ['react-refresh'],
  // Specify ESLint rules
  rules: {
    'react-refresh/only-export-components': 'warn', // Warn if not exporting components
    'react/prop-types': 'off', // Turn off prop-types rule
  },
};
