import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Button from '../base/Button'
import styleUtil from '../../utils/styleUtil'
import CommonStyle from '../CommonStyle'
const px = styleUtil.pxToDpWidth

function ListItem(props) {
    let {
        image,
        title,
        userName,
        updateTime,
        userIcon
    } = props.item
    return (
        <View style={styles.contentItem}>
            <View style={CommonStyle.row}>
                <Image style={styles.image} source={{ uri: userIcon }} />
                <Text style={styles.userName}>{userName}</Text>
            </View>
            <View style={styles.bottom}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.box}>
                    <Text style={styles.subTitle}>{updateTime}</Text>
                    <Button
                        title={'查看'}
                        onPress={() => { props.navigate(icon.pageUrl) }}
                        buttonStyle={styles.button}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contentItem: {
        backgroundColor: '#fff',
        marginTop: px(20),
        padding:px(12)
    },
    image: {
        width: px(60),
        height: px(60),
        borderRadius: px(30),
        borderColor: '#ccc',
        borderWidth: px(2)
    },
    userName:{
        marginLeft:px(10),
        color:'#666'
    },
    bottom: {
        paddingRight: px(10),
        paddingLeft: px(10),
        paddingTop: px(16),
        paddingBottom: px(16)
    },
    title: {
        fontSize: px(28),
        color: '#222'
    },
    subTitle: {
        fontSize: px(24),
        color: '#999',
        marginRight: px(10),
        position: 'relative'
    },
    box: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent:'space-between'
    },
    button: {
        backgroundColor: 'pink',
        borderRadius: px(4),
        position: 'absolute',
        right: px(10)
    }
})
export default ListItem