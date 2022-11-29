import { styled } from '@stitches/react';

export const CheckboxContainer = styled('div', {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	gap: '8px',
	width: '100%',
	marginTop: '$200',
	'input[type=checkbox]': {
		backgroundColor: '#ff0d4e',
		color: '$black',
		filter: 'invert(1)',
		width: '20px',
		height: '20px',
	},
});
