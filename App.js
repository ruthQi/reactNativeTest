/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Routers from './components/test/routers';

import {
    StackNavigator,
    TabNavigator,
} from 'react-navigation';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

/*class App extends Component<{}> {
  render() {
    return (
      <Navigator initialRoute={{component: Home}} renderScene={(route, navigator)=>{
         return <route.component navigator={navigator} {...route} {...route.passProps}/>
      }}/>
    );
  }
}*/


export default class App extends Component{
  render(){
    return(
      <Routers screenProps={{themeColor:'yellow'}}/>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'column'
  },
  listContainer: {
      flex: 1,
      width: 300
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});
