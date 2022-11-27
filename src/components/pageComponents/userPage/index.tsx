import UserCard from '@/components/organisms/userCard';
import { FormatedUser, User } from '@types';
import Image from 'next/image';
import { Container, ImageContainer, UserCardContainer } from './style';
type Props = {
	user: FormatedUser;
};

const UserPageComponent = ({ user }: Props) => {
	return (
		<Container>
			<UserCardContainer>
				<UserCard user={user} />
			</UserCardContainer>

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

export default UserPageComponent;
