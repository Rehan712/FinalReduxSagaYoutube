import {
  FETCH_VIDEOS_ATTEMPT,
  FETCH_VIDEOS_SUCCESS,
  FETCH_VIDEOS_FAIL
} from '../constants';

const initialData = {
  initial: true,
  error: null,
  videos: []
};

export default function(state = initialData, action) {
  switch (action.type) {
    case FETCH_VIDEOS_ATTEMPT:
      return state
    case FETCH_VIDEOS_SUCCESS:
      return {...state, videos: action.payload, initial: false }
    case FETCH_VIDEOS_FAIL:
      return {...state, error: action.payload, initial: false }
  }
  return state;
}
