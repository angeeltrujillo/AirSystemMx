import {
  ADD_FOUND_DEVICE,
  CHANGE_STATE,
  DELETE_ALL_FOUND_DEVICES,
  SET_CONNECTED_DEVICE,
  SET_MANAGER,
} from './Types';

export const addDevicetoList = (device) => ({
  type: ADD_FOUND_DEVICE,
  payload: device,
});

export const DeleteAllDevices = () => ({
  type: DELETE_ALL_FOUND_DEVICES,
});

export const changeState = (state) => ({
  type: CHANGE_STATE,
  payload: state,
});

export const SetConnectedDevice = (device) => ({
  type: SET_CONNECTED_DEVICE,
  payload: device,
});

export const SetManager = (manager) => ({
  type: SET_MANAGER,
  payload: manager,
});
