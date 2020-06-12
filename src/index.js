import React from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import { BackHandler,ToastAndroid } from "react-native";
import {addNavigationHelpers,NavigationActions } from 'react-navigation'
import {addListener} from "./utils/redux";
import { AppNavigator } from './router/routes'
class AppWithNavigationState extends React.Component{
    static propTypes = {
        dispatch:PropTypes.func.isRequired,
        nav:PropTypes.object.isRequired,
    }
    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
    }
    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
    }

    onBackPress = ()=>{
        const { dispatch, nav } = this.props;
        console.log('nav====',nav)
        if (nav.index === 0) {
            if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
                dispatch({type:'ExitApp'})//将state设置成第一次启动一致，避免从哪个界面退出，启动时显示哪个界面的bug（杀掉进程启动无该问题）
                return false
            }
            ToastAndroid.show('再按一次退出!', 1000);
            this.lastBackPressed = Date.now();
            return true;
        }
        dispatch(NavigationActions.back());
        return true;
    }
    render(){
        const {dispatch,nav} = this.props;
        return(
            <AppNavigator
                navigition={addNavigationHelpers(
                    dispatch,
                    state,nav,
                    addListener
                )}
            >

            </AppNavigator>
        )
    }
}

const mapStateToProps = state =>({
    nav:state.nav
})

export default connect(mapStateToProps)(AppWithNavigationState);