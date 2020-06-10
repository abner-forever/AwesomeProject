import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import styleUtil from '../utils/styleUtil'
import Button from '../components/base/Button'
const px = styleUtil.pxToDpWidth
class Home extends Component {
    static navigationOptions = {
        title: '主页',
    };
    componentDidMount() {
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.homeContent}>
                <Text style={styles.header}>首页</Text>
                <Button
                    title="我的"
                    onPress={() =>
                        navigate('Mine', { name: 'Jane' })
                    }
                    buttonStyle={styles.button}
                    textStyle={styles.text}
                />
            </View>
        )
    }
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
        borderRadius:px(4)
    },
    text:{
        color:'#3647ff'
    }
})

export default Home