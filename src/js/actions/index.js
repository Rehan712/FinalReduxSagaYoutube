import{FETCH_VIDEO_ATTEMPT,FETCH_VIDEO_SUCCESS,FETCH_VIDEO_FAIL,GET_VIDEOS,SELECT_VIDEO } from '../constants';

export function getVideos(query,loadingState) {
	return {
		type:GET_VIDEOS,
		payload:{

			query,loadingState
		}
	}
}

export function fetchVideosSuccess(videos) {
	return {
		type:FETCH_VIDEO_SUCCESS,
		payload:videos
	}
}

export function fetchVideosFail(error) {
	return {
		type:FETCH_VIDEO_FAIL,
		payload:error
	}
}

export function fetchVideosAttempt() {
	return {
		type:FETCH_VIDEO_ATTEMPT
	}
}
export function selectVideo(video) {
	return {
		type:SELECT_VIDEO,
		payload:video
	}
}
