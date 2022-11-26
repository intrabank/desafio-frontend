import React from 'react';

import Error from '../error';
import { TextAreaBase, Label } from '@/components/atoms';
import { TextAreaContainer } from './style';

interface Props extends React.HTMLAttributes<HTMLTextAreaElement> {
	label: string;
	state?: 'idle' | 'error' | 'active';
	htmlFor: string;
	error?: string;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, Props>(
	({ label, error, state = 'idle', htmlFor, ...props }, ref) => {
		return (
			<TextAreaContainer>
				<Label htmlFor={htmlFor} state={state}>
					{label}
				</Label>
				<TextAreaBase ref={ref} {...props} state={state}></TextAreaBase>
				{error && <Error>{error}</Error>}
			</TextAreaContainer>
		);
	}
);

TextArea.displayName = 'TextAreaTextAreaBase';

export default TextArea;
