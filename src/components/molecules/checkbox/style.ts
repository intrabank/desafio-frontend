import { styled } from '@stitches/react';

export const CheckboxContainer = styled('div', {
	display: 'flex',
	alignItems: 'center',
	gap: '8px',
	'input[type=checkbox]': {
		backgroundColor: '#ff0d4e',
		color: '$black',
		filter: 'invert(1)',
		width: '20px',
		height: '20px',
	},
});
