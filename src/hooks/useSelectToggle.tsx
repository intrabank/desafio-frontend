import { useState } from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';

const useSelectToggle = () => {
	const [isSelectOpen, setIsSelectOpen] = useState(false);

	const toogleSelect = () => {
		setIsSelectOpen(!isSelectOpen);
	};

	const SelectArrowIcon = () => (
		<AccessibleIcon.Root label='Icon de seta para o select'>
			{isSelectOpen ? (
				<BsChevronUp width='30px' height='22px' color='#fff' />
			) : (
				<BsChevronDown width='30px' height='22px' color='#fff' />
			)}
		</AccessibleIcon.Root>
	);

	return { SelectArrowIcon, toogleSelect };
};

export default useSelectToggle;
