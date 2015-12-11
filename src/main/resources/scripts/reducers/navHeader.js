'use strict';
import { ACTIVE_INDEX } from '../constants/customerActionType';

const initState = {
	index: 0
};

function setActiveIndex(state = initState, action) {
	if(Object.is(ACTIVE_INDEX, action.type)) {
		return Object.assign({}, state, {
			index:action.index
		});
	}
	return state;
}

export  { setActiveIndex as default };

