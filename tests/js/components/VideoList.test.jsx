import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { VideoList } from '../../../src/js/components/VideoList';

Enzyme.configure({ adapter: new Adapter() });

describe('Test VideoList Component', () => {
	let videoList;
	beforeEach(() => {
		videoList = [
			{
				id: { videoId: '' },
				snippet: {
					title: 'naruto',
					description: 'ninja',
					thumbnails: {
						default: {
							url: 'naruto.com'
						}
					}
				}
			},
			{
				id: { videoId: '' },
				snippet: {
					title: 'naruto uzumaki',
					description: 'ninja clan',
					thumbnails: {
						default: {
							url: 'narutouzamaki.com'
						}
					}
				}
			}
		];
	});

	const error = {
		message: 'Api Failure'
	};
	const selectVideo = jest.fn();

	it('test the rendering of the component', () => {
		const wrapper = shallow(
			<VideoList
				selectVideo={selectVideo}
				isLoading={true}
				error={null}
				videoList={videoList}
			/>
		);
		expect(wrapper).toMatchSnapshot();
	});
	it('test the rendering of the component', () => {
		const wrapper = shallow(
			<VideoList
				selectVideo={selectVideo}
				isLoading={false}
				error={null}
				videoList={videoList}
			/>
		);
		expect(wrapper).toMatchSnapshot();
	});

	it('test the rendering of the component', () => {
		const wrapper = shallow(
			<VideoList
				selectVideo={selectVideo}
				isLoading={false}
				error={error}
				videoList={videoList}
			/>
		);
		expect(wrapper).toMatchSnapshot();
	});
	it('passes on the selectVideo fn', () => {
		expect(selectVideo.mock.calls.length).toBe(0);
	});
});
