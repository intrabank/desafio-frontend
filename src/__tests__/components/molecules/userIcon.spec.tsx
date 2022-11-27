import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import UserIcon from '@/components/molecules/userIcon';

describe('UserIcon', () => {
	it('should render user icon component', () => {
		const tree = renderer.create(<UserIcon />).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should render user initials ', () => {
		render(<UserIcon inititals='JP' />);

		const initials = screen.getByText('JP');
		expect(initials).toBeInTheDocument();
	});
});
