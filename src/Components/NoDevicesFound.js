import React from 'react';
import {Text, StyleSheet} from 'react-native';

function NoDevicesFound() {
  return <Text style={styles.text}>No se encontraron dispositivos</Text>;
}

const styles = StyleSheet.create({
  text: {
    paddingTop: 20,
    color: 'white',
    fontSize: 18,
  },
});

export default NoDevicesFound;
