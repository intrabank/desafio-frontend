import { styled } from '@stitches/react';

export const Section = styled('section', {
	zIndex: '2',
	width: '50%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',

	'&:nth-child(2)': {
		height: '100%',
		overflowX: 'hidden',
		alignItems: 'center',
	},
	'@media (max-width: 640px)': {
		width: '100%',
		'&:nth-child(2)': {
			height: '25%',
		},
	},
});

export const ImageContainer = styled('div', {
	position: 'absolute',
	zIndex: '1',
	right: '0',
	top: '50%',
	height: '100%',
	overflow: 'hidden',
	transform: 'translateY(-50%)',
	'@media (max-width: 640px)': {
		left: '-50%',
	},
});

export const SignUpPageContainer = styled('div', {
	width: '100%',
	height: '100vh',
	display: 'flex',
	justifyContent: 'space-evenly',
	alignItems: 'center',
	overflow: 'hidden',
	'@media (max-width: 640px)': {
		overflow: 'unset',
		flexDirection: 'column-reverse',
		alignItems: 'flex-start',
		justifyContent: 'center',
		height: '100%',
		paddingBottom: '5%',
	},
});

export const TextContainer = styled('div', {
	width: '50%',
	display: 'flex',
	flexDirection: 'column',
	gap: '$200',

	'@media (max-width: 640px)': {
		height: '100%',
		width: '100%',
		padding: '15%',
		textAlign: 'center',
	},
});
