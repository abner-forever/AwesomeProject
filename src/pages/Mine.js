import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

import ListItem from '../components/mineComponents/listItem'
import { ScrollView } from 'react-native-gesture-handler'

import styleUtil from '../utils/styleUtil'
const px = styleUtil.pxToDpWidth
class Mine extends Component {
    static navigationOptions = {
        title: '我的',
    };
    constructor(props) {
        super(props)
        this.state = {
            list: null
        }
    }
    requestList = () => {
        fetch('http://localhost:3003/clubpage').then(response => response.json()).then((res) => {
            console.log('res', res)
            this.setState({
                list: res.data.list
            })
        }).catch((err) => {
            console.warn('error', err)
        })
    }
    componentDidMount() {
        this.requestList()
    }
    navigate = (url)=>{
        url && this.props.navigation.navigate('H5',{url})
    }
    render() {
        const { state } = this.props.navigation;
        return (
            <View style={styles.homeContent}>
                {/* <Button
                        title="Go back"
                        onPress={() => this.props.navigation.goBack()}
                    /> */}
                <Text style={styles.header}>{state.params && state.params.name||'福利'}</Text>
                <ScrollView  >

                    {
                        this.state.list && this.state.list.map((item, index) => (
                            <View key={index}>
                                <Text>{item.title}</Text>
                                <View style={styles.content}>
                                    {
                                        typeof item.list.splice === 'function' && item.list.map((cases, i) => (
                                            <ListItem
                                                key={i}
                                                item={cases}
                                                navigate ={this.navigate}
                                            />
                                        ))
                                    }
                                </View>
                            </View>
                        ))
                    }
                </ScrollView>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    homeContent: {
        backgroundColor: '#f5f5f5',
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    header: {
        width: px(750),
        height: px(88),
        backgroundColor: 'pink',
        textAlign: 'center',
        color: '#fff',
        fontSize: px(36),
        lineHeight: px(88)
    },
    content: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingLeft: px(20),
        paddingRight: px(20)
    }
})

export default Mine