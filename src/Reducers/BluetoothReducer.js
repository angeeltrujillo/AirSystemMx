import {
  ADD_FOUND_DEVICE,
  CHANGE_STATE,
  DELETE_ALL_FOUND_DEVICES,
  SET_CONNECTED_DEVICE,
  SET_MANAGER,
} from '../Actions/Types';

const INITIAL_STATE = {
  manager: null,
  BLEFoundList: [],
  connectedDevice: {},
  status: 'Bienvenido',
};

const BluetoothReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_FOUND_DEVICE:
      return {
        ...state,
        BLEFoundList: [...state.BLEFoundList, action.payload],
      };
    case DELETE_ALL_FOUND_DEVICES:
      return {
        ...state,
        BLEFoundList: [],
      };
    case SET_CONNECTED_DEVICE:
      return {
        ...state,
        connectedDevice: action.payload,
      };
    case CHANGE_STATE:
      return {
        ...state,
        status: action.payload,
      };
    case SET_MANAGER:
      return {
        ...state,
        manager: action.payload,
      };
    default:
      return state;
  }
};

export default BluetoothReducer;
