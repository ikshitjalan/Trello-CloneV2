import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Keyboard } from 'react-native';
import {  Button, Platform, TouchableOpacity,TouchableWithoutFeedback } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import Settings from './Settings';
import Account from './AccountPage';
import ViewBoard from './ViewBoardPage';
import AddBoard from './AddBoardPage';

import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

 class MyHomePage extends React.Component {
  render(){
    return (
              <Drawer.Navigator initialRouteName="Home">
            
               <Drawer.Screen
                name="ViewBoard"
                component={ViewBoard}
                options={{
               title: "ViewBoard",
               headerStyle: { backgroundColor: "black" },
                headerTintColor: "white"
               }}
               />
               <Drawer.Screen
                name="AddBoard"
                component={AddBoard}
                options={{
               title: "AddBoard",
               headerStyle: { backgroundColor: "black" },
                headerTintColor: "white"
               }}
               />
                <Drawer.Screen
                name="Account"
                component={Account}
                options={{
               title: "Account",
               headerStyle: { backgroundColor: "black" },
                headerTintColor: "white"
               }}
               />
                <Drawer.Screen
                name="Settings"
                component={Settings}
                options={{
               title: "Settings",
               headerStyle: { backgroundColor: "black" },
                headerTintColor: "white"
               }}
               />
              </Drawer.Navigator>
             
              
              
               
            
     
  
    );
  }
  
}

export default class HomePage extends React.Component{
  render(){
    return(
     
     
      <MyHomePage/>
   
    
    );
  }
}  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
