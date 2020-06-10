import React, { Component } from 'react'
import { View, Text, StyleSheet,Button } from 'react-native'
import styleUtil from '../utils/styleUtil'
const px = styleUtil.pxToDpWidth
class Mine extends Component {
    static navigationOptions = {
        title: '我的',
    };
    render() {
        return (
            <View style={styles.homeContent}>
                <Text style={styles.header}>我 的</Text>
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
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