import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import services from './services';

const rootReducer = combineReducers({
  user,
  flash, 
  services,
});

export default rootReducer;
