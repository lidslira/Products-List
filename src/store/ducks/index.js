import {combineReducers} from 'redux';

import user from './user';
import category from './category';
import grocery from './grocery';

export default combineReducers({
  user,
  category,
  grocery,
});
