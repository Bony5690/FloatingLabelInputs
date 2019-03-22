import React, { Component } from 'react';
import { StyleSheet, View, } from 'react-native';
import ProfilePage from './components/profile-page';
import RequestView from './components/request-view';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
     
    }
  }

  render() {
    return (
      <View style={styles.container}>
      {/* <ProfilePage />  */}
      <RequestView/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  }

});
