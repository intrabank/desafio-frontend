import Image from 'next/image';
import { Container, HelloCardContainer, ImageContainer } from './style';
import HelloCard from '@/components/organisms/helloCard';

const HomePage = () => {
	return (
		<Container>
			<HelloCardContainer>
				<HelloCard />
			</HelloCardContainer>
			<ImageContainer>
				<Image layout='fill' src='/assets/Globe.svg' alt='Globo' />
			</ImageContainer>
		</Container>
	);
};

export default HomePage;
