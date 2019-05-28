import React from 'react';
import {View, Text} from 'react-native';

export default class ChatScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return{
      title: navigation.getParam('name', null)
    }
  }

  render(){
    return(
      <View>
        <Text>Chat Screen</Text>
      </View>
    )
  }
}