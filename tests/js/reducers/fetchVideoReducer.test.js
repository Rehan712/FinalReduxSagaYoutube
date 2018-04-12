import fetchVideoReducer from '../../../src/js/reducers/fetchVideoReducer';
import * as types from '../../../src/js/constants';

describe('test fetchVideoReducer', () => {
	const initialState = {
		initial: true,
		error: null,
		videos: []
	};
	it('test the initial state of reducer', () => {
		expect(fetchVideoReducer(undefined, {})).toEqual(initialState);
	});
	it('test the fetchVideosAttempt', () => {
		const expectedState = {
			initial: true,
			error: null,
			videos: []
		};
		const action = {
			type: types.FETCH_VIDEOS_ATTEMPT
		};
		expect(fetchVideoReducer(initialState, action)).toEqual(expectedState);
	});
	it('test the fetchVideosSuccess', () => {
		const expectedState = {
			initial: false,
			error: null,
			videos: [{}, {}]
		};
		const action = {
			type: types.FETCH_VIDEOS_SUCCESS,
			payload: [{}, {}]
		};
		expect(fetchVideoReducer(initialState, action)).toEqual(expectedState);
	});
	it('test the fetchVideosAttempt', () => {
		const expectedState = {
			initial: false,
			error: { message: 'Api Failure' },
			videos: []
		};
		const action = {
			type: types.FETCH_VIDEOS_FAIL,
			payload: { message: 'Api Failure' }
		};
		expect(fetchVideoReducer(initialState, action)).toEqual(expectedState);
	});
});
