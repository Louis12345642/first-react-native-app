/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import {todos} from '../data/todos';
import {useState} from 'react';
import TodoItem from './todoItem';

import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';

function Todo() {
  const [TODOS, setTodo] = useState(todos);
  //creating all the styles here

  const styles = StyleSheet.create({
    textFlied: {
      backgroundColor: '#f7cb66',
      width: 410,
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
      margin: 20,
      padding: 15,
    },
    todoWraper: {
      display: 'flex',
      // flexDirection: 'row',
      justifyContent: 'center',
    },
    line: {
      backgroundColor: 'black',
      height: 4,
      width: 400,
      margin: 20,
    },
  });

  //a function to delete a todo
  const deleteTodo = () => {
    console.log('delete');
  };

  return (
    <View style={styles.todoWraper}>
      <TextInput placeholder="note anything" style={styles.textFlied} />

      <TouchableOpacity>
        <View style={styles.btnWraper}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              color: 'black',
              textAlign: 'center',
            }}>
            Add
          </Text>
        </View>
      </TouchableOpacity>

      <View style={styles.line}></View>

      <Text
        style={{
          fontSize: 25,
          fontWeight: '800',
          color: 'black',
          textAlign: 'center',
        }}>
        Todos
      </Text>
      <FlatList
        data={todos}
        renderItem={({item}) => <TodoItem todo={item}  />}
      />
    </View>
  );
}
export default Todo;
