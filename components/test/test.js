
import React, {Component} from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';
//常见的做法是按顺序声明和使用style属性，以借鉴CSS中的“层叠”做法（即后声明的属性会覆盖先声明的同名属性）。
export default class Test extends Component{
   constructor(props){
      super(props);
      this.state = {
         text: ''
      }
   }
   render(){
      return(
         <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center',alignItems: 'center'}}>
            <Text style={styles.red, styles.black}>test .............</Text>
            <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
            <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
            <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
            <TextInput style={{height: 40, width: 300}} placeholder="type here to reanslate" onChangeText={(text) => {this.setState({text});}}/>
         </View>
      )
   }
}

const styles = StyleSheet.create({
   red: {
      color: '#ff00ff',
      fontSize: 20
   },
   black: {
      color: '#000',
      fontSize: 40
   }
})