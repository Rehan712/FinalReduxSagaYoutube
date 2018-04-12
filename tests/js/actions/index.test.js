import * as actions from '../../../src/js/actions';
import * as types from '../../../src/js/constants';

describe('test Actions', () => {
	it('test the fechVideosAttempt action', () => {
		const expectedAction = {
			type: types.FETCH_VIDEOS_ATTEMPT
		};
		expect(actions.fetchVideosAttempt()).toEqual(expectedAction);
	});
	it('test the fechVideosSuccess action', () => {
		const expectedAction = {
			type: types.FETCH_VIDEOS_SUCCESS,
			payload: [{}, {}]
		};
		expect(actions.fetchVideosSuccess([{}, {}])).toEqual(expectedAction);
	});
	it('test the fechVideosFail action', () => {
		const expectedAction = {
			type: types.FETCH_VIDEOS_FAIL,
			payload: { message: 'Api Failure' }
		};
		expect(actions.fetchVideosFail({ message: 'Api Failure' })).toEqual(
			expectedAction
		);
	});
	it('test the getVideos action', () => {
		const expectedAction = {
			type: types.GET_VIDEOS,
			payload: { query: 'naruto', initial: true }
		};
		expect(actions.getVideos('naruto', true)).toEqual(expectedAction);
	});
	it('test the selectVideo action', () => {
		const expectedAction = {
			type: types.SELECT_VIDEO,
			payload: {}
		};
		expect(actions.selectVideo({})).toEqual(expectedAction);
	});
});
