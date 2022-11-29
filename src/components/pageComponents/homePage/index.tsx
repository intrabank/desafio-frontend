import { Card, Text } from '@/components/atoms';
import Link from '@/components/molecules/link';
import React from 'react';
import Image from 'next/image';
import { Container, HelloCardContainer, ImageContainer } from './style';
import HelloCard from '@/components/organisms/helloCard';

const HomePage = (props: Props) => {
	return (
		<Container>
			<HelloCardContainer>
				<HelloCard />
			</HelloCardContainer>
			<ImageContainer>
				<Image
					width={923.85}
					height={880.64}
					layout='fill'
					src='/assets/Globe.svg'
					alt='Globo'
				/>
			</ImageContainer>
		</Container>
	);
};

export default HomePage;
