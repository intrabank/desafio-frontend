import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import SelectItem from '@/components/atoms/selectItem';

describe('SelectItem', () => {
	it('should render label component', () => {
		const tree = renderer.create(<SelectItem>Test</SelectItem>).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
