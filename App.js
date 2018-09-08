import React, {Component} from 'react';
import {Text} from 'react-native';
import API from './utils/api'
import Home from './components/screens/home'
import Header from './components/sections/components/header'
import SuggestionList from './components/videos/containers/suggestionList'
import CategoryList from './components/videos/containers/categoryList'
import Player from './components/player/containers/player'
import {PersistGate} from 'redux-persist/integration/react'
import {store, persistor} from './redux/index'
import { Provider } from 'react-redux'
import Loading from './components/sections/components/loading'

export default class App extends Component {

  async componentDidMount() {
    const categoryList = await API.getMovies(10)    
    
    store.dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: {
        categoryList
      }
    })

    const suggestionList = await API.getSuggestion(10)

    store.dispatch({
      type: 'SET_SUGGESTION_LIST',
      payload: {
        suggestionList
      }
    })
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate
          loading={<Loading />}
          persistor={persistor}
        >
          <Home>
            <Header />
            <Player />
            <Text>Buscador</Text>
            <CategoryList />
            <SuggestionList />
          </Home>
        </PersistGate>
      </Provider>
    )
  }
}