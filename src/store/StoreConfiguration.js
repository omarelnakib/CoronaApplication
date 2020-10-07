import { createStore, applyMiddleware } from 'redux';
import rootReducer from './Reducers';
import thunk from 'redux-thunk';

let middlware = [thunk];

export default function configureStore(initialState){
    return createStore(
        rootReducer,
        {},
        applyMiddleware(...middlware)
    );
}