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
  FlatList,
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
      color: 'black',
      marginBottom: 20,
      padding: 10,
      borderRadius: 10,
      minWidth: 200,
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
    marg: {
      margin: 20,
    },
    btn: {
      marginBottom: 20,
      backgroundColor: 'pink',
      padding: 20,
      borderRadius: 10,
      elevation: 5,
    },
  });

  //using the flatView to display the users
  return (
    <View style={styles.marg}>
      <View style={styles.btn}>
        <TextInput style={styles.input} />
        <Button title="Add user" />
      </View>

      <FlatList
        data={users}
        renderItem={({item}) => (
          <View style={styles.userCard}>
            <Text style={styles.userInfor}>
              {item.name} is {item.status}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

export default App;
