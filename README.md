# Air System Mx

This was a commission work. Air System Mx it's a mobile app that connects to a Bluetooth LE enabled board to control the car's air suspension.

## Description

This app was built using **React Native**, [React Native BLE PLX](https://github.com/Polidea/react-native-ble-plx) and Redux for the state manager. 

The app scan for a custom [service uuid](https://www.bluetooth.com/specifications/assigned-numbers/service-discovery/)   so only the devices we care about show on scan. One we select the device we want to connect, we send four bytes of info to a custom characteristic uuid every time the user press a button.

It also has programmable buttons that can be configured in the app and uses AsyncStorage to persist the data.

## Demo

![AirSystem Mx](https://media.giphy.com/media/sPBwsyn2tzRUEWm1m3/giphy.gif)

You can download the app through the [App Store](https://apps.apple.com/us/app/air-system-mx/id1543970833) and the [Play Store](https://play.google.com/store/apps/details?id=com.airsystemmxv2), but you will need a proprietary board to see the main dashboard.