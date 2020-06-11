import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import  Button from '../base/Button'
import styleUtil from '../../utils/styleUtil'
const px = styleUtil.pxToDpWidth

function ListItem(props) {
    let {
        image,
        title,
        subTitle,
        icon
    } = props.item
    return (
        <View style={styles.contentItem}>
            <Image style={styles.image} source={{ uri: image }} />
            <View style={styles.bottom}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.box}>
                    <Text style={styles.subTitle}>{subTitle}</Text>
                        <Button
                        title={'领取'}
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
        marginTop: px(36)
    },
    image: {
        width: px(350),
        height: px(200)
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
        color: '#999'
    },
    box:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    button:{
        backgroundColor:'pink',
        borderRadius:px(4)
    }
})
export default ListItem