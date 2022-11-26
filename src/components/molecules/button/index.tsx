import { ButtonContainer } from './style';

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	disabled?: boolean;
}

const Button = ({ children, disabled, ...props }: Props) => {
	return (
		<ButtonContainer type='submit' disabled={disabled} {...props}>
			{children}
		</ButtonContainer>
	);
};

export default Button;
