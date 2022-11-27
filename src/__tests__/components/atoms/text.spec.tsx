import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Text from '../../../components/atoms/text';
import renderer from 'react-test-renderer';

describe('Text', () => {
	it('should render text', () => {
		const tree = renderer.create(<Text>Test</Text>).toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should change with variants', () => {
		render(
			<Text as='h1' size='xl' weight='bold'>
				Test
			</Text>
		);
		const text = screen.getByText('Test');
		const styles = getComputedStyle(text);

		expect(styles.fontSize).toBe('2em');
		expect(styles.fontWeight).toBe('bold');
		expect(text.tagName).toBe('H1');
	});
});
