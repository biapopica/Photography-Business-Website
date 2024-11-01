/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			xs: '375px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			'lg-xl': '1050px',
			xl: '1280px',
			'2xl': '1536px'
		},
		extend: {
			keyframes: {
				showUp: {
					'0%': { opacity: 0, transform: 'translateY(25px)' },
					'100%': { opacity: 1, transform: 'translateY(0)' }
				}
			},

			animation: {
				showUp: 'showUp 2s cubic-bezier(0.25, 1, 0.5, 1) forwards'
			},

			fontFamily: {
				MontSerrat: ['Montserrat Variable', 'MontSerrat', 'sans-serif'],
				SansPro: ['Source Sans Pro', 'sans-serif']
			},
			colors: {
				cream: '#f5eddf'
			}
		}
	},
	plugins: []
}
