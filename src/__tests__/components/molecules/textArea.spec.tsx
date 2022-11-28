import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import TextArea from '@/components/molecules/textarea';
import { render, screen } from '@testing-library/react';

describe('TextArea', () => {
	it('should render textarea', () => {
		const tree = renderer
			.create(<TextArea label='Teste' htmlFor='teste' />)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should render textarea with error', () => {
		render(<TextArea label='Teste' htmlFor='teste' state='error' />);

		const textarea = screen.findByRole('textbox');
		const label = screen.getByText('Teste');

		expect(label.innerHTML).toBe('Teste<span> *</span>');
	});

	it('should render textArea with no error', () => {
		render(
			<TextArea
				label='Teste'
				placeholder='teste'
				htmlFor='teste'
				state='active'
			/>
		);

		const textarea = screen.getByPlaceholderText('teste');
		const label = screen.getByText('Teste');

		expect(textarea.getAttribute('aria-invalid')).toBe('false');
		expect(label.innerHTML).toBe('Teste');
	});

	it('should render error message', () => {
		render(
			<TextArea
				label='Teste'
				placeholder='teste'
				htmlFor='teste'
				error='Error message'
				state='error'
			/>
		);

		const errorMessage = screen.getByText('Error message');

		expect(errorMessage).toBeInTheDocument();
	});
});
