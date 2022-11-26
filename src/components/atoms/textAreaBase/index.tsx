import React from 'react';
import { TextAreaContainer } from './style';

interface Props extends React.HTMLAttributes<HTMLTextAreaElement> {
	value?: string;
	state: 'idle' | 'error' | 'active';
}

const TextAreaBase = React.forwardRef<HTMLTextAreaElement, Props>(
	({ state, ...props }, ref) => {
		return (
			<TextAreaContainer {...props} ref={ref} state={state}></TextAreaContainer>
		);
	}
);
TextAreaBase.displayName = 'TextAreaBase';

export default TextAreaBase;
