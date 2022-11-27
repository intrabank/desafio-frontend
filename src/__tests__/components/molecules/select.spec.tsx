import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Select from '@/components/molecules/select';

describe('Select', () => {
	it('should render user icon component', () => {
		const tree = renderer.create(<Select />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
