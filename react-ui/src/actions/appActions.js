import * as types from './actionTypes';
import MembersApi from '../api/membersApi';

export function listMembersSuccess(members){
    debugger;
    return {
        type: types.LIST_MEMBERS,
        payload:{
            members: members
        }
    }
}

export function listMembers(){
    return dispatch => {
        return MembersApi.getAllMembers().then(members => {
            dispatch(listMembersSuccess(members));
        }).catch(error => {
            throw(error);
        });
    }
}