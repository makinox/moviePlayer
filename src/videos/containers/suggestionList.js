import React, { Component } from 'react'
import { FlatList } from 'react-native'
import Layout from './../components/suggestionListLayout'
import Empty from './../components/empty'
import Separator from './../../sections/components/verticalSeparator'
import Suggestion from './../components/suggestion'
import { connect } from 'react-redux'

class App extends Component {

    renderEmpty = () => <Empty text="No hay sugerencias :(" />
    itemSeparator = () => <Separator color="red" />
    viewMovie = (item) => {
        this.props.dispatch({
            type: 'SET_SELECTED_MOVIE',
            payload: {
                movie: item
            }
        })
    }
    renderItem = ({ item }) => <Suggestion onPress={() => this.viewMovie(item)} {...item} />
    keyExtractor = (item) => item.id.toString()
    onPress

    render() {
        return (
            <Layout title={'Recomendado para ti'}>
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.props.list}
                    ListEmptyComponent={this.renderEmpty}
                    ItemSeparatorComponent={this.itemSeparator}
                    renderItem={this.renderItem}
                />
            </Layout>
        )
    }
}

function mapStateToProps(state) {
    return {
        list: state.suggestionList
    }
}

export default connect(mapStateToProps)(App)