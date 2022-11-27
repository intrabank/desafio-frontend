import { styled } from '@stitches/react';

export const Container = styled('div', {
	width: '43px',
	height: '11px',
	background: ' #00F2B1',
	borderRadius: '20px',

	'@media (max-width: 640px)': {
		width: '100%',
		height: '6px',
	},
});
