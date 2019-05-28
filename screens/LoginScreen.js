import React from 'react';
import {Text, Alert, TouchableOpacity, TextInput, View} from 'react-native';
import {AsyncStorage} from 'react-native';
import User from '../User';
import firebase from 'firebase';
import styles from '../constants/styles';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null
  }
  state= {
    phone: '',
    name: ''
  }

  _storeData = async () => {
    try {
      await AsyncStorage.setItem('@MySuperStore:key', 'I like to save it.');
    } catch (error) {
      // Error saving data
    }
  };

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('TASKS');
      if (value !== null) {
        // We have data!!
        console.log(value);
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  handleChange = key => val => {
    this.setState({ [key]: val })
  }

  // componentWillMount(){
  //   AsyncStorage.getItem('userPhone').then(val=>{
  //     if(val){
  //       this.setState({phone:val})
  //     }
  //   })
  // }

  submitForm = async () => {
    if(this.state.phone.length < 10) {
      Alert.alert('Error', 'Please enter valid number.')
    }else if (this.state.name.length < 3){
      Alert.alert('Error', 'Please enter valid name.')
    }else {
      alert(this.state.phone + '\n' + this.state.name)

      await AsyncStorage.setItem('userPhone', this.state.phone);
      User.phone = this.state.phone
      firebase.database().ref('users/' + User.phone).set({name: this.state.name})
      this.props.navigation.navigate('App')
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          keyboardType='number-pad'
          placeholder="Phone number"
          style={styles.input}
          value={this.state.phone}
          onChangeText={this.handleChange('phone')}
        />
        <TextInput 
          placeholder="Name"
          style={styles.input}
          value={this.state.name}
          onChangeText={this.handleChange('name')}
        />
        <TouchableOpacity onPress={this.submitForm}>
          <Text style={styles.btnText}>Enter</Text>
        </TouchableOpacity>
      </View>
    )
  }
}


