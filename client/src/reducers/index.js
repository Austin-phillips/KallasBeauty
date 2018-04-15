import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import services from './services';
import appointments from './appointments';
import images from './images';
import allApps from './allApps';
import time from './time';
import day from './day';
import lastDate from './lastDate';

const rootReducer = combineReducers({
  user,
  flash, 
  services,
  appointments,
  images,
  allApps,
  time,
  day,
  lastDate
});

export default rootReducer;
