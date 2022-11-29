import { StyledLink } from './style';
import NextLink from 'next/link';
interface Props extends React.HTMLAttributes<HTMLAnchorElement> {
	children: React.ReactNode;
	href: string;
}

const Link = ({ children, href, ...props }: Props) => {
	return (
		<NextLink {...props} passHref href={href}>
			<StyledLink>{children}</StyledLink>
		</NextLink>
	);
};

export default Link;
