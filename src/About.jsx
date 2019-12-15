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
        <SearchBar></SearchBar>
        <h1 style={{marginLeft: '2%'}}>About</h1>
        <br></br><br></br>
        <center>
        <p>This is an interactive platform where international students and domestic students can find friends.</p>
        </center>
      </div>
    );
  }
}