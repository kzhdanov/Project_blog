import $ from 'jquery';
import store from '../Store';
const dispatch = store.dispatch;

export function login(login, password) {
  let token = 'Basic ' + btoa(login + ':' + password);
  return dispatch => {
    $.ajax({
      type:'POST',
      headers: {
        Authorization: 'Basic ' + btoa(login + ':' + password),
      },
      url: 'http://localhost:3000/',
    }).done((result) =>
      {
        if (!result.hasOwnProperty('error')) {
          dispatch({
            type: 'LOG_ON',
            login: { isAuth: true, Name: result.user, token: token },
          });
        } else {
          console.log(result);
        }
      });
  };
}

export function logout() {
  return {
    type: 'LOG_OFF',
    login: { isAuth: false, },
  };
}
