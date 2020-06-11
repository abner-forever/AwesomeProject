import React from 'react'
import Home from '../pages/Home'
import Mine from '../pages/Mine'
import H5 from '../components/base/H5WebView'
import Ionicons from 'react-native-vector-icons/Ionicons';
export const Router = {
    Home: {
        title: '首页',
        screen: Home
    }, // 登录页
    Mine: { screen: Mine }, // 注册页
    // H5: { screen: H5 }, // 注册页

}
export const Icon = {
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;
            let IconComponent = Ionicons;
            let iconName;
            if (routeName === 'Home') {
                iconName = focused
                    ? 'md-home'
                    : 'md-home';
                // Sometimes we want to add badges to some icons.
                // You can check the implementation below.
                // IconComponent = HomeIconWithBadge;
            } else if (routeName === 'Mine') {
                iconName = focused ? 'md-boat' : 'md-boat';
            }

            // You can return any component that you like here!
            return <IconComponent name={iconName} size={25} color={tintColor} />;
        },
    }),
    tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
    }
}
