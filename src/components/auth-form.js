import React, { Component } from 'react';
import { Button } from 'react-bootstrap'

class AuthForm extends Component {
  render() {
    return <div className="container full-width center-text">
      <input ref="email" type="text" name="email" placeholder="email" />
      <br/>
      <input ref="password" type="password" name="password" placeholder="password" />
      <br/>
      <Button bsStyle="primary" onClick={ () => this.props.loginOrCreateUser({login: true, email: this.refs.email.value, password: this.refs.password.value}) }>Login</Button> <Button bsStyle="primary" onClick={ () => this.props.loginOrCreateUser({login: false, email: this.refs.email.value, password: this.refs.password.value}) }>Sign Up</Button>
    </div>
  }
}

export default AuthForm;
