import React from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native';


const ImageInfo = (props) => {
    return(
        <View style={styles.wrapper}>
        <TouchableWithoutFeedback
            onPress={props.onPress}
        >
            <View style={styles.picWrapper}>
                <Image
                    style={styles.profilePic}
                    source={props.source}
                />
                <Text style={styles.text}>Add Photo</Text>
            </View>
        </TouchableWithoutFeedback>
        <View style={{ marginTop: 50 }}>
            <Text style={styles.brokerName}>{props.brokerName}</Text>
            <Text style={styles.brokerRealty} >{props.brokerRealty}</Text>
        </View>

    </View>
    )
}

export default ImageInfo;


const styles = StyleSheet.create({
    text: {
        textAlign: 'center', fontSize: 15, color: '#6DA3D3', letterSpacing: -0.24
    },
    brokerName: {
        fontSize: 20, lineHeight: 24, color: '#3C3C3C'
    },
    brokerRealty: {
        fontSize: 15, lineHeight: 20, color: '#8E8E93', letterSpacing: -0.24
    },
    profilePic: {
        width: 90, height: 84
    },
    picWrapper: {
        padding: 20
    },
    wrapper: {
        flexDirection: 'row'
    }
})