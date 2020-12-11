import React from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import LogoAirSystemMx from '../Components/LogoAirSystemMx';
import BackButton from '../Components/BackButton';
import SliderComp from '../Components/SliderComp';
import TextInputComp from '../Components/TextInputComp';

function ConfigScreen(props) {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable hitSlop={50} onPress={() => navigation.goBack()}>
          <BackButton />
        </Pressable>
        <LogoAirSystemMx />
        <View />
      </View>
      <View style={styles.MainView}>
        <Text style={styles.MainText}>ConfiguraciÓn de botones</Text>
      </View>
      <View style={styles.sliderView}>
        <SliderComp buttonName="BotÓn 1" keyValue="button1" />
        <SliderComp buttonName="BotÓn 2" keyValue="button2" />
        <SliderComp buttonName="BotÓn 3" keyValue="button3" />
        <SliderComp buttonName="BotÓn 4" keyValue="button4" />
      </View>
      <View style={styles.advancedView}>
        <Text style={styles.advancedText}>ConfiguraciÓn avanzada</Text>
        <View style={styles.uuidView}>
          <Text style={styles.uuidText}>UUID Servicio:</Text>
          <TextInputComp
            initialValue="00001cf0-0000-1000-8000-00805f9b34fb"
            UUIDKey="UUIDService"
          />
        </View>
        <View style={styles.uuidView}>
          <Text style={styles.uuidText}>UUID Caract:</Text>
          <TextInputComp
            initialValue="000049d2-0000-1000-8000-00805f9b34fb"
            UUIDKey="UUIDCharacteristic"
          />
        </View>
        <View>
          <Pressable
            style={styles.configButton}
            onPress={() => navigation.goBack()}>
            <Text style={styles.configButtonText}>Guardar cambios</Text>
          </Pressable>
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
  MainView: {
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 0,
  },
  MainText: {
    color: 'white',
    fontFamily: 'Tithe-Regularly',
    fontSize: 20,
  },
  sliderView: {
    width: '100%',
    height: '40%',
  },
  advancedView: {
    width: '100%',
    height: '40%',
    alignItems: 'center',
  },
  advancedText: {
    color: 'white',
    fontFamily: 'Tithe-Regularly',
    fontSize: 20,
    paddingTop: 20,
  },
  uuidText: {
    color: 'white',
    fontFamily: 'Tithe-Regularly',
    fontSize: 16,
  },
  configButtonText: {
    color: '#272727',
    fontFamily: 'Tithe-Regularly',
    fontSize: 16,
  },
  configButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    width: 190,
    height: '35%',
    backgroundColor: '#ADADAD',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
  },
  uuidView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
});

export default ConfigScreen;
