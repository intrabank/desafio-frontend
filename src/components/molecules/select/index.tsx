import React from 'react';
import useSelectToggle from '@/hooks/useSelectToggle';
import { InputIconContainer, SelectItem } from '@/components/atoms';
import { countries } from './countries';
import { SelectContainer, StyledSelect } from './style';

interface Props extends React.HTMLAttributes<HTMLSelectElement> {
	state?: 'idle' | 'error' | 'active';
}

const Select = React.forwardRef<HTMLInputElement, Props>(
	({ state = 'idle', ...props }, _ref) => {
		const { SelectArrowIcon, toogleSelect } = useSelectToggle();

		return (
			<SelectContainer>
				<StyledSelect onClick={toogleSelect} {...props}>
					<SelectItem disabled value=''>
						Selecionar País
					</SelectItem>
					{countries.map((country, key) => (
						<SelectItem key={key} value={country}>
							{country}
						</SelectItem>
					))}
				</StyledSelect>
				<InputIconContainer>
					<SelectArrowIcon />
				</InputIconContainer>
			</SelectContainer>
		);
	}
);

export default Select;

Select.displayName = 'Select';
