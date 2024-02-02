import { combineReducers } from 'redux';
import logReducer from './logReducer';
import timerReducer from './timerReducer';

const rootReducers = combineReducers({
    log: logReducer,
    timer: timerReducer
})

export default rootReducers;