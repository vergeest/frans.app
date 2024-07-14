/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['Atkinson Hyperlegible', 'system-ui', 'sans-serif'],
			serif: ['Platypi Variable', 'serif'],
			logo: ['Silkscreen', 'system-ui']
		},
		colors: {
			orange: '#FFE800',
			pink: '#FF00A8',
			blue: '#00A3FF',
			green: '#00FFD1',
			white: '#EFEFEF',
			black: '#000000',
			muted: '#111111'
		},
		extend: {
			keyframes: {
				'fade-in': {
					from: { opacity: 0, transform: 'translateY(-10px)' },
					to: { opacity: 1 }
				},
				'translate-down': {
					to: { transform: 'translateY(100px)', filter: 'blur(16px)' }
				}
			},
			animation: {
				'fade-in': 'fade-in 1s ease both',
				'translate-down': 'translate-down linear both'
			}
		}
	},
	plugins: []
};
