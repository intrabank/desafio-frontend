import * as RadixLabel from '@radix-ui/react-label';
import { styled } from '@stitches/react';

const state = {
	idle: {
		fontSize: '$normal',
		fontWeight: 'normal',
		top: '50%',
		left: '16px',
		transform: '  translateY( calc(-50% - 2px))',
	},

	active: {},

	error: {
		span: {
			color: '$red',
		},
	},
};

const variants = {
	state,
};
export const LabelStyle = styled(RadixLabel.Root, {
	variants,
	fontSize: '$extraSmall',
	pointerEvents: 'none',
	left: '16px',
	top: '9px',
	fontWeight: 'medium',
	position: 'absolute',
	color: '$dark500',
	transition: 'all 0.1s ease-in-out',
});
