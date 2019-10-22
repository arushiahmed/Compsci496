// NEW: added the import for react.
import React from 'react';
import 'isomorphic-fetch';
import { Link } from 'react-router';
import SearchBar from './SearchBar.jsx';

export default class Profile extends React.Component {
  constructor() {
    super();
    
  }
  render() {
    return (
      <div>
        <SearchBar>

        </SearchBar>
        <h1>Profile</h1>
      </div>
    );
  }
}