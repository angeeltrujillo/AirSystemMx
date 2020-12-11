import React from 'react';
import {Pressable, Text, StyleSheet, View} from 'react-native';
import BluetoothSquareSvg from './BluetoothSquareSvg';
import Arrow from './ArrowRigth';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import {SetConnectedDevice} from '../Actions/BluetoothActions';

function DeviceListComponent(props) {
  const {device} = props;
  const navigation = useNavigation();

  const connectToDevice = async () => {
    const connectedDevice = await device.connect();
    const ConnetedDeviceWithServAndChar = await connectedDevice.discoverAllServicesAndCharacteristics();
    props.SetConnectedDevice(ConnetedDeviceWithServAndChar);
    console.log('Connected!');
    navigation.navigate('DashboardScreen');
  };

  return (
    <Pressable style={styles.container} onPress={connectToDevice}>
      <View style={styles.innerContainer}>
        <BluetoothSquareSvg />
        <Text style={styles.text}>{device.name}</Text>
        <Arrow />
      </View>
      <View style={styles.textView}>
        <Text style={styles.textID}>{device.id}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: 300,
    height: 60,
    backgroundColor: '#ADADAD',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 10,
    flexDirection: 'column',
  },
  innerContainer: {
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textView: {
    width: '100%',
    alignItems: 'center',
  },
  textID: {
    fontSize: 10,
  },
  text: {
    color: '#272727',
    fontFamily: 'Tithe-Regularly',
    fontSize: 20,
  },
});

const mapDispatchToProps = (dispatch) => {
  return {
    SetConnectedDevice: (device) => dispatch(SetConnectedDevice(device)),
  };
};
export default connect(null, mapDispatchToProps)(DeviceListComponent);
