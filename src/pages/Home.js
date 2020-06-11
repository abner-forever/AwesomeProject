import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import styleUtil from '../utils/styleUtil'
import Button from '../components/base/Button'
const px = styleUtil.pxToDpWidth
function Home(props) {
    const navigationOptions = {
        title: '主页',
    };
    const [count,setCount ] = useState(0)
    useEffect(()=>{
        // console.warn('props',count);
       if(count>5){
        const { navigate } = props.navigation;  
        navigate('Mine', { name: '福利' })
       } 
    })
    
    return (
        <View style={styles.homeContent}>
            <Text style={styles.header}>首页</Text>
            <Button
                title="点击"
                onPress={() =>
                   setCount(count+1) 
                }
                buttonStyle={styles.button}
                textStyle={styles.text}
            />
            <Text>{`你点击了${count}次`}</Text>
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