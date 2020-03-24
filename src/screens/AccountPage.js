import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class AccountPage extends React.Component {
 
  render(){
    return (
      <View style={styles.container}>
        <Text>OAccountPage!</Text>
      </View>
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
