import React from 'react';
import PropTypes from 'prop-types';

import Header from '../components/header';


const Layout = ({ children }) => (
  <div>
    <Header />
    { children() }
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
}


export default Layout;
