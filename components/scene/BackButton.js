//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from 'react-native-button';
import Colors from '../../utils/Colors';
import { Actions } from 'react-native-router-flux';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../../fontconfig.json';


const CIcon = createIconSetFromFontello(fontelloConfig);

// create a component
export default class BackButton extends Component {
    render() {
        return (
            <View style={{width:30, height:30, marginTop:-40, marginLeft: 12, }}>
            <Button onPress={Actions.pop} >
                <CIcon color={Colors.BTN_FOCUSED} name={'chat-arrback'} size={21}/>
            </Button>
            </View>
        );
    }
}