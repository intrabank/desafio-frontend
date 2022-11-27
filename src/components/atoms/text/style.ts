import { styled } from '@stitches/react';

const color = {
	white: {
		color: '$white',
	},
	gray: {
		color: '$dark100',
	},
	darkgray: {
		color: '$dark500',
	},
	black: {
		color: '$black',
	},
	red: {
		color: '$red',
	},
};

const size = {
	sm: {
		fontSize: '$small',
	},
	md: {
		fontSize: '$normal',
	},
	lg: {
		fontSize: '$large',
	},
	xl: {
		fontSize: '$extraLarge',
	},
};

const weight = {
	thin: {
		fontWeight: '200',
	},
	light: {
		fontWeight: '300',
	},
	regular: {
		fontWeight: '400',
	},
	medium: {
		fontWeight: '500',
	},
	bold: {
		fontWeight: '700',
	},
	black: {
		fontWeight: '900',
	},
};

const variants = {
	color,
	size,
	weight,
};

const textStyles = {
	fontFamily: 'Poppins',
	variants,
};

const TextContainer = styled('p', {
	...textStyles,
});

export { TextContainer };
