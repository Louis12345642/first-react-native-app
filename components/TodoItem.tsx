/* eslint-disable prettier/prettier */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function TodoItem({todo}:any) {
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
    <TouchableOpacity>
      <View style={styles.itemWrapper}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>{todo.item}</Text>
      </View>
    </TouchableOpacity>
  );
}
export default TodoItem;
