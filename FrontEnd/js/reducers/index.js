import { combineReducers } from 'redux';
import issues from './issues';
import login from './login';
import counter from './counter';

export default combineReducers({
  login,
});
