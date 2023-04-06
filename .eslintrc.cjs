/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
	'plugins': [
		'import',
    'vue'
	],
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'prettier',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',    
  ],
	'env': {
		'browser': true,
		'node': true
	},
	'rules': {
		'eqeqeq': 'error',
		'no-multiple-empty-lines': [
			'error',
			{
				'max': 1
			}
		],
		'quotes': [
			'error',
			'single',
			{
				'allowTemplateLiterals': true,
                'avoidEscape': true
			}
		],
		'import/order': [
			'error',
			{
				'groups': [
					'builtin',
					'external',
					'internal',
					'parent',
					'sibling',
					'index'
				],
				'alphabetize': {
					'order': 'asc'
				}
			}
		]
	},
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
