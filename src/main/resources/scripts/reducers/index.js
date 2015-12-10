'use strict';

import {combineReducers} from 'redux';
import setActiveIndex from './navHeader';

const rootReducer = combineReducers({
	setActiveIndex
});

export {rootReducer as default}

