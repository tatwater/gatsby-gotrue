import React, { Component } from 'react';
import { push } from 'gatsby-link';

import auth from '../utils/auth';


class Header extends Component {
  constructor(props) {
    super(props);

    this.signOut = this.signOut.bind(this);
  }

  signOut() {
    let user = auth.currentUser();
    user.logout()
        .then((response) => {
          push('/');
        })
        .catch((error) => {
          console.log(error);
        });
  }

  render() {
    let signedIn = false;

    if (auth.currentUser()) {
      signedIn = true;
    }

    return (
      <div>
        { signedIn &&
          <button onClick={() => { this.signOut() }} type='button'>Sign out</button>
        }
      </div>
    );
  }
}


export default Header;
