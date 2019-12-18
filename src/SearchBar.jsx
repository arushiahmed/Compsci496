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
              <div className= "container">
                <nav className="navbar navbar-dark">
                <a className="navbar-brand"></a>
                  <button className="btn btn-dark"><Link to="/about" style={{ textDecoration: 'none', color: 'white' }}>About</Link></button>
                    <button className="btn btn-dark"><Link to="/connect" style={{ textDecoration: 'none', color: 'white' }}>Connect With Students</Link></button>
                    <button className="btn btn-dark"><Link to="/userSurvey" style={{ textDecoration: 'none', color: 'white' }}>Survery</Link></button>
                    <button className="btn btn-dark"><Link to="/profile" style={{ textDecoration: 'none', color: 'white' }}>Profile</Link></button>
                    <button className="btn btn-dark"><Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Logout</Link></button>
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