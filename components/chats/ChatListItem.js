import React, { Component, PureComponent } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Colors from '../../utils/Colors';

export default class ChatListItem extends PureComponent {

    _onPress = () => {
        this.props.onPressItem(this.props.id);
      };

   
    render(){
        return(
            <View key={this.props.id} onPress={this._onPress} stlye={css.container}>
                <View style={css.box}>
                    <Text style={css.title}>{this.props.item.name}</Text>
                    <Text style={css.msg}>{this.props.item.lastmsg}</Text>
                    <Text style={css.time}>11:30</Text>
                    <View style={css.readbg} width={this.props.item.unreadcount > 0 ? 20 : 0}>
                        <Text style={css.read}>{this.props.item.unreadcount > 0 ? this.props.item.unreadcount : ' '}</Text>
                    </View>
                </View>
                <View style={css.faceborder}><Image style={css.face}/></View>
                
            </View>
        );
    }
}

const css = StyleSheet.create({
    container: { },
    faceborder: { position:'absolute', borderRadius:25, width:50, height:50, left:10, top:18, backgroundColor:'white', 
                shadowColor:Colors.BTN_FOCUSED, shadowOffset:{width:0, height:5}, shadowOpacity:0.05, shadowRadius:5,},
    face: { width:46, height:46, borderRadius:23, marginTop:2, marginLeft:2, backgroundColor:"#f8f8f8",},

    box: { height:70, marginVertical:8, marginLeft:36, marginRight:8, backgroundColor:'white', borderRadius:5, shadowColor:'black', shadowOffset:{width:10, height:10}, shadowOpacity:0.1, shadowRadius:20, },
    title: { color:Colors.TXT, fontSize:20, fontWeight:'bold', marginLeft:40, marginTop:12},
    msg: { color:"#999999", fontSize:14, marginLeft:40, marginBottom:12},
    time: { position: 'absolute', right:12, top:12, color:"#cccccc", fontSize:12,},
    readbg: { position: 'absolute', right:-4, top:-8, borderRadius:10, width:20, height:20, backgroundColor:'#DD0000', alignItems:'center', justifyContent:'center',
             shadowColor:'black', shadowOffset:{width:0, height:5}, shadowOpacity:0.3, shadowRadius:5,  },
    read: { color:'white', fontSize:12, fontWeight:'bold' },
}
)