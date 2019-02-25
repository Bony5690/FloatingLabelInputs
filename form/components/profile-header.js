import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class ProfileHeader extends Component {
    render() {
        return (
            <View>
                <View style={styles.wrapper}>
                    <TouchableOpacity>
                        <Text style={styles.textStyle}>Close</Text>
                    </TouchableOpacity>
                    <Text style={styles.textStyle}>Profile</Text>
                    <TouchableOpacity>
                        <Text style={styles.textStyle}>Update</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}


export default ProfileHeader;

const styles = StyleSheet.create({
    wrapper: {
        paddingTop: 45, flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#2b6fb2', height: 75
    },
    textStyle: {
        color: 'white', fontSize: 18, fontWeight: '600'
    }
})