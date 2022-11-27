import UserCard from '@/components/organisms/userCard';
import Image from 'next/image';
import { Container, ImageContainer } from './style';

const UserPageComponent = () => {
	return (
		<Container>
			<ImageContainer>
				<UserCard />
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

export default UserPageComponent;
