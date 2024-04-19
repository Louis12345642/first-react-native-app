/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';

function Todo() {
  //creating all the styles here
  const styles = StyleSheet.create({
    textFlied: {
      backgroundColor: '#f7cb66',
      width: 220,
      height: 45,
      borderRadius: 10,
      margin: 20,
      padding: 10,
      borderWidth: 2,
      borderColor: '#000',
    },
    btnWraper: {
      backgroundColor: '#7fbc95',
      borderWidth: 3,
      borderRadius: 10,
    },
    todoWraper: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    },
  });


  return (
    <View style={styles.todoWraper}>
      <TextInput placeholder="note anything" style={styles.textFlied} />
      <View style={styles.btnWraper}>
        <Text style={{fontWeight: 'bold'}}>Add</Text>
      </View>
    </View>
  );
}
export default Todo;
