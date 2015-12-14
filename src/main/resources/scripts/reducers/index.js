'use strict';

import {combineReducers} from 'redux';
<<<<<<< HEAD
import activeIndex from './navHeader';
import {compNews} from './companyNews';

const rootReducer = combineReducers({
	activeIndex,
	compNews
=======
import activeIndex from '../reducers/navHeader';

const rootReducer = combineReducers({
	activeIndex
>>>>>>> ec93e24da254d8d5fe0d0eebfa330995bc840a0b
});

export default rootReducer;

