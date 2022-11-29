import { styled } from '@stitches/react';

export const Container = styled('div', {
	width: '80%',
	height: '90%',
});

export const FormHeaderContainer = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	gap: '$100',
	justifyContent: 'center',
	alignItems: 'center',
	textAlign: 'center',
	marginBottom: '$300',
});

export const FormFieldsContainer = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
	gap: '$150',
	width: '100%',
	minHeight: '100%',
	textarea: {
		'&:last-child': {
			marginBottom: '$100',
		},
	},
});

export const FormStyled = styled('form', {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	width: '100%',
	height: '100%',
});

export const FormContainer = styled('div', {
	height: '100%',
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-around',
	alignItems: 'center',
});
