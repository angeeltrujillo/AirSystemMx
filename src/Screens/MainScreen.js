import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import {connect} from 'react-redux';
import LogoAirSystemMx from '../Components/LogoAirSystemMx';
import Cog from '../Components/Cog';
import SearchingBluetooth from '../Components/SearchingBluetooth';
import DeviceListComponent from '../Components/DeviceListComponent';
import {
  changeState,
  addDevicetoList,
  DeleteAllDevices,
  SetManager,
} from '../Actions/BluetoothActions';
import {FlatList} from 'react-native-gesture-handler';
import {BleManager} from 'react-native-ble-plx';
import NoDevicesFound from '../Components/NoDevicesFound';

function MainScreen(props) {
  const {navigation} = props;
  let manager = null;

  useEffect(() => {
    if (Platform.OS === 'android') {
      const result = PermissionForAndroid();
      if (result === PermissionsAndroid.RESULTS.GRANTED) {
        scanDevices();
      }
    } else {
      scanDevices();
    }
  }, []);

  const PermissionForAndroid = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Permission for Location Bluetooth',
        message: 'Requirement for Bluetooth',
        buttonNeutral: 'Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    return granted;
  };

  const renderItem = ({item}) => <DeviceListComponent device={item} />;

  const scanDevices = () => {
    props.DeleteAllDevices();
    if (props.manager == null) {
      manager = new BleManager();
      props.SetManager(manager);
    } else {
      manager = props.manager;
    }
    const subscription = manager.onStateChange((state) => {
      switch (state) {
        case 'PoweredOn':
          props.changeState('Buscando ...');
          subscription.remove();
          manager.startDeviceScan(
            ['00001cf0-0000-1000-8000-00805f9b34fb'],
            null,
            (error, device) => {
              if (error) {
                console.log(error);
              }
              props.addDevicetoList(device);
            },
          );
          break;
        case 'PoweredOff':
          props.changeState('Bluetooth apagado');
          break;
        case 'Unauthorized':
          props.changeState('Sin permiso Bluetooth');
          break;
      }
    }, true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View />
        <LogoAirSystemMx />
        <Pressable
          hitSlop={50}
          onPress={() => navigation.navigate('ConfigScreen')}>
          <Cog />
        </Pressable>
      </View>
      <View style={styles.Main}>
        <Text style={styles.statusText}>{props.status}</Text>
        <Pressable onPress={scanDevices}>
          <SearchingBluetooth />
        </Pressable>
      </View>
      <View style={styles.listofDevicesView}>
        <FlatList
          contentContainerStyle={styles.listofDevicesView}
          data={props.BLEFoundList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={NoDevicesFound}
        />
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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  statusText: {
    color: 'white',
    fontFamily: 'Tithe-Regularly',
    fontSize: 20,
    marginBottom: 20,
  },
  Main: {
    flex: 7,
    height: 500,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  listofDevicesView: {
    alignItems: 'center',
    flex: 8,
  },
});

const mapStateToProps = (state) => {
  return {
    BLEFoundList: state.BLEFoundList,
    manager: state.manager,
    status: state.status,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeState: (state) => {
      dispatch(changeState(state));
    },
    addDevicetoList: (device) => {
      dispatch(addDevicetoList(device));
    },
    DeleteAllDevices: () => {
      dispatch(DeleteAllDevices());
    },
    SetManager: (manager) => {
      dispatch(SetManager(manager));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
