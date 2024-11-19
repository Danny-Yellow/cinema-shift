/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	plugins: [],
	theme: {
		extend: {
			colors: {
				black: '#141C24',
				'dark-primary': '#712D9C',
				gray: '#637083',
				light: '#CED2DA',
				medium: '#97A1AF',
				neutral: '#344051',
				primary: '#9534D2',
				secondary: '#F3F4F6',
			},
			gridTemplateColumns: {
				'auto-fill-300': 'repeat(auto-fill, 300px)',
			},
		},
		screens: {
			md: { max: '978px' },
			sm: { max: '620px' },
		},
	},
};
