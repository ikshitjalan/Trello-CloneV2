import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

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

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


 class MyApp extends React.Component {
 
    
  render(){
    return (
    
      <Stack.Navigator>
      <Stack.Screen
        name="Home"
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
        options={{
          title: "Welcome to HomePage",
          headerStyle: { backgroundColor: "blue" },
          headerTintColor: "white"
        }}
      />
    </Stack.Navigator>
    
    );
  }
  
}

export default class App extends React.Component{
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
