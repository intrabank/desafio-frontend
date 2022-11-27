import { Text } from '@/components/atoms';
import { Container } from './style';

type Props = {
	inititals?: string;
};

const UserIcon = ({ inititals }: Props) => {
	return (
		<Container>
			{inititals && (
				<Text as='span' color='black' weight='medium' size='lg'>
					{inititals}
				</Text>
			)}
		</Container>
	);
};

export default UserIcon;
