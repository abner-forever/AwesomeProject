import React, { Component } from 'react'
import { View, Text, TouchableHighlight,StyleSheet } from 'react-native'
import PropTypes from 'prop-types';
export default class Button extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { buttonStyle, title, textStyle, onPress } = this.props
        return (
            <View style={[styles.button,buttonStyle && buttonStyle]}>
                <TouchableHighlight underlayColor='transparent' onPress={onPress?onPress: console.warn('你没有添加点击事件')}>
                    <Text style={[styles.text,textStyle && textStyle]}>{title}</Text>
                </TouchableHighlight>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    button: {
        paddingLeft: 8,
        paddingRight:8,
        paddingTop:2,
        paddingBottom:2,
        backgroundColor: '#4d86f7',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius:4
    },
    text:{
        color:'#fff'
    }
})