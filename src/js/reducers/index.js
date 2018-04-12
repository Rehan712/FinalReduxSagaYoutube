import { combineReducers } from 'redux';
import fetchVideoReducer from './fetchVideoReducer';
import selectVideoReducer from './selectVideoReducer'

import { FILL_ME } from '../constants';

const rootReducer = combineReducers({
  videosList: fetchVideoReducer,
  video: selectVideoReducer
});

export default rootReducer;