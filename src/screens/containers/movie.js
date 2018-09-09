import React, { Component} from 'react'
import MovieLayout from '../components/movie'
import Player from '../../player/containers/player'
import Header from '../../sections/components/header'
import Close from '../../sections/components/close'
import Details from '../../videos/components/details'
import {connect} from 'react-redux'

class App extends Component {
    
    closeVideo = () => {
        this.props.dispatch({
            type: 'SET_SELECTED_MOVIE',
            payload: {
                movie: null
            }
        })
    }
    
    render () {
        return (
            <MovieLayout>
                <Header>
                    <Close onPress={this.closeVideo}/>
                </Header>
                <Player />
                <Details {...this.props.movie}/>
            </MovieLayout>
        )
    }
}

function mapStateToProps(state) {
    return {
        movie: state.selectedMovie
    }
}

export default connect(mapStateToProps)(App)