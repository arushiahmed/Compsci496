import React from 'react';
import 'isomorphic-fetch';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router';



export default class SearchBar extends React.Component {    
  constructor() {
    super();
                  
  }
      render(){
        return (
           <div>
              <nav className="navbar static-top navbar-dark bg-dark" style={{maxWidth: '100%'}}>
                <div className= "container">
                <a className="navbar-brand"></a>
                    <Link to="/about" style={{ textDecoration: 'none', color: 'white' }}>About</Link>
                    <Link to="/connect" style={{ textDecoration: 'none', color: 'white' }}>Connect With Students</Link>
                    <Link to="/userSurvey" style={{ textDecoration: 'none', color: 'white' }}>Survery</Link>
                    <Link to="/profile" style={{ textDecoration: 'none', color: 'white' }}>Profile</Link>
                    <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Logout</Link>
                    <form className="form-inline">
                    <input className="form-control mr-lg-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-info my-2 my-lg-0" type="submit">Search</button>
                </form>
                </div>
              </nav> 
       <br></br><br></br>
      </div>  
    );
  }
}