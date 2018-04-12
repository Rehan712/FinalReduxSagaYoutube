import{FETCH_VIDEO_ATTEMPT,FETCH_VIDEO_SUCCESS,FETCH_VIDEO_FAIL } from '../constants';

const initial = {
	initial:true,
	error:null,
	videos:[]
};

export default function(state=initial, action) {
  switch(action.type) {
    case FETCH_VIDEO_ATTEMPT:
      return {...state};
    case FETCH_VIDEO_SUCCESS:
    	return { ...state,videos:action.payload,initial:false } 
    case FETCH_VIDEO_FAIL:
    	return {...state,error:action.payload,initial:false}	
  }
  return state;
};