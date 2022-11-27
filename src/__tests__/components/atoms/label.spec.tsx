import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Label from '../../../components/atoms/label';

describe('Label', () => {
	it('should render label component', () => {
		const tree = renderer.create(<Label htmlFor='teste'>Test</Label>).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should render label  with out asterisc if is not type error', () => {
		render(
			<Label state='idle' htmlFor='teste'>
				Test
			</Label>
		);

		expect(screen.getByText('Test')).toBeInTheDocument();
		expect(screen.queryByText('*')).not.toBeInTheDocument();
	});

	it('should render label  with  asterisc if type error', () => {
		render(
			<Label state='error' htmlFor='teste'>
				Test
			</Label>
		);

		expect(screen.getByText('Test')).toBeInTheDocument();
		expect(screen.getByText('*')).toBeInTheDocument();
	});
});
