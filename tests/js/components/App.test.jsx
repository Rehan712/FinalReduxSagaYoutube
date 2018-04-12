import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { App } from '../../../src/js/components/App';

Enzyme.configure({ adapter: new Adapter() });

describe('Test App Component', () => {
	const getVideos = jest.fn();
	const wrapper = shallow(<App getVideos={getVideos} />);

	it('test the rendering of the component', () => {
		expect(wrapper).toMatchSnapshot();
	});
	it('test the functionality of the function getVideos', () => {
		expect(getVideos.mock.calls[0]).toEqual(['javascript', true]);
	});
});
