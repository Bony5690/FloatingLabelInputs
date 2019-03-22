import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class RequestView extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text style={{fontFamily: 'SFProText-Regular', fontSize: 17, color: '#3C3C3C',  }}> My Requests for Assistance  </Text>
        <View>
        <Text style={{fontFamily: 'SFProText-Regular', fontSize: 13, color: '#8E8E93', textAlign: 'center', width: 400  }}>You have no requests.</Text>
        <Text style={{textAlign: 'center', fontFamily: 'SFProText-Regular', fontSize: 13, color: '#8E8E93',}}>Go ahead, ask for some help now!</Text>
        </View>
      
      </View>
    );
  }
}

export default RequestView;
