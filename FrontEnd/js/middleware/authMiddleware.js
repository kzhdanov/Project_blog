export function authenticationMiddleware() {
  return next => action => {
    next(action);
    if (action.type === 'LOG_ON') {
      localStorage.setItem('authentication', JSON.stringify(action.login.token));
    }
  };
}
