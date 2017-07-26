import {combineReducers} from 'redux';
import locations from './locationReducer';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
    locations,
    routing: routerReducer
});

export default rootReducer;