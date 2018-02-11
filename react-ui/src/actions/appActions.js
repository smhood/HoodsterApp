import * as types from './actionTypes';
import MembersApi from '../api/membersApi';

export function listMembersSuccess(members){
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

export function addMemberSuccess(members){
    return {
        type: types.ADD_MEMBER,
        payload:{
            members: members
        }
    }
}

export function addMember(member){
    return dispatch => {
        return MembersApi.addNewMember(member).then(members => {
            dispatch(addMemberSuccess(members));
        }).catch(error => {
            throw(error);
        });
    }
}
