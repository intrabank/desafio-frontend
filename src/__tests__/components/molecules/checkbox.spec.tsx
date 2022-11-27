import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Checkbox from '../../../components/molecules/checkbox';

describe('Checkbox', () => {
	it('should render checkbox component', () => {
		const tree = renderer
			.create(<Checkbox text='this is an checkbox text' />)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
