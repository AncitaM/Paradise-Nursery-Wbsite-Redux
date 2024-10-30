import { combineReducers } from 'redux';
import cardItems from './reducers';

const rootReducer = combineReducers({
    cardItems,
});

export default rootReducer;
