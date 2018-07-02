//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../utils/Colors';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../../fontconfig.json';


const CIcon = createIconSetFromFontello(fontelloConfig);

// create a component
export default class CustomTabIcon extends Component {
  render(){
      var color = this.props.focused ? Colors.BTN_FOCUSED : Colors.BTN_UNFOCUSED;
      return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', alignSelf: 'center'}}>
          <CIcon color={color} name={this.props.iconName} size={this.props.iconName == 'chat-message' ? 34 : 30}/>
        </View>
      );
    }
}
