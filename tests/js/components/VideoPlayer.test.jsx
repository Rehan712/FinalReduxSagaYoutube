import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { VideoPlayer } from '../../../src/js/components/VideoPlayer';

Enzyme.configure({ adapter: new Adapter() });

describe('Test VideoPlayer Component', () => {
	const selectedVideo = {
		id: {
			videoId: ''
		},
		snippet: {
			title: 'naruto',
			description: ''
		}
	};
	const wrapper = shallow(<VideoPlayer selectedVideo={selectedVideo} />);

	it('test the rendering of the component', () => {
		expect(wrapper).toMatchSnapshot();
	});
	it('test the data getting from the props', () => {
		expect(selectedVideo.snippet.title).toBe('naruto');
	});
});
