import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import styleUtil from '../utils/styleUtil'
import Button from '../components/base/Button'
import store from '../store'
const px = styleUtil.pxToDpWidth
function Home(props) {
    const navigationOptions = {
        title: '主页',
    };
    const state = store.getState()
    let count = state.counter.value
    // const [count, setCount] = useState(state.counter.value)
    // useEffect(() => {
    //     // console.warn('props',count);
    //     if (count > 0) {
           
    //     }
    // })
    changeListener = () => {
        count = state.counter.value
    };
    // 监听Redux store中状态的变化
    store.subscribe(this.changeListener);
    _addCount =()=>{
        store.dispatch({ type: 'INCREMENT' })
    }
    return (
        <View style={styles.homeContent}>
            <Text style={styles.header}>首页</Text>
            <Button
                title="点击"
                onPress={() =>this._addCount()}
                buttonStyle={styles.button}
                textStyle={styles.text}
            />
            <Text>{`你点击了${state.counter.value}次`}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    homeContent: {
        backgroundColor: '#f5f5f5',
        flex: 1,
    },
    header: {
        width: px(750),
        height: px(88),
        backgroundColor: 'pink',
        textAlign: 'center',
        lineHeight: px(88),
        color: '#fff'
    },
    button: {
        width: px(100),
        height: px(50),
        borderRadius: px(4)
    },
    text: {
        color: '#3647ff'
    }
})

export default Home