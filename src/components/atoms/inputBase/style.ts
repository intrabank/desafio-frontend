import { styled } from '@stitches/react';

const state = {
	error: {
		border: '1px solid $red',
	},
	idle: {
		border: '1px solid $dark800',
	},
	active: {
		border: '1px solid $dark800',
	},
};

const variants = {
	state,
};

const inputStyles = {
	variants,
	padding: '22px 16px 3px 16px',
	flex: '1',
	color: '$white',
	background: '$dark950',
	borderRadius: '8px',

	'&:focus': {
		border: '1.5px solid $dark100',
	},
};

export const InputContainer = styled('input', {
	...inputStyles,
});
