import React, { Component } from 'react';
import { StyleSheet, View, } from 'react-native';
import ProfilePage from './components/profile-page';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
     
    }
  }

  render() {
    return (
      <View style={styles.container}>
      <ProfilePage /> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  }

});
