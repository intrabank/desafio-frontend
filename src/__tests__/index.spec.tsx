import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../pages/index';

describe('Home', () => {
	it('renders a heading', () => {
		const { getByText } = render(<Home />);

		const heading = getByText('Teste frontend');
		expect(heading).toBeInTheDocument();
	});
});
