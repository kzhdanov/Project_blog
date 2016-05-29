import store from '../Store';

export default function login(state = {}, action) {
  switch (action.type) {
    case 'LOG_ON':
      return Object.assign({}, action.login);
    case 'LOG_OFF':
      return action.login;
    case 'TEST':
      return Object.assign({}, state);
    default:
      return state;
  }
}
