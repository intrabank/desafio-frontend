import { styled } from '@stitches/react';

export const Section = styled('section', {
	position: 'relative',
	zIndex: '2',
	width: '50%',
	display: 'flex',
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
	transform: 'translateY(-50%)',
	'@media (max-width: 640px)': {
		left: '-50%',
	},
});

export const SignUpPageContainer = styled('div', {
	width: '100%',
	height: '100%',
	display: 'flex',
	justifyContent: 'space-evenly',
	alignItems: 'center',
	position: 'relative',
	overflow: 'hidden',
	'@media (max-width: 640px)': {
		flexDirection: 'column-reverse',
		alignItems: 'flex-start',
		justifyContent: 'center',
	},
});

export const TextContainer = styled('div', {
	width: '50%',
	display: 'flex',
	flexDirection: 'column',
	gap: '$200',

	'.green-divider': {
		width: '43px',
		height: '11px',
		background: ' #00F2B1',
		borderRadius: '20px',
	},
	'@media (max-width: 640px)': {
		width: '100%',
		padding: '0 15%',
		textAlign: 'center',
		'.green-divider': {
			width: '100%',
			height: '6px',
		},
	},
});
