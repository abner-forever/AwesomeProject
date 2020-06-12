import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import ListItem from '../components/mineComponents/listItem'
import store from '../store'

import styleUtil from '../utils/styleUtil'
const px = styleUtil.pxToDpWidth
class Mine extends Component {
    static navigationOptions = {
        title: '我的',
    };
    constructor(props) {
        super(props)
        let state = store.getState()
        this.state = {
            list: null,
            counter: state.counter.value,
        }
        // 准备一个监听器
        const changeListener = () => {
            // 当 store 中的状态发生变化时，
            // 将 store 中的新状态通过this.setState 设置到本组件,
            // 从而触发本组件被重新渲染输出
            console.log("in changeListener : ");
            console.log(store.getState());

            const state = store.getState();
            this.setState({counter: state.counter.value});
        };
        // 监听Redux store中状态的变化
        store.subscribe(changeListener);
    }
    requestList = () => {
        fetch('http://localhost:3004/articlelist').then(response => response.json()).then((res) => {
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
    navigate = (url) => {
        url && this.props.navigation.navigate('H5', { url })
    }
    _addCount =()=>{
        store.dispatch({type:'INCREMENT'})
    }
    render() {
        const { state } = this.props.navigation;
        return (
            <View style={styles.homeContent}>

                <Text style={styles.header}>{state.params && state.params.name || '福利'}</Text>
                <ScrollView  >
                    <Button
                        title="count"
                        onPress={() => this._addCount()}
                    />
                    <Text>{this.state.counter}</Text>
                    {
                        this.state.list && this.state.list.map((item, index) => (
                            <View key={index}>
                                <ListItem
                                    key={index}
                                    item={item}
                                    navigate={this.navigate}
                                />
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