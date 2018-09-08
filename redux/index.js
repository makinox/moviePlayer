import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/index'

const initialState = {
    videos: 'platzi'
  }

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default (props) => (
    <Provider store={store}>
        {props.children}
    </Provider>
)