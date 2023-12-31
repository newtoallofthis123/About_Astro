/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				primaryDark: '#181c16',
				primaryWhite: '#f7fafc',
				primaryWhiteText: '#f7fafc',
				primaryBlackText: '#1a202c',
			}
		},
	},
	darkMode: 'class',
	plugins: [],
}
