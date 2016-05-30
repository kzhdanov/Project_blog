import LoginForm from './components/LoginForm.react';
import store from './Store';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

ReactDOM.render(<Provider store={store}>
    <LoginForm/>
  </Provider>,
  document.getElementById('app'));
