export function authenticationMiddleware() {
  return next => action => {
    if (action.type === 'LOG_ON') {
      localStorage.setItem('authenticationKjBlog_Key', JSON.stringify(action.login.token));
    }
      next(action);
  };
}
