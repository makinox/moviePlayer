import { createStore } from 'redux'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reducer from './reducers/index'

// const initialState = {
//     suggestionList: [],
//     categoryList: []
// }

// const store = createStore(
//     reducer,
//     initialState,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, reducer)

let store = createStore(persistedReducer)
let persistor = persistStore(store)

export {store, persistor}