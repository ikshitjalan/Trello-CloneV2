import React from 'react';
import { StyleSheet, Text, View, Keyboard } from 'react-native';
import {  Button, Platform, TouchableOpacity,TouchableWithoutFeedback } from 'react-native';

export default class HomePage extends React.Component {
  render(){
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
        <Text>Welcome! To the homepage</Text>
        
      </View>
      </TouchableWithoutFeedback>
  
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
