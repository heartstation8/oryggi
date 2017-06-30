import { combineReducers } from 'redux';
import Devices from './devices';
import Library from './library';
import SocialEngineering from './social';

export default combineReducers({
  deviceObj: Devices,
  socialObj: SocialEngineering,
  libraryObj: Library
});
