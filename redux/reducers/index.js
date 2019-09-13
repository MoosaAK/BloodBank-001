import { combineReducers } from 'redux';
import reducer from './reducer'

const allReducers = combineReducers({
    basicInfo: reducer,
    
});

export default allReducers;