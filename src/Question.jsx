import React from 'react';
import 'isomorphic-fetch';
import { Link } from 'react-router';
import SearchBar from './SearchBar.jsx';

export default class Question extends React.Component {
  constructor() {
    super();
    
  }
  render() {
    return (
      <div>
        <SearchBar>

        </SearchBar>
        <h1>Question</h1>
      </div>
    );
  }
}

