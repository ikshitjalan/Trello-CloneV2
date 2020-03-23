import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {   Platform, TouchableOpacity } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base';
import * as firebase from 'firebase';


export default class LoginPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = ({
        email: '',
        password: ''
    })
}


loginUser = (email, password) => {

    try {

        firebase.auth().signInWithEmailAndPassword(email, password).then(function (user) {
            console.log(user)

        })
    }
    catch (error) {
        console.log(error.toString())
    }
}
  render(){
    return (
      <Container style={styles.container}>
      <Form>
          <Item floatingLabel>
              <Label>Email</Label>
              <Input
                  autoCorrect={false}
                  autoCapitalize="none"
                  onChangeText={(email) => this.setState({ email })}
              />

          </Item>

          <Item floatingLabel>
              <Label>Password</Label>
              <Input
                  secureTextEntry={true}
                  autoCorrect={false}
                  autoCapitalize="none"
                  onChangeText={(password) => this.setState({ password })}
              />
          </Item>

          <Button style={{ marginTop: 10 }}
              full
              rounded
              success
              onPress={() => this.loginUser(this.state.email, this.state.password)}
          >
              <Text style={{ color: 'white' }}> Login</Text>
          </Button>
          <Button style={{ marginTop: 10 }}
              full
              rounded
              success
              onPress={() => this.props.navigation.navigate('Detail', { screenName: "My Detail Screen" })}>
          
              <Text style={{ color: 'white' }}> Sign Up</Text>
          </Button>


      </Form>
      
  </Container>
   
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      padding: 10
  },
 
  androidButtonText: {
    color: 'blue',
    fontSize: 20
  }
});
