import { Text } from '@/components/atoms';
import { Container } from './style';

type Props = {
	placeholder?: string;
};

const UserIcon = ({ placeholder }: Props) => {
	return (
		<Container>
			{placeholder && (
				<Text as='span' color='black' weight='medium' size='lg'>
					{placeholder}
				</Text>
			)}
		</Container>
	);
};

export default UserIcon;
