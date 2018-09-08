import React, { Component} from 'react'
import {FlatList} from 'react-native'
import Empty from './../components/empty'
import Separator from './../../sections/components/horizontalSeparator'
import Suggestion from './../components/category'
import Layout from './../components/categoryListLayout'
import {connect} from 'react-redux'

class App extends Component {

    renderEmpty = () => <Empty text="No hay sugerencias :("/>
    itemSeparator = () => <Separator color="red" />
    renderItem = ({item}) => <Suggestion {...item} />
    keyExtractor = (item) => item.id.toString()

    render() {
        return (
            <Layout title="Categorias">
                <FlatList
                    horizontal
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
    return state
}

export default connect(mapStateToProps) (App)