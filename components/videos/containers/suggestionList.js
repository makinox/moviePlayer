import React, {Component} from 'react'
import {FlatList} from 'react-native'
import Layout from './../components/suggestionListLayout'
import Empty from './../components/empty'
import Separator from './../../sections/components/verticalSeparator'
import Suggestion from './../components/suggestion'

export default class extends Component {

    renderEmpty = () => <Empty text="No hay sugerencias :("/>
    itemSeparator = () => <Separator color="red" />
    renderItem = ({item}) => <Suggestion {...item} />
    keyExtractor = (item) => item.id.toString()

    render(){

        return(
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