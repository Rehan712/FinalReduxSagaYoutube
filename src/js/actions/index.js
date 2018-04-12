import {
	FETCH_VIDEOS_ATTEMPT,
	FETCH_VIDEOS_SUCCESS,
	FETCH_VIDEOS_FAIL,
	GET_VIDEOS,
	SELECT_VIDEO
} from '../constants';

export function getVideos(query, initial) {
	return {
		type: GET_VIDEOS,
		payload: {
			query,
			initial
		}
	};
}

export function fetchVideosSuccess(videos) {
	return {
		type: FETCH_VIDEOS_SUCCESS,
		payload: videos
	};
}

export function fetchVideosFail(error) {
	return {
		type: FETCH_VIDEOS_FAIL,
		payload: error
	};
}

export function fetchVideosAttempt() {
	return {
		type: FETCH_VIDEOS_ATTEMPT
	};
}
export function selectVideo(video) {
	return {
		type: SELECT_VIDEO,
		payload: video
	};
}
