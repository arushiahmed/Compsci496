import React from 'react';
import 'isomorphic-fetch';
import { Link } from 'react-router';

import Profile from './Profile.jsx';
import IssueFilter from './IssueFilter.jsx';
import SearchBar from './SearchBar.jsx';


export default class Dissusion extends React.Component {
  constructor() {
    super();
    
  }
  render() {
    return (
      <div>
        <SearchBar>

        </SearchBar>
        <h1>Discussion App</h1>
      </div>
    );
  }
}
