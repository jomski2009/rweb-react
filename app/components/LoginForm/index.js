/**
 *
 * LoginForm
 *
 */

import React from 'react';

import styles from './styles.css';

class LoginForm extends React.Component {
  constructor(props){
    super(props);
    console.log(props)
  }


  render() {
    return (
      <div className={styles.loginForm }>
        <form onSubmit={this.props.onSubmitForm}>
          <input
            className={styles.loginField}
            type="text"
            value={this.props.username}
            placeholder="Username or Email"
            onChange={this.props.onChangeUsername}
          />
          <input
            className={styles.loginField}
            type="password"
            value={this.props.password}
            placeholder="Password"
            onChange={this.props.onChangePassword}
          />
          <button className={styles.loginButton}>Log In</button>
        </form>
      </div>
    );
  }
}


export default LoginForm;
