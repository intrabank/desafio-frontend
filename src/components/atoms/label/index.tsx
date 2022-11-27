import { FieldState } from '@types';
import { LabelStyle } from './style';

interface Props extends React.HTMLAttributes<HTMLLabelElement> {
	children: string;
	state?: FieldState;
	htmlFor: string;
}

const Label = ({ children, state = 'idle', ...props }: Props) => {
	return (
		<LabelStyle state={state} {...props}>
			{children}
			{state === 'error' && <span> *</span>}
		</LabelStyle>
	);
};

export default Label;
