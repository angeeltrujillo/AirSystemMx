import React, {useRef, useEffect} from 'react';
import {View, StyleSheet, Animated, Text} from 'react-native';
import BluetoothSvg from './BluetoothSvg';

function SearchingBluetooth() {
  const scaleCircle = useRef(new Animated.Value(1)).current;
  const OpaqueCircle = useRef(new Animated.Value(1)).current;
  const scaleCircle2 = useRef(new Animated.Value(1)).current;
  const OpaqueCircle2 = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    ScanBluetoothAnimation();
  }, []);

  const ScanBluetoothAnimation = () => {
    Animated.loop(
      Animated.parallel([
        Animated.timing(scaleCircle, {
          toValue: 4.5,
          duration: 1500,
          isInteraction: false,
          useNativeDriver: false,
        }),
        Animated.timing(OpaqueCircle, {
          toValue: 0,
          duration: 1500,
          isInteraction: false,
          useNativeDriver: false,
        }),
        Animated.timing(scaleCircle2, {
          delay: 500,
          toValue: 4.5,
          duration: 1500,
          isInteraction: false,
          useNativeDriver: false,
        }),
        Animated.timing(OpaqueCircle2, {
          delay: 500,
          toValue: 0,
          duration: 1400,
          isInteraction: false,
          useNativeDriver: false,
        }),
      ]),
    ).start();
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <BluetoothSvg />
      </View>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            transform: [{scale: scaleCircle}],
            opacity: OpaqueCircle,
          },
        ]}
      />
      <Animated.View
        style={[
          styles.fadingContainer2,
          {
            transform: [{scale: scaleCircle2}],
            opacity: OpaqueCircle2,
          },
        ]}
      />
      <Text style={styles.scanText}>Toca para volver a escanear</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    width: 100,
    height: 100,
    backgroundColor: '#AAAAAA',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    alignSelf: 'center',
    zIndex: 100,
    top: 80,
  },
  fadingContainer: {
    width: 62,
    height: 62,
    backgroundColor: '#B2B2B2',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fadingContainer2: {
    width: 62,
    height: 62,
    backgroundColor: '#B2B2B2',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    top: -62,
  },
  scanText: {
    color: 'white',
    fontSize: 14,
  },
});

export default SearchingBluetooth;
