import { styled } from '@stitches/react';

const state = {
	error: {
		border: '1px solid $red',
	},
	idle: {
		border: '1px solid $dark800',
	},
	active: {
		color: '$white',
	},
};

const variants = {
	state,
};

export const SelectContainer = styled('div', {
	position: 'relative',
});

export const StyledSelect = styled('select', {
	variants,
	'-webkit-appearance': 'none',
	'-moz-appearance': 'none',

	padding: '3px 16px 3px 16px',
	width: '100%',
	height: '56px',
	color: '$dark500',
	background: '$dark950',
	borderRadius: '8px',
	fontSize: '$normal',

	'&:focus': {
		border: '1.5px solid $dark100',
	},

	'&::-ms-expand': {
		display: 'none',
	},
});
