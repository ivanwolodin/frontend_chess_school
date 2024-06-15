module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: [
		'import',
	],
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		warnOnUnsupportedTypeScriptVersion: false,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
		'prettier',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
		'plugin:jsx-a11y/recommended',
		'plugin:eslint-comments/recommended',
	],
	rules: {
		quotes: [2, 'single', { avoidEscape: true }],
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': ['error'],
		'@typescript-eslint/no-var-requires': 'off',
		'react/prop-types': 'off',
		'react/jsx-uses-react': 'off',
		'react/react-in-jsx-scope': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: '{react,react-dom/**}',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
	},
}
