import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage:{
				main : "url('/img/MPProfile.jpg')",
				mainWide : "url('/img/MPWide.jpg')",
				mainW : "url('/img/MPWideTwo.jpg')",
				lajasbg: "url('/img/las-lajas.png')"

			},
			grayscale: {
				70: '70%',
			},
			fill: {
				'red-500': '#ef4444',
			}
		},
	},
	plugins: [],
}
