import React, {Component} from 'react'
import {TextInput, StyleSheet} from 'react-native'
import { connect } from 'react-redux'

import Api from '../../../utils/api'

class App extends Component {

    state = {
        text: ''
    }

    handleSubmmit = async () => {
        const movies = await Api.searchMovie(this.state.text)
        console.log(this.state.text)
        console.log(movies)
        this.props.dispatch({
            type: 'SET_SELECTED_MOVIE',
            payload: {
                movie: movies[0]
            }
        })
    }

    handleChangeText = (text) => {
        this.setState({
            text
        })
    }
    render () {
        return (
            <TextInput 
            placeholder='Busca tu pelicula favorita'
            underlineColorAndroid='transparent'
            autoCorrect={false}
            autoCapitalize='none'
            onSubmitEditing={this.handleSubmmit}
            onChangeText={this.handleChangeText}
            style={style.input}
            />
        )
    }
}

export default connect(null)(App)

const style = StyleSheet.create({
    input: {
      padding: 15,
      fontSize: 15,
      borderWidth: 1,
      borderColor: '#eaeaea'
    }
  })