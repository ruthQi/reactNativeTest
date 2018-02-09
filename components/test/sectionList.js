import React, {Component} from 'react';
import {Text, SectionList} from 'react-native';

export default class SectionTest extends Component{
   //可带分组标签
   keyExtractor = (item, index) => {
      return index;
   }
   render(){
      return(
         <SectionList 
            sections={[
               {title: 'D', data: ['Devin']},
               {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
               {title: 'B', data: ['Belon']},
               {title: 'B', data: ['Bulon']}
            ]}
            renderItem={({item})=><Text >{item}</Text>}
            renderSectionHeader={({section})=><Text >{section.title}</Text>}
            keyExtractor={this.keyExtractor}/>
      )
   }
}