import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Icon} from 'native-base';

export default class Settings extends React.Component {

  render(){
    return (
      <View style={styles.container}>
        <Text>OSettingsp!</Text>
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