import React, {useState} from 'react';
import {Pressable, Image, StyleSheet} from 'react-native';
import ButtonTwoUpActive from '../Assets/buttonTwoUp-active.png';
import ButtonTwoUpInactive from '../Assets/buttonTwoUp-inactive.png';
import {connect} from 'react-redux';

function ButtonTwoUp(props) {
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
        style={styles.buttonUp}
        source={isPressed ? ButtonTwoUpActive : ButtonTwoUpInactive}
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

export default connect(mapStateToProps)(ButtonTwoUp);
