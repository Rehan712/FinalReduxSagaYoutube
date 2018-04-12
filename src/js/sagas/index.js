import getVideoSaga from './getVideoSaga';
import { fork, takeLatest } from 'redux-saga/effects';
import * as types from '../constants';

function* watchGetVideosSaga() {
	yield takeLatest(types.GET_VIDEOS, getVideoSaga);
}

export default function* rootSaga() {
	yield fork(watchGetVideosSaga);
}
