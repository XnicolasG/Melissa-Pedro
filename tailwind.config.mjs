import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				Belgiano:['Belgiano', 'sans-serif']
			},
			backgroundImage:{
				main : "url('/img/MPProfile.jpg')",
				mainWide : "url('/img/MPWide.jpg')",
				mainW : "url('/img/MPWideTwo.jpg')",
				lajasbg: "url('/img/las-lajas.png')",
				casaChina: "url('/img/casaChina.png')",
				casaVerde : "url('/img/casaVerde.png')",
				casaCristales: "url('/img/casaCristales.png')",
				fortunaz: "url('/img/fortunaz.png')",
				heladeria: "url('/img/heladeria20.png')",
				lasBrasas : "url('/img/lasBrasas.png')",
				LasCruces : "url('/img/lasCruces.png')",
				mrPollo : "url('/img/mrPollo.png')",
				picanteria: "url('/img/picanteria.png')",
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
