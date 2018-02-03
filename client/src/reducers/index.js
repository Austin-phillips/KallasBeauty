import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import services from './services';
import appointments from './appointments';
import images from './images';

const rootReducer = combineReducers({
  user,
  flash, 
  services,
  appointments,
  images,
});

export default rootReducer;
