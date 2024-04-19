/* eslint-disable prettier/prettier */
import {Dimensions, StyleSheet, View} from 'react-native';
import React from 'react';
import Header from './components/Header';
import Todo from './components/Todo';

function App() {
  //creating the universal styles fo the app
  let ScreenHeight = Dimensions.get('window').height;
  const styles = StyleSheet.create({
    mainWrapper: {
      backgroundColor: '#60c0bf',
      height: ScreenHeight,
    },
  });

  return (
    <View style={styles.mainWrapper}>
      <Header />
      <Todo />
    </View>
  );
}

export default App;
