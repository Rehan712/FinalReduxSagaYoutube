import {call} from 'redux-saga/effects';
import {expectSaga} from 'redux-saga-test-plan';
import {delay} from 'redux-saga';
import {throwError} from 'redux-saga-test-plan/providers';


import getVideoSaga from '../../../src/js/sagas/getVideoSaga';
import * as actions from '../../../src/js/actions';
import * as types from '../../../src/js/constants';
// import fetchVideoReducer from '../../../src/js/reducers/fetchVideoReducer';
// import selectVideoReducer from '../../../src/js/reducers/selectVideoReducer';
import * as api from '../../../src/js/api';



describe('test sagas', ()=>{
	describe('test initial getVideoSaga',()=>{
		it('tests the getVideos function',()=>{
			return expectSaga(getVideoSaga,actions.getVideos('javascript',true))
			.provide([
				[call(api.youtube,'javascript'),{items:[{},{}]}],
				[call(delay,1000)]
			])
			.put(actions.fetchVideosAttempt())
			.put(actions.fetchVideosSuccess([{},{}]))
			.put(actions.selectVideo({}))
			.run()
		})
	})
})