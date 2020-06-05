import React, { Component } from 'react'
import { NavigationRouter } from 'react-navigation';
import Routers from './router/routes'
class App extends Component {
    render() {
        return (
            <NavigationRouter
                routes={Routers}                // 路由表
                initialRoute={'MyIntegral'}   // 默认加载页面
                {...this.props}
            />
        )
    }
}


export default App