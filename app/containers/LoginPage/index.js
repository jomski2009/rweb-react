/*
 *
 * LoginPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectLoginPage from './selectors';
import styles from './styles.css';
import {LOGIN_ACTION, CHANGE_USERNAME, CHANGE_PASSWORD} from './constants'
import {changeUsername, changePassword, loginAction} from './actions'
//Import components
import LoginForm from 'components/LoginForm'

export class LoginPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={ styles.loginPage }>
        <header className={styles.topNavHeader}>
          <LoginForm
            onSubmitForm={this.props.onSubmitForm}
            onChangeUsername={this.props.onChangeUsername}
            onChangePassword = {this.props.onChangePassword}
            username={this.props.username}
            password={this.props.password}
          />
        </header>
      </div>
    );
  }
}

const mapStateToProps = selectLoginPage();

function mapDispatchToProps(dispatch) {
  return {
    onSubmitForm: (event) => {
      event.preventDefault()
      console.log('We are dispatching')
      dispatch({type: LOGIN_ACTION});
    },
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    onChangePassword: (evt) => dispatch(changePassword(evt.target.value))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
