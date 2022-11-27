import { styled } from '@stitches/react';

export const Container = styled('div', {
	display: 'grid',
	placeItems: 'center',
	width: '100%',
});

export const UserCardContainer = styled('div', {
	width: '55%',
	height: '60%',
});

export const ImageContainer = styled('div', {
	position: 'absolute',
	width: '100%',
	height: '100%',
	zIndex: '1',
	display: 'grid',
	placeItems: 'center',
});
