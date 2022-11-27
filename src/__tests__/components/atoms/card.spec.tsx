import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from '../../../components/atoms/card';
import renderer from 'react-test-renderer';

describe('Card', () => {
	it('should render card component', () => {
		const tree = renderer.create(<Card>Test</Card>).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should render multiple children', () => {
		render(
			<Card>
				<h1>Test</h1>
				<p>Test 2</p>
				<button>Test 3</button>
			</Card>
		);

		expect(screen.getByText('Test')).toBeInTheDocument();
		expect(screen.getByText('Test 2')).toBeInTheDocument();
		expect(screen.getByText('Test 3')).toBeInTheDocument();
	});
});
