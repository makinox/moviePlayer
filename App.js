import React, {Component} from 'react';

import {PersistGate} from 'redux-persist/integration/react'
import {store, persistor} from './redux/index'
import { Provider } from 'react-redux'
import Loading from './src/sections/components/loading'

import AppLayout from './src/app'

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <PersistGate
          loading={<Loading />}
          persistor={persistor}
        >
          <AppLayout />
        </PersistGate>
      </Provider>
    )
  }
}