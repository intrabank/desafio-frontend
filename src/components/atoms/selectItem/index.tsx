import React from 'react';
import { SelectItemContainer } from './style';

interface Props extends React.HTMLAttributes<HTMLOptionElement> {
	children: string;
	value?: string;
	disabled?: boolean;
}

const SelectItem = ({ children, value, disabled = false, ...props }: Props) => {
	return (
		<SelectItemContainer disabled={disabled} {...props} value={value}>
			{children}
		</SelectItemContainer>
	);
};

export default SelectItem;
