import { styled } from '@stitches/react';

const state = {
	error: {
		border: '1px solid $red',
	},
	active: {},
	idle: {
		border: '1px solid $dark800',
	},
};

const variants = {
	state,
};

export const TextAreaContainer = styled('textarea', {
	variants,
	padding: '22px 16px 3px 16px',
	width: '100%',

	color: '$white',
	background: '$dark950',
	borderRadius: '8px',
	resize: 'none',
	'&:focus': {
		border: '1.5px solid $dark100',
	},
});
