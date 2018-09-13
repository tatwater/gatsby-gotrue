import React, { Component } from 'react';
import { push } from 'gatsby-link';

import auth from '../utils/auth';


class SignInPage extends Component {
  constructor(props) {
    super(props);

    this.emailField = React.createRef();
    this.passwordField = React.createRef();

    this.signin = this.signin.bind(this);
  }

  signin(e) {
    e.preventDefault();

    auth.login(this.emailField.current.value, this.passwordField.current.value)
        .then((response) => {
          push('/');
        })
        .catch((error) => {
          console.log(error);
        });
  }

  componentDidMount() {
    if (auth.currentUser()) {
      push('/');
    }
  }

  render() {
    return (
      <div>
        <h1>Sign in</h1>
        <form>
          <input
            autoFocus
            id='email'
            ref={ this.emailField }
            placeholder='Email address'
            type='email'
          />
          <input
            id='password'
            ref={ this.passwordField }
            placeholder='Password'
            type='password'
          />
          <input
            onClick={(e) => { this.signin(e); }}
            type='submit'
            value='Sign in'
          />
        </form>
      </div>
    );
  }
}


export default SignInPage;
