import { put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as api from '../api';
import * as actions from '../actions';
import * as types from '../constants';

export default function* getVideoSaga(action) {
	const { query, initial } = action.payload;
	if (!initial) {
		yield call(delay, 1000);
	}
	yield put(actions.fetchVideosAttempt());
	try {
		const res = yield call(api.youtube, query);
		yield put(actions.fetchVideosSuccess(res.items));
		if (initial) {
			yield put(actions.selectVideo(res.items[0]));
		}
	} catch (e) {
		yield put(actions.fetchVideosFail({ message: 'Api Failure' }));
	}
}
