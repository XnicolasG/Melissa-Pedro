import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
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
