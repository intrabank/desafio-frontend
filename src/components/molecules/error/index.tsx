import { Text } from '@/components/atoms';

type Props = {
	children: string;
};

const Error = ({ children }: Props) => {
	return (
		<Text as='span' size='sm' color='red'>
			{children}
		</Text>
	);
};

export default Error;
