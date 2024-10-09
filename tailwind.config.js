/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			primary: '#9534D2',
		},
		screens: {
			md: { max: '978px' },
			sm: { max: '620px' },
		},
		extend: {},
	},
	plugins: [],
};
