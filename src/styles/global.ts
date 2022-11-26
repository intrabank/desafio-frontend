import { createStitches, ScaleValue, PropertyValue } from '@stitches/react';

export const { styled, theme, keyframes, css, globalCss } = createStitches({
	theme: {
		colors: {
			dark1000: '#121212',
			white: '#ffffff',
			dark100: '#E7E7E7',
			dark200: '#B8B8B8',
			dark400: '#A0A0A0',
			dark500: '#888888',
			dark800: '#414141',
			dark950: '#202020',
			dark975: '#141414',
			black: '#000000',
			green: '#00F2B1',
			red: '#FA4D56',
			secondary500: '#47E0FF',
		},
		fontSizes: {
			extraSmall: '0.75rem',
			small: '0.875rem',
			normal: '1.125rem',
			large: '1.5625rem',
			extraLarge: '2.8125rem',
		},
		space: {
			50: '.25rem',
			100: '.5rem',
			200: '1rem',
			300: '1.5rem',
			400: '2rem',
			500: '2.5rem',
		},
	},

	media: {
		mobile: '(min-width: 480px)',
		tablet: '(min-width: 720px)',
		desktop: '(min-width: 1280px)',
	},
});

export const globalStyles = globalCss({
	'*, *::before, *::after': {
		margin: 0,
		padding: 0,
		boxSizing: 'border-box',
		fontFamily: 'Poppins',
		'-webkit-font-smoothing': 'antialiased',
	},
});
