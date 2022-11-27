import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import InputBase from '../../../components/atoms/inputBase';
import renderer from 'react-test-renderer';

describe('InputBase', () => {
	it('should render card component', () => {
		const tree = renderer
			.create(<InputBase state='idle' type='text' />)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should render error state', () => {
		render(<InputBase placeholder='test' state='error' type='text' />);
		const input = screen.getByPlaceholderText('test');

		expect(input).toBeInTheDocument();
	});

	it('should render active state', () => {
		render(<InputBase placeholder='test' state='active' type='text' />);
		const input = screen.getByPlaceholderText('test');

		expect(input).toBeInTheDocument();
	});

	it('should render whhen different  type', () => {
		render(<InputBase placeholder='test' state='active' type='password' />);
		const input = screen.getByPlaceholderText('test');

		expect(input).toBeInTheDocument();
	});
});
