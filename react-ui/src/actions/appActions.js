import * as types from './actionTypes';

export function listMembers(){
    return {
        type: types.LIST_MEMBERS,
        payload:{
            members: [{name: "Varius"}]
        }
    }
}