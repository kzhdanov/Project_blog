import $ from 'jquery';
import store from '../Store';
const dispatch = store.dispatch;
import toastr from 'toastr';

export function login(login, password) {
  let token = btoa(login + ':' + password);
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
          toastr.options = {
            "positionClass": "toast-top-center",
          }
          toastr.warning('Incorrect login or password...');
        }
      });
  };
}

export function logout() {
  localStorage.removeItem('authenticationKjBlog_Key');
  return {
    type: 'LOG_OFF',
    login: { isAuth: false },
  };
}
