import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TextAreaBase from '../../../components/atoms/textAreaBase';
import renderer from 'react-test-renderer';

describe('TextAreaBase', () => {
	it('should render card component', () => {
		const tree = renderer
			.create(<TextAreaBase state='idle' type='text' />)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should render error state', () => {
		render(<TextAreaBase placeholder='test' state='error' type='text' />);
		const input = screen.getByPlaceholderText('test');

		expect(input).toBeInTheDocument();
	});

	it('should render active state', () => {
		render(<TextAreaBase placeholder='test' state='active' type='text' />);
		const input = screen.getByPlaceholderText('test');

		expect(input).toBeInTheDocument();
	});
});
