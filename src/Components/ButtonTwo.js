import React, {useState} from 'react';
import {Pressable, Image, StyleSheet} from 'react-native';
import ButtonTwoInactive from '../Assets/button2-inactive.png';
import ButtonTwoActive from '../Assets/button2-active.png';
import {connect} from 'react-redux';

function ButtonTwo(props) {
  const device = props.connectedDevice;
  const [isPressed, setIsPressed] = useState(false);
  return (
    <Pressable
      style={styles.container}
      onPressIn={async () => {
        await device.writeCharacteristicWithoutResponseForService(
          '00001cf0-0000-1000-8000-00805f9b34fb',
          '000049d2-0000-1000-8000-00805f9b34fb',
          props.code,
        );
        setIsPressed(true);
      }}
      onPressOut={() => setIsPressed(false)}>
      <Image
        style={styles.buttonDown}
        source={isPressed ? ButtonTwoActive : ButtonTwoInactive}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '20%',
    alignItems: 'center',
  },
  buttonDown: {
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

export default connect(mapStateToProps)(ButtonTwo);
