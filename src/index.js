import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Router,Icon } from './router/routes'
const TabNavigator = createBottomTabNavigator(Router,Icon);

export default createAppContainer(TabNavigator);

