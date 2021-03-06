import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {   Platform, TouchableOpacity } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base';
import * as firebase from 'firebase';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props)

    this.state = ({
        name: '',
        email: '',
        password: ''
        
    })
}

signUpUser = (name,email, password) => {

    try {

        if (this.state.password.length < 6) {
            alert("Please enter atleast 6 characters")
            return;
        }

        firebase.auth().createUserWithEmailAndPassword(email, password)
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
              <Label>Full Name</Label>
              <Input
                  autoCorrect={false}
                  autoCapitalize="none"
                  onChangeText={(email) => this.setState({ email })}
              />

          </Item>

          <Item floatingLabel>
              <Label>Email</Label>
              <Input
                  autoCorrect={false}
                  autoCapitalize="none"
                  onChangeText={(name) => this.setState({ name })}
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
              primary
              onPress={() => this.signUpUser(this.state.name,this.state.email, this.state.password)}
          >
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
});
