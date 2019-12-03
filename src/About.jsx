import React from 'react';
import 'isomorphic-fetch';
import { Link } from 'react-router';

import Profile from './Profile.jsx';
import SearchBar from './SearchBar.jsx';

export default class About extends React.Component {
  constructor() {
    super();
    
  }
  render() {
    return (
      <div>
        <SearchBar>
        </SearchBar>
        <center>
        <h1>About</h1>
        <br></br>
        <p>This is an interactive platform where international students and domestic students can find friends.</p>
        </center>
      </div>
    );
  }
}