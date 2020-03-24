import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Keyboard, TouchableOpacityBase } from 'react-native';
import {   Platform, TouchableOpacity,TouchableWithoutFeedback } from 'react-native';

import {FontAwesome5} from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';

import Settings from './Settings';
import Account from './AccountPage';
import ViewBoard from './ViewBoardPage';
import AddBoard from './AddBoardPage';

import {createDrawerNavigator} from '@react-navigation/drawer';
import { Container } from 'native-base';

const Drawer = createDrawerNavigator();


 class MyHomePage extends React.Component {
 
  render(){
    return (
              <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen
                name="AddBoard"
                component={AddBoard}
                
               />
               <Drawer.Screen
                name="ViewBoard"
                component={ViewBoard}
                
               />
               
                <Drawer.Screen
                name="Account"
                component={Account}
                
                
               />
                <Drawer.Screen
                name="Settings"
                component={Settings}
               />
              </Drawer.Navigator>
             
              
              
               
            
     
  
    );
  }
  
}

export default function HomePage({navigation})  {
  
  
    return(
    
         
      
       <MyHomePage/>
     
     
    
   
    
    );
  
}  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});
