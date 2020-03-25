import React from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  FlatList
} from "react-native";
import { Input, Card, Button, Icon } from "native-base";
import * as firebase from "firebase";


export default class AddBoardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      messageList: []
    };
  }

  sendMessage = message => {
    var messageListRef = firebase.database().ref("message_list");
    //push message to database
    var newMessageRef = messageListRef.push();
    newMessageRef.set({
      text: message,
      time: Date.now()
    });
    this.setState({ message: "" });
  };

  updateList = messageList => {
    this.setState({ messageList: messageList });
  };

  UNSAFE_componentWillMount() {
    //tricky stuff goes here
    var self = this;

    var messageListRef = firebase.database().ref("message_list");

    messageListRef.on("value", dataSnapshot => {
      //into a callback
      if (dataSnapshot.val()) {
        let messageList = Object.values(dataSnapshot.val());
        self.updateList(messageList.reverse());
      }
    });
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
        {/* <View style={styles.header}>
          <Text style={styles.headerText}>TODO/S </Text>
        </View> */}
        <View style={styles.listContainer}>
        <View style={styles.inputContainer}>
          <Input
            onChangeText={text => {
              this.setState({ message: text });
            }}
            value={this.state.message}
            placeholder="Enter Task"
          />
          <Button
            onPress={() => {
              this.sendMessage(this.state.message);
            }}
            danger
            rounded
            icon
          >
            <Icon name="arrow-forward" />
          </Button>
        </View>
          <FlatList
            data={this.state.messageList}
            inverted
            keyExtractor={(item, index) => item.time.toString()}
            renderItem={({ item }) => (
              <Card style={styles.listItem}>
                <Text style={styles.messageText}>{item.text}</Text>
                <Text style={styles.timeText}>
                  {new Date(item.time).toLocaleDateString}
                </Text>
              </Card>
            )}
          />
        </View>
       
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    margin: 2,
    backgroundColor: "white"
  },
  header: {
    backgroundColor: "green",
    alignItems: "center",
    height: 40,
    borderRadius: 15,
    justifyContent: "center"
  },
  headerText: {
    paddingHorizontal: 10,
    color: "#FFF",
    fontSize: 20
  },
  listContainer: {
    flex: 1,
    padding: 5
  },
  listItem: {
    padding: 10
  },
  messageText: {
    fontSize: 20,
    textAlign: 'center'
  },
  timeText: {
    fontSize: 10
  },
  inputContainer: {
    flexDirection: "row",
    padding: 5,
    borderWidth: 3,
    borderRadius: 15,
    borderColor: "black",
    color: "#fff"
  }
});