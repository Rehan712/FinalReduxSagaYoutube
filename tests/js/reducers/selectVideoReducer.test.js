import selectVideoReducer from '../../../src/js/reducers/selectVideoReducer';
import * as types from '../../../src/js/constants';

describe('test selectVideoReducer', () => {
	const initialState = {};
	it('test the assigining of the initialState', () => {
		expect(selectVideoReducer(undefined, {})).toEqual(initialState);
	});
	it('test the selectVideo Action', () => {
		const expectedState = { id: 1 };
		const action = {
			type: types.SELECT_VIDEO,
			payload: { id: 1 }
		};
		expect(selectVideoReducer(initialState, action)).toEqual(expectedState);
	});
});
