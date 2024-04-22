/* eslint-disable prettier/prettier */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function TodoItem({todo, deleteTodo}: any) {
  const styles = StyleSheet.create({
    itemWrapper: {
      backgroundColor: 'pink',
      borderWidth: 3,
      borderRadius: 10,
      margin: 20,
      padding: 15,
    },
  });
  return (
    <TouchableOpacity onPress={() => deleteTodo(todo.id)}>
      <View style={styles.itemWrapper}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>
          {todo.item} {todo.id}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
export default TodoItem;
