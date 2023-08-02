import {combineReducers} from 'redux';
import { counterReducer } from './counter_reducer';

const rootReducer = combineReducers({
    counterReducer
})

export default rootReducer;