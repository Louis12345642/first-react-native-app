/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {useState} from 'react';
import React from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

//creating the state for name

function App() {
  //creating a list of users of the app

  const [users, setUsers] = useState([
    {
      name: 'mubarak louis',
      status: 'online',
    },
    {
      name: 'dev',
      status: 'offline',
    },
    {
      name: 'mary',
      status: 'online',
    },
    {
      name: 'mubarak louis',
      status: 'online',
    },
    {
      name: 'dev',
      status: 'offline',
    },
    {
      name: 'mary',
      status: 'online',
    },
    {
      name: 'mubarak louis',
      status: 'online',
    },
    {
      name: 'dev',
      status: 'offline',
    },
    {
      name: 'mary',
      status: 'online',
    },
  ]);

  const styles = StyleSheet.create({
    input: {
      height: 40,
      width: 200,
      borderColor: 'black',
      borderWidth: 4,
      marginTop: 30,
      color: '#fff',
      marginBottom: 20,
      padding: 10,
    },
    userInfor: {
      color: '#fff',
      fontSize: 20,
      marginBottom: 20,
    },
    userCard: {
      backgroundColor: 'orange',
      width: 400,
      padding: 15,
      marginBottom: 20,
      borderRadius: 10,
      elevation: 5,
    },
  });

  return (
    <ScrollView>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          backgroundColor: 'gray',
          borderColor: '#fff',
          paddingTop: 30,
        }}>
        {users.map(user => {
          return (
            <View style={styles.userCard}>
              <Text style={styles.userInfor}>
                {user.name} is {user.status}
              </Text>
            </View>
          );
        })}
        <TextInput style={styles.input} />
        <Button title="Add user" />
      </View>
    </ScrollView>
  );
}

export default App;
