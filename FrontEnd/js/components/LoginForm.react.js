import {connect} from 'react-redux';
import {Component} from 'react';
import * as Actions from '../actions/index';
import store from '../Store';

class LoginForm extends Component {
  constructor() {
    super();

    //console.log(props);
    //if (localStorage.getItem('authentication'))
    //props.isAuth = true;
  }

  _loginBtnClick() {
    store.dispatch(Actions.login(login.value, password.value));
  }

  _logoutBtnClick() {
    store.dispatch(Actions.logout());
  }

  render() {
    return (
        <form className="navbar-form navbar-right" role="form">
          <div className="form-group">
            <div className={ this.props.isAuth ? 'hidden' : '' }>
                <label className="sr-only" htmlFor="login">Email</label>
                <input type="email" className="form-control input-sm" id="login"
                 placeholder="Login" ref={(login) => this.login = login} />
            </div>
            <div className={ this.props.isAuth ? '' : 'hidden' }>Hello </div>
          </div>
          <div className="form-group">
              <div className={ this.props.isAuth ? 'hidden' : '' }>
                <label className="sr-only" htmlFor="password">Пароль</label>
                <input type="password" className="form-control input-sm" id="password"
                 placeholder="Password" ref={(password) => this.password = password} />
              </div>
          </div>
          <div className="form-group">
            <div className={ this.props.isAuth ? 'hidden' : '' }>
              <button type="button" className="btn btn-default btn-sm"
              onClick={this._loginBtnClick}>Login</button>
            </div>
            <div className={ this.props.isAuth ? '' : 'hidden' }>
              <button type="button" className="btn btn-default btn-sm active"
              onClick={this._logoutBtnClick}>Logout</button>
            </div>
          </div>
        </form>
      );
  }
}

export default connect(
  (state) => {
    return { isAuth: state.login.isAuth, Name: state.login.Name };
  }
)(LoginForm);
