import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import MainScreen from './src/Screens/MainScreen';
import DashboardScreen from './src/Screens/DashboardScreen';
import ConfigScreen from './src/Screens/ConfigScreen';
import BluetoothReducer from './src/Reducers/BluetoothReducer';

const store = createStore(BluetoothReducer);
const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MainScreen">
          <Stack.Screen
            name="MainScreen"
            component={MainScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="DashboardScreen"
            component={DashboardScreen}
            options={{headerShown: false, gestureEnabled: false}}
          />
          <Stack.Screen
            name="ConfigScreen"
            component={ConfigScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
