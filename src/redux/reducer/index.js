import { combineReducers } from 'redux';

import clock from './clock';
import items from './items';

export default combineReducers({
  clock,
  items
})
