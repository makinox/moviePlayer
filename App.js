import React, {Component} from 'react';
import {Text} from 'react-native';
import API from './utils/api'
import Home from './components/screens/home'
import Header from './components/sections/components/header'
import SuggestionList from './components/videos/containers/suggestionList'
import CategoryList from './components/videos/containers/categoryList'
import Player from './components/player/containers/player'
import Redux from './redux/index'

export default class App extends Component {

  async componentDidMount() {
    const movies = await API.getSuggestion(10)
    const categories = await API.getMovies(10)
  }

  render() {
    return (
      <Redux>
        <Home>
          <Header />
          <Player />
          <Text>Header</Text>
          <Text>Buscador</Text>
          <Text>Categorias</Text>
          <Text>Sugerencias</Text>
          <CategoryList />
          <SuggestionList />
        </Home>
      </Redux>
    )
  }
}