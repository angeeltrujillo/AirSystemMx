import React, {useState} from 'react';
import {Pressable, Image, StyleSheet} from 'react-native';
import ButtonUpActive from '../Assets/buttonUp-active.png';
import ButtonUpInactive from '../Assets/buttonUp-inactive.png';
import {connect} from 'react-redux';

function ButtonUp(props) {
  const device = props.connectedDevice;
  const [isPressed, setIsPressed] = useState(false);
  return (
    <Pressable
      style={styles.container}
      onPressIn={async () => {
        console.log('Sending command');
        await device.writeCharacteristicWithoutResponseForService(
          '00001cf0-0000-1000-8000-00805f9b34fb',
          '000049d2-0000-1000-8000-00805f9b34fb',
          props.code,
        );
        setIsPressed(true);
      }}
      onPressOut={() => setIsPressed(false)}>
      <Image
        style={styles.buttonUp}
        source={isPressed ? ButtonUpActive : ButtonUpInactive}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '50%',
    alignItems: 'center',
  },
  buttonUp: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
const mapStateToProps = (state) => {
  return {
    connectedDevice: state.connectedDevice,
  };
};

export default connect(mapStateToProps)(ButtonUp);
