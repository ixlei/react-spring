'use strict';

import {combineReducers} from 'redux';
import activeIndex from '../reducers/navHeader';

const rootReducer = combineReducers({
	activeIndex
});

export default rootReducer;

