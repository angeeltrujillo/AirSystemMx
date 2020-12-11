import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Slider from '@react-native-community/slider';
import AsyncStorage from '@react-native-async-storage/async-storage';

function SliderComp(props) {
  const [value, setValue] = useState(30);
  useEffect(() => {
    async function getAsyncData() {
      try {
        const storedValue = await AsyncStorage.getItem(props.keyValue);
        if (storedValue !== null) {
          setValue(storedValue);
          return storedValue;
        }
      } catch (e) {
        console.log(e);
      }
    }
    getAsyncData();
  }, []);
  return (
    <View style={styles.container}>
      <Slider
        style={styles.SliderStyle}
        minimumValue={1}
        maximumValue={60}
        minimumTrackTintColor="#404E88"
        maximumTrackTintColor="#FFFFFF"
        value={parseInt(value, 10)}
        onValueChange={(changedValue) => {
          setValue(Math.round(changedValue));
        }}
        onSlidingComplete={async (changeValue) => {
          try {
            await AsyncStorage.setItem(
              props.keyValue,
              Math.round(changeValue).toString(),
            );
          } catch (e) {
            console.log(e);
          }
        }}
      />
      <View style={styles.sliderView}>
        <Text style={styles.sliderText}>{props.buttonName}</Text>
        <Text style={styles.sliderText}>{value}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    alignItems: 'center',
    height: '25%',
  },
  SliderStyle: {
    width: 250,
    height: '100%',
  },
  sliderView: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sliderText: {
    fontFamily: 'Tithe-Regularly',
    color: 'white',
    marginTop: -10,
    fontSize: 18,
  },
});
export default SliderComp;
