import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
import FIcon from 'react-native-vector-icons/Feather';
import ChatListItem from '../chats/ChatListItem';

export default class RecentChat extends Component {
    render()
    {
        return(
            <View style={css.container}>
                <FIcon name="chrome" size={80} color="#00ff00"/>
                <ChatListItem/>
            </View>
        )
    }
}

const css = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f8f9fb' }
})