 import React, {Component} from 'react';
 import {ScrollView, Image, Text, View} from 'react-native';

 export default class ScrollTest extends Component{
   //horizontal为true时表示水平滚动，默认为false,为垂直滚动(添加此属性即为水平滚动)
   render(){
      return(
         <ScrollView style={{width: 300}} horizontal>
            <Image source={{uri:'https://mint-public.nosdn.127.net/mint_1510207165089_34921891.jpg'}} style={{width: 50, height: 50}}/>
            <Text >If you like</Text>
            <Image source={{uri:'https://mint-public.nosdn.127.net/mint_1510207165089_34921891.jpg'}} style={{width: 50, height: 50}}/>
            <Text >If you like</Text>
            <Image source={{uri:'https://mint-public.nosdn.127.net/mint_1510207165089_34921891.jpg'}} style={{width: 50, height: 50}}/>
            <Text >If you like</Text>
            <Image source={{uri:'https://mint-public.nosdn.127.net/mint_1510207165089_34921891.jpg'}} style={{width: 50, height: 50}}/>
            <Text >If you like</Text>
         </ScrollView>
      )
   }
 }