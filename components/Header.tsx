/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Header() {
  //CREATING THE STYLES HERE
  const styles = StyleSheet.create({
    title: {
      fontWeight: 'bold',
      color:'black',
      fontSize: 27,
    },
    headerWraper: {
      padding: 20,
    },
  });
  return (
    <View style={styles.headerWraper}>
      <Text style={styles.title}>Welcome back note things:</Text>
    </View>
  );
}

export default Header;
