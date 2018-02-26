

import React, {Component} from 'react';
import Hello from './hello';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';
import { NavigationActions } from 'react-navigation';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


const navigateAction = NavigationActions.navigate({

   routeName: 'Hello',

   params: {headerTitle:'hahaha'},

   action: NavigationActions.navigate({ routeName: 'Hello'})
});

export default class Index extends Component{
   static navigationOptions = ({navigation,screenProps}) => ({
        // 这里面的属性和App.js的navigationOptions是一样的。
        headerTitle:'Home',
        gestureResponseDistance:{horizontal:500},

    });
   nextScene = () => {
      this.props.navigator.push({
         component: Hello,
         params: {
            navigator: this.props.navigator
         }
      })
   }
   
   render(){
      return(
         <View>
            <Text style={styles.welcome}>
               Welcome to React Native!
            </Text>
            <Text style={styles.instructions}>
               To get started, edit App.js
            </Text>
            <Text style={styles.instructions}>
               {instructions}
            </Text>

            <Text onPress={()=>{
                  /*
                  方式1：
                  const { navigate } = this.props.navigation;
                  navigate('Hello');*/
                  //方式2：
                  this.props.navigation.dispatch(navigateAction)
               }}>点击进入下一场景</Text>
         </View>
      )
   }
}

const styles = StyleSheet.create({
  
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
