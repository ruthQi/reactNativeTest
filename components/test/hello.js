

import React, {Component} from 'react';
import {Text, Image, View, StyleSheet, FlatList} from 'react-native';

export default class HelloWorld extends Component{

   constructor() {
      super();
      this.state = {
         data: []
      };
   }
   componentDidMount(){
      this.dataList = [{
         id: 1,
         uri: 'https://mint-public.nosdn.127.net/mint_1510207165089_34921891.jpg',
         name: 'test1'
      },{
         id: 2,
         uri: 'https://mint-public.nosdn.127.net/mint_1510207165089_34921891.jpg',
         name: 'test2'
      },{
         id: 3,
         uri: 'https://mint-public.nosdn.127.net/mint_1510207165089_34921891.jpg',
         name: 'test3'
      },{
         id: 4,
         uri: 'https://mint-public.nosdn.127.net/mint_1510207165089_34921891.jpg',
         name: 'test4'
      },{
         id: 5,
         uri: 'https://mint-public.nosdn.127.net/mint_1510207165089_34921891.jpg',
         name: 'test5'
      }];
      //alert(this.dataList.length)
      this.setState({
         data: this.dataList || []
      })
   }
   
   render(){
      return(
         <FlatList style={styles.listContainer} data={this.state.data} renderItem={this.renderAvater} keyExtractor={this.keyExtractor}/>
      )
   }

   keyExtractor = (item, index) => {
      return index;
   }
   renderAvater(data){
      console.log(data);
      let dataItem = data.item;
      return(
         <View style={styles.container}>
            <Image source={{uri: dataItem.uri}} style={{width: 100, height: 100}}/>
            <View style={styles.rightConatiner}>
               <Text style={styles.title}>{dataItem.name}</Text>
            </View>
         </View>
         
      )
   }
}

const styles = StyleSheet.create({
   listContainer: {
      flex: 1,
      width: 300
   },
   container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
   },
   
   rightConatiner: {
      flex: 1
   },
   title: {
      textAlign: 'center'
   }
})