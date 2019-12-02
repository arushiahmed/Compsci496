import React from 'react';
import 'isomorphic-fetch';
import { Link } from 'react-router';

import Profile from './Profile.jsx';
import SearchBar from './SearchBar.jsx';

export default class Connect extends React.Component {
  constructor() {
    super();
    
  }
  render() {
    return (
      <div>
        <SearchBar>

        </SearchBar>
        <h1>Connect with Students</h1>
      </div>
    );
  }
}


