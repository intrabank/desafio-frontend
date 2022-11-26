import React from 'react';
import { Container } from './style';

type Props = {
	children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
	return <Container>{children}</Container>;
};

export default Layout;
