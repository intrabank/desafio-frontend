import { styled } from '@stitches/react';

export const ButtonContainer = styled('button', {
	all: 'unset',
	cursor: 'pointer',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	width: 'calc(100% - 24px)',
	padding: '22px 16px 22px 16px',
	backgroundColor: '$green',
	borderRadius: '8px',
	transition: 'all 0.2s ease-in-out',

	'&:not([disabled]):hover': {
		filter: 'brightness(80%)',
	},
	'&:disabled': {
		backgroundColor: '$dark950',
		color: '$dark500',
		cursor: 'not-allowed',
	},
});
