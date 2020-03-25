import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {   Platform, TouchableOpacity,TouchableWithoutFeedback } from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';

import {FontAwesome5} from '@expo/vector-icons';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAtUI7QpKNWew_kEDX4mgRGeJmW__deO68",
  authDomain: "trello-clone-7d2b6.firebaseapp.com",
  databaseURL: "https://trello-clone-7d2b6.firebaseio.com",
  projectId: "trello-clone-7d2b6",
  storageBucket: "trello-clone-7d2b6.appspot.com",
  messagingSenderId: "595423285662",
  appId: "1:595423285662:web:b916a976b0cfbba8fc068f",
  measurementId: "G-65XQH9BVSF"
};

firebase.initializeApp(firebaseConfig);

import { NavigationContainer } from '@react-navigation/native';

import LoginPage from './src/screens/LoginPage';
import SignUp from './src/screens/SignUp';
import HomePage from './src/screens/HomePage'

import { createStackNavigator,headerRight } from '@react-navigation/stack';

const Stack = createStackNavigator();



 class MyApp extends React.Component   {
    
  render(){
    return (
    
      <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginPage}
        options={{
          title: "Trello",
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "white"
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          title: "Sign Up To Login",
          headerStyle: { backgroundColor: "blue" },
          headerTintColor: "white"
        }}
      />
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options = {({navigation})=>(
          {
            title :"TODO/S",
            headerLeft: null,
            gesturesEnabled: false,
            swipeEnabled: false
            
          
          }
          
         
        )}
        navigationOptions= {() => ({
          gestureResponseDistance: {
            horizontal: -1,
            vertical: -1,
          }
        })}
      />
    </Stack.Navigator>
    
    );
  }
    
  }
  


export default class App extends React.Component{
  static navigationOptions = ({ navigation }) => {


    return {
      title: 'Home',
      headerRight : ()=> (
        <TouchableOpacity
          style ={{alignItems:'flex-start',margin:16}}
          onPress = {()=>navigation.dispatch(DrawerActions.openDrawer())}
        >
          <FontAwesome5 name='bars' size={24} color = '#161924'/>
        </TouchableOpacity>
      )
    }
  };
  render(){
    return(
      <NavigationContainer>
      <MyApp/>
    </NavigationContainer>
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
