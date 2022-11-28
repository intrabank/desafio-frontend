import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Error from '@/components/molecules/error';

describe('Error', () => {
	it('should render error component', () => {
		const tree = renderer.create(<Error>Error</Error>).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
