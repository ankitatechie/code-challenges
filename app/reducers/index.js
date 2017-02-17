import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import challenges from './challenges';

const rootReducer = combineReducers({
    challenges, routing: routerReducer
});

export default rootReducer;
