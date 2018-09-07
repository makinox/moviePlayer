import React, {Component} from 'react';
import {Text} from 'react-native';
import API from './utils/api'
import Home from './components/screens/home'
import Header from './components/sections/components/header'
import SuggestionList from './components/videos/containers/suggestionList'
import CategoryList from './components/videos/containers/categoryList'
import Player from './components/player/containers/player'

export default class App extends Component {

  state = {
    suggestionList: [],
    categoryList: []
  }

  async componentDidMount() {
    const movies = await API.getSuggestion(10)
    const categories = await API.getMovies(10)
    console.log(movies)
    console.log(categories)
    this.setState({
      suggestionList: movies,
      categoryList: categories
    })
  }

  render() {
    return (
      <Home>
        <Header />
        <Player />
        <Text>Header</Text>
        <Text>Buscador</Text>
        <Text>Categorias</Text>
        <Text>Sugerencias</Text>
        <CategoryList list={this.state.categoryList} />
        <SuggestionList list={this.state.suggestionList} />
      </Home>
    )
  }
}