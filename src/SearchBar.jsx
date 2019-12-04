import React from 'react';
import 'isomorphic-fetch';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router';

import Profile from './Profile.jsx';
import Welcome from './Welcome.jsx';
import Form from './Form.jsx';
import Connect from './Connect.jsx';
import About from './About.jsx'

export default class SearchBar extends React.Component {    
  constructor() {
    super();
                  
  }
      render(){
        return (
           <div>
              <div className= "container">
                <nav className="navbar navbar-dark">
                <a className="navbar-brand"></a>
                  <a className="btn btn-dark" role="button"><Link to="/about" style={{ textDecoration: 'none', color: 'white' }}>About</Link></a>
                    <a className="btn btn-dark" role="button"><Link to="/connect" style={{ textDecoration: 'none', color: 'white' }}>Connect With Students</Link></a>
                    <a className="btn btn-dark" role="button"><Link to="/form" style={{ textDecoration: 'none', color: 'white' }}>Question Air</Link></a>
                    <a className="btn btn-dark" role="button"><Link to="/profile" style={{ textDecoration: 'none', color: 'white' }}>Profile</Link></a>
                    <a className="btn btn-dark" role="button" ><Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Sign Out</Link></a>
                    <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
                </form>
                </nav>
              </div>
            <br></br><br></br><br></br>
    </div>
                  
                  );
              }
        }