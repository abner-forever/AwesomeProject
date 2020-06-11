import React from 'react'
import { WebView } from 'react-native-webview'
function H5WebView(props) {
    const url = props.navigation && props.navigation.state && props.navigation.state.params && props.navigation.state.params.url || 'https://vip.iqiyi.com/html5VIP/activity/fls_particular/index.html?code=ad0d33df00204273'
    return (
        <WebView
            scrollEnabled={false}
            javaScriptEnabled={true}
            injectedJavaScript={'插入到h5页面中的js代码'}
            onMessage={event => { '接收h5页面传过来的消息' }}
            source={{ uri: url }}
        ></WebView>
    )
}
export default H5WebView
