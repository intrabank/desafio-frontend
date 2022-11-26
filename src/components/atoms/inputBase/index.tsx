import { FieldState, FieldsTypesType } from '@types';
import React from 'react';
import { InputContainer } from './style';

interface Props extends React.HTMLAttributes<HTMLInputElement> {
	value?: string;
	type: FieldsTypesType;
	state: FieldState;
}

const InputBase = React.forwardRef<HTMLInputElement, Props>(
	({ state = 'idle', type, ...props }, ref) => {
		return <InputContainer ref={ref} {...props} type={type} state={state} />;
	}
);

InputBase.displayName = 'InputBase';

export default InputBase;
