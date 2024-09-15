import type { Config } from 'tailwindcss';

const config: Config = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	prefix: '',
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			fontFamily: {
				baiJamjuree: ['var(--font-bai-jamjuree)'],
			},
			colors: {
				dark: {
					100: '#000000',
					200: '#121212',
				},
				light: {
					900: '#FFFFFF',
					800: '#E0E0E2',
				},
				'custom-pink': 'hsl(325deg, 100%, 48%)',
				'custom-blue': 'hsl(230deg, 100%, 45%)',
				'custom-purple': 'hsl(260deg, 100%, 55%)',
			},
			backgroundImage: {
				'gradient-radial':
					'radial-gradient(circle at top left, hsl(325deg, 100%, 48%), hsl(325deg, 100%, 48%), hsl(325deg, 100%, 48%), hsl(260deg, 100%, 55%), hsl(230deg, 100%, 45%), hsl(240deg, 100%, 45%), hsl(325deg, 100%, 48%), hsl(325deg, 100%, 48%), hsl(325deg, 100%, 48%))',
			},
			keyframes: {
				gradientMove: {
					'0%': { backgroundPosition: '100% 0%' },
					'100%': { backgroundPosition: '0% 0%' },
				},
				wave: {
					from: { transform: 'rotate(0deg)' },
					to: { transform: 'rotate(45deg)' },
				},
				flipIn: {
					'0%': { opacity: '0', transform: 'rotateX(-90deg)' },
					'50%': { opacity: '1', transform: 'rotateX(0deg)' },
					'100%': { opacity: '0', transform: 'rotateX(90deg)' },
				},
				gradientText: {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' },
				},
				fadeIn: {
					from: { opacity: '0' },
					to: { opacity: '1' },
				},
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
			},
			animation: {
				'gradient-move': 'gradientMove 10s ease-in-out infinite',
				fadeIn: 'fadeIn 250ms cubic-bezier(0.4, 0, 0.2, 1)',
				waveHand: 'wave 1s linear infinite alternate',
				flipIn: 'flipIn 1.5s forwards',
				flipInDelay: 'flipIn 1.5s forwards 1.5s',
				gradientText: 'gradientText 20s ease-in-out infinite alternate',
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
			transformOrigin: {
				'top-center': '0% 100%',
			},
			backgroundSize: {
				'300%': '300%',
				'600%': '600%',
				'200-100': '200% 100%',
			},
			transitionDuration: {
				'250': '250',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
};

export default config;
