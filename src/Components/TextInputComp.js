import React, {useState, useEffect} from 'react';
import {TextInput, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function SliderComp(props) {
  const [UUID, setUUID] = useState(props.initialValue);
  useEffect(() => {
    async function getAsyncData() {
      try {
        const storedValue = await AsyncStorage.getItem(props.UUIDKey);
        if (storedValue !== null) {
          setUUID(storedValue);
          return storedValue;
        }
      } catch (e) {
        console.log(e);
      }
    }
    getAsyncData();
  }, []);
  return (
    <TextInput
      style={styles.textInput}
      onChangeText={async (text) => {
        setUUID(text);
        try {
          await AsyncStorage.setItem(props.UUIDKey, text);
        } catch (e) {
          console.log(e);
        }
      }}
      value={UUID}
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    width: 140,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 10,
  },
});

export default SliderComp;
