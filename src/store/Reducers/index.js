import { combineReducers } from 'redux';
import  AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

import Auth from './Auth';

const persistConfig = {
    key: 'root',
   storage: AsyncStorage,
    whitelist: ['Auth']
}

// const rootPersistConfig= {
//     key: 'root',
//     storage: AsyncStorage,
//     blacklist: ['Nationality','Product']
// }

const rootReducer = combineReducers({
    Auth: persistReducer(persistConfig, Auth),
    // Nationality,
    // Product
});

export default persistReducer(persistConfig, rootReducer);
