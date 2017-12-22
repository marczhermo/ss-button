import Injector from 'lib/Injector';
import { combineReducers } from 'redux';
import ssButtonReducer from '../state/SSButtonReducer';

const registerReducers = () => {
  Injector.reducer.register('ssButton', combineReducers({
    ssButton: ssButtonReducer,
  }));
};

export default registerReducers;
