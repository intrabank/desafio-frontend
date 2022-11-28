import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Input from '@/components/molecules/input';
import { render, screen } from '@testing-library/react';

describe('Input', () => {
	it('should render input', () => {
		const tree = renderer
			.create(<Input label='Teste' htmlFor='teste' />)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should render input with error', () => {
		render(
			<Input label='Teste' placeholder='teste' htmlFor='teste' state='error' />
		);

		const input = screen.getByPlaceholderText('teste');
		const label = screen.getByText('Teste');

		expect(input.getAttribute('aria-invalid')).toBe('true');
		expect(label.innerHTML).toBe('Teste<span> *</span>');
	});

	it('should render input with error', () => {
		render(
			<Input label='Teste' placeholder='teste' htmlFor='teste' state='active' />
		);

		const input = screen.getByPlaceholderText('teste');
		const label = screen.getByText('Teste');

		expect(input.getAttribute('aria-invalid')).toBe('false');
		expect(label.innerHTML).toBe('Teste');
	});

	it('should render input with toggle password type', () => {
		render(
			<Input
				label='Teste'
				placeholder='teste'
				htmlFor='teste'
				type='password'
				state='active'
			/>
		);

		const input = screen.getByPlaceholderText('teste');
		const label = screen.getByText('Teste');

		expect(input.getAttribute('aria-invalid')).toBe('false');
		expect(label.innerHTML).toBe('Teste');
	});

	it('should render error message', () => {
		render(
			<Input
				label='Teste'
				placeholder='teste'
				htmlFor='teste'
				type='password'
				error='Error message'
				state='error'
			/>
		);

		const errorMessage = screen.getByText('Error message');

		expect(errorMessage).toBeInTheDocument();
	});
});
