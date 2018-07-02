import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
import FIcon from 'react-native-vector-icons/Feather';
import ChatListItem from '../chats/ChatListItem';

export default class RecentChat extends Component {
    render()
    {
        return(
            <View style={css.container}>
                <FlatList
                data={[
                    {userid:1, face:0, name:'Jacky', lastmsg:'JackyJackyJackyJackyJackyJacky', lasttime:1530528364, unreadcount:3},
                    {userid:2, face:0, name:'Emily', lastmsg:'EmilyEmilyEmilyEmilyEmilyEmily', lasttime:1530528364, unreadcount:1},
                    {userid:3, face:0, name:'Winston', lastmsg:'WinstonWinstonWinstonWinstonWinston', lasttime:1530528364, unreadcount:0},
                    {userid:4, face:0, name:'Ben', lastmsg:'BenBenBenBenBenBenBenBenBen', lasttime:1530528364, unreadcount:0},
                    {userid:5, face:0, name:'Tracy', lastmsg:'TracyTracyTracyTracyTracyTracyTracy', lasttime:1530528364, unreadcount:0},
                    {userid:2, face:0, name:'Emily', lastmsg:'EmilyEmilyEmilyEmilyEmilyEmily', lasttime:1530528364, unreadcount:1},
                    {userid:3, face:0, name:'Winston', lastmsg:'WinstonWinstonWinstonWinstonWinston', lasttime:1530528364, unreadcount:0},
                    {userid:4, face:0, name:'Ben', lastmsg:'BenBenBenBenBenBenBenBenBen', lasttime:1530528364, unreadcount:0},
                    {userid:2, face:0, name:'Emily', lastmsg:'EmilyEmilyEmilyEmilyEmilyEmily', lasttime:1530528364, unreadcount:1},
                    {userid:3, face:0, name:'Winston', lastmsg:'WinstonWinstonWinstonWinstonWinston', lasttime:1530528364, unreadcount:0},
                    {userid:4, face:0, name:'Ben', lastmsg:'BenBenBenBenBenBenBenBenBen', lasttime:1530528364, unreadcount:0},
                ]}
                extraData={this.state}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
                />
            </View>
        )
    }

    state = {selected: (new Map(): Map<string, boolean>)};

    _keyExtractor = (item, index) => item.id;

    _onPressItem = (id: string) => {
        // updater functions are preferred for transactional updates
        this.setState((state) => {
        // copy the map rather than modifying state.
        const selected = new Map(state.selected);
        selected.set(id, !selected.get(id)); // toggle
        return {selected};
        });
    };

    _renderItem = ({item}) => (
        <ChatListItem
        id={item.id}
        onPressItem={this._onPressItem}
        selected={!!this.state.selected.get(item.id)}
        item = {item}
        />
    );

}

const css = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f8f9fb' }
})