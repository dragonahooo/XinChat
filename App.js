import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Login from './components/scene/Login';
import Register from './components/scene/Register';
import Home from './components/scene/Home';
import RecentChat from './components/scene/RecentChat';
import MemberList from './components/scene/MemberList';
import AboutMe from './components/scene/AboutMe';
import SplashScreen from 'react-native-splash-screen';
import Colors from './utils/Colors';
import BackButton from './components/scene/BackButton';
import MoreButton from './components/scene/MoreButton';
import CustomTabIcon from './components/scene/CustomTabIcon';

let win = Dimensions.get('window');

export default class XinChat extends Component{
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {

    return (
      <Router backTitle=" " 
      tintColor={Colors.BTN_FOCUSED}
      navigationBarStyle={css.navbar} 
      renderBackButton={<BackButton></BackButton>} 
      renderRightButton={<MoreButton></MoreButton>}
      titleStyle={css.navtitle} 
      >
        <Scene key="root">

          <Scene key="hall" tabs tabBarStyle={css.tabbar} showLabel={false}  >
            <Scene key="recent" component={RecentChat} title="信语XinChat" initial icon={<CustomTabIcon></CustomTabIcon>} iconName={'chat-message'}/>
            <Scene key="list" component={MemberList} title="通讯录Contacts" icon={TabIcon} iconName={'chat-contacts'} />
            <Scene key="me" component={AboutMe} title="我Me" icon={TabIcon} iconName={'chat-me'} />
          </Scene>
          <Scene key="login" component={Login} title="登录Login" />
          <Scene key="register" component={Register} title="注册Register" />
          <Scene key="home" component={Home} title="信语XinChat" initial renderBackButton={()=><View/>} />
        </Scene>

      </Router>
    );
  }
}

const css = StyleSheet.create({
  navbar: { backgroundColor:Colors.SCREEN_BG, borderBottomWidth: 0, height: 80, },
  navtitle: { flex:1, marginTop:40, marginVertical:0, marginLeft:-60, color:Colors.TXT, fontSize: 30, fontWeight:'bold', textAlign:'left'},

  tabbar: { backgroundColor:Colors.WHITE, borderTopColor:Colors.WHITE_GRAY},
})