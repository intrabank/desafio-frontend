import { styled } from '@stitches/react';

export const StyledLink = styled('a', {
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

	'&:hover': {
		filter: 'brightness(80%)',
	},
});
