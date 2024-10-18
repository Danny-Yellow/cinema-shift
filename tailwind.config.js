/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			md: { max: '978px' },
			sm: { max: '620px' },
		},
		extend: {
			colors: {
				black: '#141C24',
				neutral: '#344051',
				gray: '#637083',
				light: '#CED2DA',
				primary: '#9534D2',
				secondary: '#F3F4F6',
			},
			gridTemplateColumns: {
				'auto-fill-300': 'repeat(auto-fill, 300px)',
			},
		},
	},
	plugins: [],
};
