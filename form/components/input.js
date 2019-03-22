import React, { Component } from 'react';
import { View, StatusBar, TextInput, Animated, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

export default class FloatingLabelInput extends Component {
    constructor(props) {
        super(props);
         this.state = {
            isFocused: false,
        };
        this._animatedIsFocused = new Animated.Value(this.props.value === '' ? 0 : 1);
    }

  handleFocus = () => this.setState({ isFocused: true }, ()=> this.animate());
  handleBlur = () => this.setState({ isFocused: false }, ()=> this.animate());

  animate() {
    Animated.timing(this._animatedIsFocused, {
      toValue: (this.state.isFocused || this.props.value !== '') ? 1 : 0,
      duration: 200,
    }).start();
  }

  render() {
    const { label, placeholder, multiline, numberOfLines, onSubmitEditing, reference, returnKeyType, ...props } = this.props;
    const labelStyle = {
      position: 'absolute',
      left: 0,
      top: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [18, 0],
      }),
      fontSize: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [20, 12],
      }),
      color: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: ['#3C3C3C', 'rgba(60,60,60,0.75)'],
      }),
    };
    return (
      <View style={[{ paddingTop: 18, paddingBottom: 25,  }, this.props.style]}>
        <Animated.Text style={labelStyle }>
          {label}
        </Animated.Text>
        <TextInput
          {...props}
          ref={reference}
          returnKeyType={returnKeyType}
          numberOfLines={numberOfLines}
          onSubmitEditing={onSubmitEditing}
          multiline={multiline}
          placeholder={placeholder}
          value={this.props.value}
          onChangeText={(text) => this.props.onChange(text)}
          style={[styles.input, this.props.inputStyle]}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          clearButtonMode='while-editing'
          selectionColor='black'
        />
        {/* {this.state.isFocused && this.props.value !=='' &&
            <Image pointerEvents='none' source={require('./image/icon-clear-input.png')} style={{ position: 'absolute', right: 5, bottom: 31, height: 16, width: 16,}} />
        } */}
        {!this.state.isFocused && this.props.value !=='' && !this.props.valid &&
        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
            <Image source={require('./image/icon-error.png')} style={{ height: 16, width: 16,}} />
            <Text style={styles.invalid}>{this.props.invalidMessage}</Text>
        </View>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
    input:{
        fontSize: 20, color: '#3C3C3C',borderBottomColor: '#000000', borderBottomWidth: 1 , 
      },
     invalid:{
       fontSize: 10, color: 'white', marginLeft: 5, 
      }, 
});
