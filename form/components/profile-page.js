import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View,  ScrollView, KeyboardAvoidingView } from 'react-native';
import ImageInfo from './image-info';
import FloatingLabelInput from './input';
import ImagePicker from 'react-native-image-crop-picker';


class ProfilePage extends Component {
  constructor() {
    super()
    this.state = {
      brokerLicense: '435872345',
      firstName: 'Dan',
      LastName: 'Spillane',
      email: 'dan@brokerassist.com',
      phoneNumber: '(708) 829-3729',
      teamName: '',
      bio: 'Enter a brief bio about yourself',
      pic: ''

    }
  }

  pickImage = () => {
    ImagePicker.openPicker({
      width: 300,
      cropping: true,
      height: 400,
   
    }).then(image => {
      this.setState({pic: {uri: image.path}});
    }).catch(e => {
      console.log(e);
      Alert.alert(e.message ? e.message : e);
    });
  }

  setValue = (name, val) => {
    this.setState({ [name]: val })
  }

  
  render() {
    const { brokerLicense, firstName, LastName, email, teamName, phoneNumber, bio, pic } = this.state;
    const teamNamePlaceholder = <Text>Team Name<Text style={styles.teamNamePlaceholderText}> Optional</Text></Text>
    const bioPlaceholder = <Text>Bio<Text style={styles.bioPlaceholderText}> Optional</Text></Text>
    return (

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null} >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, }}>
          <Text style={styles.textMessage}>Let's finish creating your profile.</Text>

          <ImageInfo
            source={pic}
            onPress={this.pickImage}
            brokerName='Dan Spillane'
            brokerRealty='Dream Town Reality'
          />
          <View style={{ paddingHorizontal: 25 }}>
            <FloatingLabelInput
              autoCapitalize='none'
              style={{ marginTop: 30, }}
              label='NAR Broker License'
              onChange={(val) => this.setValue('brokerLicense', val)}
              value={brokerLicense}
              valid={true}
            />

            <FloatingLabelInput
              autoCapitalize='none'
              style={{ marginTop: 30, }}
              label='First Name'
              onChange={(val) => this.setValue('firstName', val)}
              value={firstName}
              valid={true}
            />

            <FloatingLabelInput
              autoCapitalize='none'
              style={{ marginTop: 30, }}
              label='Last Name'
              onChange={(val) => this.setValue('lastName', val)}
              value={LastName}
              valid={true}
            />


            <FloatingLabelInput
              autoCapitalize='none'
              style={{ marginTop: 30, }}
              textContentType='emailAddress'
              label='First Name'
              onChange={(val) => this.setValue('email', val)}
              value={email}
              valid={true}
              invalidMessage='Please enter a valid email address'
            />


            <FloatingLabelInput
              autoCapitalize='none'
              style={{ marginTop: 30, }}
              label='Phone Number'
              onChange={(val) => this.setValue('phoneNumber', val)}
              value={phoneNumber}
              valid={true}
            />





            <FloatingLabelInput
              autoCapitalize='none'
              style={{ marginTop: 30, }}
              label={teamNamePlaceholder}
              onChange={(val) => this.setValue('teamName', val)}
              value={teamName}
              valid={true}
            />

            <FloatingLabelInput
              autoCapitalize='none'
              style={{ marginTop: 30, }}
              label={bioPlaceholder}
              inputStyle={{ borderBottomWidth: 0, color: '#3C3C3C', opacity: 0.47, textAlignVertical: 'top' }}
              onChange={(val) => this.setValue('bio', val)}
              value={bio}
              valid={true}
            />


          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}

export default ProfilePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',


  },
  textMessage: {
    textAlign: 'center', marginTop: 30, fontWeight: 'bold', fontSize: 22, letterSpacing: -0.53, color: '#000000'
  },
  inputStyle: {
    borderBottomColor: '#000000', borderBottomWidth: 1, fontSize: 20, fontFamily: 'SFProDisplay-Regular'
  },
  teamNamePlaceholderText: {
    color: '#8E8E93', fontSize: 12
  },

  bioPlaceholderText:{
    color: '#8E8E93',  fontFamily: 'SFProText-Regular' 
  }
});
