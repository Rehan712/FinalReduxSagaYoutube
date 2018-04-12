import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import VideoListEntry from '../../../src/js/components/VideoListEntry';

Enzyme.configure({ adapter: new Adapter() });

describe('Test Video List Entry', () => {
	const video = {
		id: { videoId: 1, playlistId: 2 },
		snippet: {
			title: 'naruto',
			description: 'ninja',
			thumbnails: {
				default: {
					url: 'naruto.com'
				}
			}
		}
	};
	const handleSelectedVideo = jest.fn();
	const wrapper = shallow(
		<VideoListEntry
			key={video.id.videoId}
			video={video}
			handleSelectedVideo={handleSelectedVideo}
		/>
	);
	it('checks the rendering of the component', () => {
		expect(wrapper).toMatchSnapshot();
	});
	it('checks the onclick callback', () => {
		wrapper.find('.media-heading').simulate('click');
	});
});
