import { CardContainer } from './style';

interface Props {
	children: React.ReactNode;
}
const Card = ({ children }: Props) => {
	return <CardContainer>{children}</CardContainer>;
};

export default Card;
