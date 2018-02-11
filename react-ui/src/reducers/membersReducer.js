import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function membersReducer(state = initialState.members, action){
    switch(action.type){
        case types.LIST_MEMBERS:
            return action.payload.members;
        default:
            return state; 
    }
}