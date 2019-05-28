import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  View,
} from 'react-native';
import User from '../User';
import firebase from 'firebase'

export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  componentWillMount(){
    var firebaseConfig = {
      apiKey: "AIzaSyBpjGryDZ0S9usCJzKBPEemj_Nx5MkXcNU",
      authDomain: "innercitygameschatapp.firebaseapp.com",
      databaseURL: "https://innercitygameschatapp.firebaseio.com",
      projectId: "innercitygameschatapp",
      storageBucket: "innercitygameschatapp.appspot.com",
      messagingSenderId: "941535049267",
      appId: "1:941535049267:web:ffbe640c35bac1a9"
    };
    firebase.initializeApp(firebaseConfig);
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    User.phone = await AsyncStorage.getItem('userPhone');
    this.props.navigation.navigate(User.phone ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}