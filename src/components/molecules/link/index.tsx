import { StyledLink } from './style';
import NextLink from 'next/link';
interface Props extends React.HTMLAttributes<HTMLAnchorElement> {
	children: React.ReactNode;
	href: string;
}

const Link = ({ children, href, ...props }: Props) => {
	return (
		<NextLink passHref href={href}>
			<StyledLink {...props}>{children}</StyledLink>
		</NextLink>
	);
};

export default Link;
