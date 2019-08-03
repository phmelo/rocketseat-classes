import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import './config/ReactotronConfig';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

console.tron.log('Teste de debug no reactotron!');

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>ABCDEFG!</Text>
      <Text style={styles.welcome}>HIJKLMNOP</Text>
      <Text style={styles.welcome}>QRSTUVWXYZ</Text>
      <Text style={styles.welcome}>Now I know my A B C</Text>
      <Text style={styles.welcome}>Next time won't </Text>
      <Text style={styles.welcome}>you sing with me?!</Text>
    </View>
  );
}
