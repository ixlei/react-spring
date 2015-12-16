'use strict';

import {combineReducers} from 'redux';
import activeIndex from './navHeader';
import {compNews} from './companyNews';
import {getNews} from './comNews';
import {reg} from './reg';

const rootReducer = combineReducers({
	activeIndex,
	compNews,
	getNews,
	reg
});

export default rootReducer;

