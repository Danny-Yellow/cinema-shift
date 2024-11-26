import { eslint } from '@siberiacancode/eslint';

export default eslint(
	{
		typescript: true,
	},
	{
		rules: {
			'node/prefer-global/process': ['error', 'always'],
			'perfectionist/sort-jsx-props': [
				'error',
				{
					customGroups: {
						callback: 'on*',
						reserved: ['key', 'ref'],
					},
					groups: ['shorthand', 'reserved', 'multiline', 'unknown', 'callback'],
					order: 'asc',
					type: 'alphabetical',
				},
			],
			'regexp/no-obscure-range': 'off',
			'siberiacancode-react/prop-types': 'off',
		},
	},
);
