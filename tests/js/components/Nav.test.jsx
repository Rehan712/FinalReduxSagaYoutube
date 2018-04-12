import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Nav } from '../../../src/js/components/Nav';

Enzyme.configure({ adapter: new Adapter() });

describe('Test Nav Component', () => {
	const getVideos = jest.fn();
	const wrapper = shallow(<Nav getVideos={getVideos} />);

	it('test the rendering of the component', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
