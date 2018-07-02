import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';


export default class Register extends Component {
    render()
    {
        return(
            <View style={css.container}>
                <Button onPress={Actions.home}>Back</Button>
            </View>
        )
    }
}
const css = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f8f9fb' }
})
