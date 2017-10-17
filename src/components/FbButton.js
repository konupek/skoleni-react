import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  button: {
    maxWidth: 250,
    height: 30,
    padding: 10,
    backgroundColor: '#3B5998',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
});

export default ({onPress}) => (
  <View style={{ alignItems: 'center', padding: 5 }}>
    <Text>Přihlásit se pomocí facebooku</Text>
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={{  color: 'white', fontWeight:  'bold'}}>FB Login</Text>
    </TouchableOpacity>
  </View>
);
