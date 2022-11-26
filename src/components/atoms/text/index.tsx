import { TextContainer } from './style';
import { TextProps } from './types';

const Text = ({
	children,
	as = 'p',
	color = 'white',
	size = 'md',
	weight = 'medium',
}: TextProps) => {
	return (
		<TextContainer as={as} color={color} size={size} weight={weight}>
			{children}
		</TextContainer>
	);
};

export default Text;
