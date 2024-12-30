/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	plugins: [],
	theme: {
		extend: {
			boxShadow: {
				tooltip: '0 0 15px 0 rgba(0, 0, 0, 0.3)',
			},
			colors: {
				black: '#141C24',
				'dark-primary': '#712D9C',
				gray: '#637083',
				light: '#CED2DA',
				medium: '#97A1AF',
				neutral: '#344051',
				positive: '#4ECF53',
				primary: '#9534D2',
				secondary: '#F3F4F6',
				succes: '#ECF9F2',
				yellow: '#FDD442',
			},
			gridTemplateColumns: {
				'auto-fill-300': 'repeat(auto-fill, 300px)',
			},
		},
		screens: {
			md: { max: '978px' },
			sm: { max: '590px' },
		},
	},
};
