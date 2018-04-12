import { SELECT_VIDEO } from '../constants';

const initial = {};
export default function(state = initial, action) {
	switch (action.type) {
		case SELECT_VIDEO:
			return action.payload;
	}
	return state;
}
