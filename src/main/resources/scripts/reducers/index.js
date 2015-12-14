'use strict';

import {combineReducers} from 'redux';
import activeIndex from './navHeader';
import {compNews} from './companyNews';

const rootReducer = combineReducers({
	activeIndex,
	compNews
});

export default rootReducer;

