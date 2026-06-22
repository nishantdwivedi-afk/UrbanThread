import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

export default [
  {
    ignores: ['dist/**', 'node_modules/**']
  },
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.vitest
      }
    },
    plugins: {
      react,
      'react-hooks': reactHooks
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'arrow-spacing': 'error',
      'comma-spacing': ['error', { before: false, after: true }],
      'comma-dangle': ['error', 'never'],
      'indent': ['error', 2, { SwitchCase: 1 }],
      'keyword-spacing': 'error',
      'no-trailing-spaces': 'error',
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'object-curly-spacing': ['error', 'always'],
      'quotes': ['error', 'single', { avoidEscape: true }],
      'react/jsx-curly-spacing': ['error', { when: 'never' }],
      'react/jsx-tag-spacing': 'error',
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'semi': ['error', 'always'],
      'space-before-blocks': 'error'
    }
  }
];
