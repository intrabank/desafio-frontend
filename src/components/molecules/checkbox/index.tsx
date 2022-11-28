import React from 'react';
import { Text } from '@/components/atoms';
import { CheckboxContainer } from './style';

interface Props extends React.HTMLAttributes<HTMLInputElement> {
	text: string;
}

const Checkbox = React.forwardRef<HTMLInputElement, Props>(
	({ text, ...props }, ref) => {
		return (
			<CheckboxContainer>
				<input ref={ref} {...props} type='checkbox' />
				<Text weight='light' size='sm' as='span'>
					{text}
				</Text>
			</CheckboxContainer>
		);
	}
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
