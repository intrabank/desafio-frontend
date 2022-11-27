import { color, size, typeAs, weight } from '@types';
import { TextContainer } from './style';

type TextProps = {
	children: string;
	weight?: weight;
	size?: size;
	color?: color;
	as?: typeAs;
};

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
