import React from 'react';
import { StyleSheet, Text, View,StatusBar } from 'react-native';

function Loading(){
    return <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#FDF6AA"></StatusBar>
        <Text style={styles.text}>Getting the Fucking Weather</Text>
    </View>
}

const styles = StyleSheet.create({
    container:{
        flex : 1,
        flexDirection: 'column',
        backgroundColor: '#FDF6AA',
        justifyContent: 'flex-end',
        paddingHorizontal : 30,
        paddingVertical: 100,
    },
    text:{
        color:'#2c2c2c',
        fontSize: 30
    }
})

export default Loading