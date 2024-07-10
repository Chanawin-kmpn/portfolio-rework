import type { Config } from 'tailwindcss';

const config: Config = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	theme: {
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
			keyframes: {
				wave: {
					from: { transform: 'rotate(0deg)' },
					to: { transform: 'rotate(45deg)' },
				},
				flipIn: {
					'0%': { opacity: '0', transform: 'rotateX(-90deg)' },
					'50%': { opacity: '1', transform: 'rotateX(0deg)' },
					'100%': { opacity: '0', transform: 'rotateX(90deg)' },
				},
				gradientButton: {
					from: { 'background-position': '100% 0%' },
					to: { 'background-position': '0% 0%' },
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
			},
			animation: {
				fadeIn: 'fadeIn 250ms cubic-bezier(0.4, 0, 0.2, 1)',
				waveHand: 'wave 1s linear infinite alternate',
				flipIn: 'flipIn 1.5s forwards',
				flipInDelay: 'flipIn 1.5s forwards 1.5s',
				gradientBtn: 'gradientButton 10s ease-in-out infinite',
				gradientText: 'gradientText 20s ease-in-out infinite alternate',
			},
			transformOrigin: {
				'top-center': '0% 100%',
			},
			backgroundImage: {
				'gradient-btn': `radial-gradient(
				  circle at top left,
				  hsl(325deg, 100%, 48%),
				  hsl(325deg, 100%, 48%),
				  hsl(325deg, 100%, 48%),
				  hsl(260deg, 100%, 55%),
				  hsl(230deg, 100%, 45%),
				  hsl(240deg, 100%, 45%),
				  hsl(325deg, 100%, 48%),
				  hsl(325deg, 100%, 48%),
				  hsl(325deg, 100%, 48%)
				)`,
			},
			backgroundSize: {
				'300%': '300%',
				'600%': '600%',
			},
			borderRadius: {
				custom: '4px',
				'custom-top': '20px 20px 100px 100px / 14px 14px 30px 30px',
			},
			padding: {
				btn: '1rem 2rem',
			},
			transitionProperty: {
				transform: 'transform',
			},
			transitionDuration: {
				'250': '250ms',
			},
		},
	},
	plugins: [
		function ({ addComponents }: any) {
			addComponents({
				'.gradient-btn': {
					'background-size': '600%',
					'border-radius': '4px',
					'will-change': 'transform',
					transition: 'transform 250ms',
					padding: '1rem 2rem',
					'&::before': {
						content: '""',
						position: 'absolute',
						zIndex: '1',
						top: '2px',
						left: '6px',
						right: '6px',
						height: '20%',
						margin: '0 auto',
						background:
							'linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0))',
						borderRadius: '20px 20px 100px 100px / 14px 14px 30px 30px',
					},
					'&::after': {
						content: '""',
						position: 'absolute',
						zIndex: '1',
						bottom: '0px',
						left: '0px',
						right: '0px',
						height: '30%',
						background:
							'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.17))',
						borderRadius: '0px 0px 4px 4px',
					},
				},
			});
		},
	],
};
export default config;
