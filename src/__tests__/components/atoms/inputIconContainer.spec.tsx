import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import InputIconContainer from '../../../components/atoms/inputIconContainer';

describe('InputIconContainer', () => {
	it('should render card component', () => {
		const tree = renderer
			.create(
				<InputIconContainer>
					<i></i>
				</InputIconContainer>
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
