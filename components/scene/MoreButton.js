//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../utils/Colors';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';
import FIcon from 'react-native-vector-icons/MaterialCommunityIcons';


// create a component
export default class MoreButton extends Component {
    render() {
        return (
            <View style={{width:30, height:30, marginTop:-40, marginRight: 12, }}>
            <Button onPress={Actions.home} >
                <FIcon color={Colors.BTN_FOCUSED} name={'dots-horizontal'} size={26}/>
            </Button>
            </View>
        );
    }
}