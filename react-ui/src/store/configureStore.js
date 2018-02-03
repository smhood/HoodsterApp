import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from '../reducers';

// function configureStoreDev() {
//     const middlewares = [
//         reduxImmutableStateInvariant()
//     ];
//     const store = createStore(rootReducer, initialState, applyMiddleware(...middlewares));

//     return store;
// }

function configureStoreProd() {
    const middlewares = [];
  
    return createStore(rootReducer, {}, compose(applyMiddleware(...middlewares)));
}
  
const configureStore = configureStoreProd;

export default configureStore;