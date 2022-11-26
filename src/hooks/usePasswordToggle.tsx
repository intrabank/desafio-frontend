import { useState } from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

const usePasswordToggle = () => {
	const [visible, setVisiblity] = useState(false);

	const Icon = () => (
		<AccessibleIcon.Root label='Icone de olho para senha'>
			{visible ? (
				<BsEyeSlash
					onClick={() => {
						setVisiblity(false);
					}}
					width='30px'
					height='22px'
					color='#888888'
				/>
			) : (
				<BsEye
					width='30px'
					height='22px'
					color='#888888'
					onClick={() => {
						setVisiblity(true);
					}}
				/>
			)}
		</AccessibleIcon.Root>
	);

	const passwordInputType: 'text' | 'email' | 'password' | 'date' = visible
		? 'text'
		: 'password';

	return { passwordInputType, Icon };
};

export default usePasswordToggle;
