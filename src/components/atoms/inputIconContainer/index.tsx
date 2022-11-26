import React from 'react';
import { IconContainer } from './style';

type Props = {
	children: React.ReactNode;
};

const InputIconContainer = ({ children }: Props) => {
	return <IconContainer>{children}</IconContainer>;
};

export default InputIconContainer;
