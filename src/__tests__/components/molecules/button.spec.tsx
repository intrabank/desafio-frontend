import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Button from '../../../components/molecules/button';

describe('Button', () => {
	it('should render button component', () => {
		const tree = renderer.create(<Button>Button text</Button>).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
