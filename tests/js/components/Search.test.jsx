import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Search from '../../../src/js/components/Search';

Enzyme.configure({ adapter: new Adapter() });

describe('Test Search Component', () => {
	const getVideos = jest.fn();
	const wrapper = shallow(<Search getVideos={getVideos} />);

	it('test the rendering of the component', () => {
		expect(wrapper).toMatchSnapshot();
	});
	it('test the functionality of the function getVideos', () => {
		wrapper
			.find('input')
			.simulate('change', { target: { value: 'javascript' } });
		expect(getVideos.mock.calls[0]).toEqual(['javascript']);
	});
});
