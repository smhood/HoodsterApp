export default function tempReducer(state = [], action){
    switch(action){
        case 'TEMP_ACTION':
            return [...state, Object.assign({}, action.temp)];
        default:
            return state; 
    }
}