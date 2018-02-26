
import React from 'react';
import {
   StackNavigator,
} from 'react-navigation';
//import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
import Hello from './hello';
import ScrollTest from './scrollView';
import Home from './index';
import SectionList from './sectionList';
//test
export default MyApp = StackNavigator({
    // 将TabNavigator包裹在StackNavigator里面可以保证跳转页面的时候隐藏tabbar
    Home:{
        screen:Home,
    },

    Hello:{
        screen:Hello,
    },
    // 将需要跳转的页面注册在这里，全局才可以跳转
    ScrollTest:{
        screen:ScrollTest
    },
    SectionList: {
      screen: SectionList
    }

},{
   tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
   tabBarOptions: {
      style: {
         display: 'none',
         height: 0
      }
   }
});