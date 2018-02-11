import {combineReducers} from 'redux';
import members from './membersReducer';

const rootReducer = combineReducers({
    members
});

export default rootReducer;