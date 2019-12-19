import React from 'react';
import 'isomorphic-fetch';
import { Link } from 'react-router';

import Profile from './Profile.jsx';
import SearchBar from './SearchBar.jsx';

const textStyle = {
  marginLeft: '15%',
  marginRight: '15%',
  width: '700px',
  fontSize: '14px'
}

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
          <div className="about" style={textStyle}>
         <center><h3>Welcome to Intermingle.</h3></center> 
          <br></br>
          <p><strong>Overview: </strong>One of the biggest adjustments for students is going away from home to college. For international students, it is more of an adjustment than for domestic students. These students have to adjust going to school away from their family but also experiencing a new culture. This adjustment can cause stress for these students that affects their academic performance and their experience living in the United States. 
          This application is for both international and domestic student to find people and connect within their University.</p>
          <br></br>
          </div>       
      </div>
    );
  }
}