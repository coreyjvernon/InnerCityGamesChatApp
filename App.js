import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, TextInput, View} from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

export default class App extends React.Component {
  state= {
    phone: '',
    name: ''
  }

  handleChange = key => val => {
    this.setState({ [key]: val })
  }

  submitForm = () => {
    alert(this.state.phone + '\n' + this.state.name)
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
          <Text>Enter</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    width: '90%',
    marginBottom: 10,
    borderRadius: 5,
  },
});
