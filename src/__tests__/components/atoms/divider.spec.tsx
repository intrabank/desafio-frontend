import '@testing-library/jest-dom';
import Divider from '../../../components/atoms/divider';
import renderer from 'react-test-renderer';

describe('Divider', () => {
	it('should render card component', () => {
		const tree = renderer.create(<Divider />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
