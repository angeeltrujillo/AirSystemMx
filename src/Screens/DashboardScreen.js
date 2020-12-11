import React, {useState} from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import LogoAirSystemMx from '../Components/LogoAirSystemMx';
import Cog from '../Components/Cog';
import BackButton from '../Components/BackButton';
import ButtonUp from '../Components/ButtonUp';
import ButtonDown from '../Components/ButtonDown';
import ButtonTwoUp from '../Components/ButtonTwoUp';
import ButtonTwoDown from '../Components/ButtonTwoDown';
import ButtonOne from '../Components/ButtonOne';
import ButtonTwo from '../Components/ButtonTwo';
import ButtonThree from '../Components/ButtonThree';
import ButtonFour from '../Components/ButtonFour';
import {connect} from 'react-redux';
import Base64 from 'base-64';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';

function DashboardScreen(props) {
  const {navigation} = props;
  const device = props.connectedDevice;
  const [button1, setButton1] = useState('');
  const [button2, setButton2] = useState('');
  const [button3, setButton3] = useState('');
  const [button4, setButton4] = useState('');

  useFocusEffect(
    React.useCallback(() => {
      async function getAsyncData() {
        try {
          const button1Value = await AsyncStorage.getItem('button1');
          const button2Value = await AsyncStorage.getItem('button2');
          const button3Value = await AsyncStorage.getItem('button3');
          const button4Value = await AsyncStorage.getItem('button4');
          button1Value == null ? setButton1('30') : setButton1(button1Value);
          button2Value == null ? setButton2('30') : setButton2(button2Value);
          button3Value == null ? setButton3('30') : setButton3(button3Value);
          button4Value == null ? setButton4('30') : setButton4(button4Value);
          if (button1Value == null) {
            setButton1('30');
          } else {
            if (parseInt(button1Value, 10) < 10) {
              setButton1(`0${button1Value}`);
            } else {
              setButton1(button1Value);
            }
          }
          if (button2Value == null) {
            setButton2('30');
          } else {
            if (parseInt(button2Value, 10) < 10) {
              setButton2(`0${button2Value}`);
            } else {
              setButton2(button2Value);
            }
          }
          if (button3Value == null) {
            setButton3('30');
          } else {
            if (parseInt(button3Value, 10) < 10) {
              setButton3(`0${button3Value}`);
            } else {
              setButton3(button3Value);
            }
          }
          if (button4Value == null) {
            setButton4('30');
          } else {
            if (parseInt(button4Value, 10) < 10) {
              setButton4(`0${button4Value}`);
            } else {
              setButton4(button4Value);
            }
          }
        } catch (e) {
          console.log(e);
        }
      }
      getAsyncData();
    }, []),
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable
          hitSlop={50}
          onPress={async () => {
            await device.cancelConnection();
            navigation.navigate('MainScreen');
          }}>
          <BackButton />
        </Pressable>
        <LogoAirSystemMx />
        <Pressable
          hitSlop={50}
          onPress={() => navigation.navigate('ConfigScreen')}>
          <Cog />
        </Pressable>
      </View>
      <View style={styles.deviceNameView}>
        <Text style={styles.deviceName}>{device.name}</Text>
      </View>
      <View style={styles.primaryButtons}>
        <View style={styles.buttonsUp}>
          <ButtonUp code={Base64.encode('0100')} />
          <ButtonUp code={Base64.encode('0300')} />
        </View>
        <View style={styles.buttonsDown}>
          <ButtonDown code={Base64.encode('0200')} />
          <ButtonDown code={Base64.encode('0400')} />
        </View>
        <View style={styles.buttonsUp}>
          <ButtonUp code={Base64.encode('0500')} />
          <ButtonUp code={Base64.encode('0700')} />
        </View>
        <View style={styles.buttonsDown}>
          <ButtonDown code={Base64.encode('0600')} />
          <ButtonDown code={Base64.encode('0800')} />
        </View>
      </View>
      <View style={styles.secundaryButtons}>
        <View style={styles.HalfView}>
          <Text style={styles.HalfText}>Delantero</Text>
          <Text style={styles.HalfText}>Trasero</Text>
        </View>
        <View style={styles.twoButtons}>
          <View style={styles.twoButtonsUp}>
            <ButtonTwoUp code={Base64.encode('0900')} />
            <ButtonTwoUp code={Base64.encode('1100')} />
          </View>
          <View style={styles.twoButtonsDown}>
            <ButtonTwoDown code={Base64.encode('1000')} />
            <ButtonTwoDown code={Base64.encode('1200')} />
          </View>
        </View>
        <View style={styles.programButtons}>
          <View style={styles.bottomView}>
            <Text style={styles.bottomText}>Botones programables</Text>
          </View>
          <View style={styles.lastButtons}>
            <ButtonOne code={Base64.encode(`13${button1}`)} />
            <ButtonTwo code={Base64.encode(`14${button2}`)} />
            <ButtonThree code={Base64.encode(`15${button3}`)} />
            <ButtonFour code={Base64.encode(`16${button4}`)} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#272727',
    paddingTop: 40,
    paddingLeft: 27,
    paddingRight: 27,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  primaryButtons: {
    marginTop: 30,
    width: '100%',
    height: '41%',
  },
  buttonsUp: {
    height: '25%',
    flexDirection: 'row',
  },
  buttonsDown: {
    height: '25%',
    flexDirection: 'row',
    marginBottom: 10,
  },
  secundaryButtons: {
    marginTop: 10,
    width: '100%',
    height: '46%',
  },
  HalfView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  HalfText: {
    color: 'white',
    fontFamily: 'Tithe-Regularly',
    fontSize: 20,
  },
  twoButtons: {
    width: '100%',
    height: '40%',
    justifyContent: 'space-around',
  },
  programButtons: {
    width: '100%',
    height: '43%',
    justifyContent: 'space-around',
  },
  twoButtonsUp: {
    flexDirection: 'row',
    height: '40%',
  },
  twoButtonsDown: {
    flexDirection: 'row',
    height: '40%',
  },
  bottomText: {
    color: 'white',
    fontFamily: 'Tithe-Regularly',
    fontSize: 20,
  },
  bottomView: {
    alignItems: 'center',
  },
  lastButtons: {
    width: '100%',
    height: '60%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  deviceName: {
    color: 'white',
    fontFamily: 'Tithe-Regularly',
    fontSize: 12,
  },
  deviceNameView: {
    paddingTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = (state) => {
  return {
    connectedDevice: state.connectedDevice,
  };
};

export default connect(mapStateToProps)(DashboardScreen);
