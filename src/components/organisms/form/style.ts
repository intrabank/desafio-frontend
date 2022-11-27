import { styled } from '@stitches/react';

export const Container = styled('div', {
	width: '80%',
	height: '60%',
});

export const FormHeaderContainer = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	gap: '$100',
	justifyContent: 'center',
	alignItems: 'center',
	marginBottom: '$300',
});

export const FormFieldsContainer = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	gap: '$200',
	width: '100%',
	height: '100%',
	flexWrap: 'wrap',

	marginBottom: '$300',
});

export const FormContainer = styled('form', {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	width: '100%',
	height: '100%',
});
