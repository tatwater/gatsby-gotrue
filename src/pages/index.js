import React from 'react';
import Link from 'gatsby-link';


const IndexPage = () => (
  <div>
    <h1>Home</h1>
    <Link to='/signin'>To the secret sign in page</Link>
  </div>
);


export default IndexPage;
