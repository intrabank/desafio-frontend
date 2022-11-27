import React from 'react';
import usePasswordToggle from '@/hooks/usePasswordToggle';
import { InputBase, InputIconContainer, Label } from '@/components/atoms';
import Error from '../error';
import { InputContainer } from './style';
import { FieldState, FieldsTypesType } from '@types';

interface Props extends React.HTMLAttributes<HTMLInputElement> {
	label: string;
	error?: string;
	state?: FieldState;
	htmlFor: string;
	type?: FieldsTypesType;
}

const Input = React.forwardRef<HTMLInputElement, Props>(
	(
		{ label, type = 'text', state = 'idle', error, htmlFor, ...props },
		_ref
	) => {
		const { passwordInputType, Icon } = usePasswordToggle();

		return (
			<InputContainer>
				<Label htmlFor={htmlFor} state={state}>
					{label}
				</Label>
				<InputBase
					aria-placeholder={label}
					aria-invalid={state === 'error'}
					type={type === 'password' ? passwordInputType : type}
					{...props}
					state={state}
				/>
				{type === 'password' && (
					<InputIconContainer>
						<Icon />
					</InputIconContainer>
				)}
				{error && <Error>{error}</Error>}
			</InputContainer>
		);
	}
);

Input.displayName = 'Input';

export default Input;
