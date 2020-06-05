import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import styleUtil from '../utils/styleUtil'
const px = styleUtil.pxToDpWidth
class Mine extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            header: () => null, // 隐藏头部  
        }
    }
    render() {
        return (
            <View style={styles.homeContent}>
                <Text style={styles.header}>我 的</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    homeContent: {
        backgroundColor: '#f5f5f5',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        width: px(375),
        backgroundColor: 'red',
        textAlign: 'center'
    }
})

export default Mine