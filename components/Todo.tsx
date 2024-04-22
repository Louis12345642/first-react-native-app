/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import {useState} from 'react';
import TodoItem from './TodoItem';
// import TodoItem from './todoItem';

import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';

function Todo() {
  const [text, setText] = useState('');
  const [todos, setTodo] = useState([
    {
      id: 1,
      item: 'eat food',
    },
    {
      id: 2,
      item: 'play video games',
    },
    {
      id: 3,
      item: 'go and code',
    },
    {
      id: 4,
      item: 'python course ',
    },
  ]);

  //function to add items to the state
  const submitTodo = (text: any) => {
    let newList = [
      ...todos,
      {
        id: Math.random(),
        item: text,
      },
    ];

    setTodo(newList);

    console.log(text);
  };
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
  const deleteTodo = (id: Number) => {
    const newTodos = todos.filter((t: any) => t.id !== id);
    setTodo(newTodos);
  };

  return (
    <View style={styles.todoWraper}>
      <TextInput
        onChangeText={(val: any) => {
          setText(val);
        }}
        placeholder="note anything"
        style={styles.textFlied}
      />

      <TouchableOpacity onPress={() => submitTodo(text)}>
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
        renderItem={({item}) => (
          <TodoItem todo={item} deleteTodo={deleteTodo} />
        )}
      />
    </View>
  );
}
export default Todo;
