'use strict';

import {combineReducers} from 'redux';
import activeIndex from './navHeader';
import {compNews} from './companyNews';
import {getNews} from './comNews';

const rootReducer = combineReducers({
	activeIndex,
	compNews,
	getNews
});

export default rootReducer;

