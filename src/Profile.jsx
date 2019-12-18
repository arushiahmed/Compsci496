// NEW: added the import for react.
import React from 'react';
import 'isomorphic-fetch';
import { Link } from 'react-router';
import SearchBar from './SearchBar.jsx';

const profile = {
	border: '2px solid black',    
  marginTop: '10px',
  marginLeft: '5%',
  fontSize: '20px',
  height: '100px', 
  width: '100px',
  textAlign: "center"
}
const formStyle =
{
  width: '500px'
}

export default class Profile extends React.Component {
  constructor() {
    super();
    
  }
  render() {
    return (
      <div>
        <SearchBar> </SearchBar>
        <div className = "row" style={{marginLeft: '85%'}}>
              <div className="col" >
              <button className="btn btn-dark"role="button"><Link to="/*" style={{ textDecoration: 'none', color: 'white' }}>Rate</Link></button>
            </div> 
              <div className="col">
              <button className="btn btn-dark"role="button"><Link to="/*" style={{ textDecoration: 'none', color: 'white' }}>Chat</Link></button>
              </div> 
          </div>
        <h1 style={{marginLeft: '5%'}}>Profile</h1>
        <br></br><br></br>
          <div className="picture" style={profile}>
            Profile picture
          </div>
          <br></br> <br></br>
          <form style={{marginLeft: '5%'}}>
          <div className="form-group">
            <div className = "row">
              <div className="col">
              <label>Email address: </label>
            </div> 
              <div className="col">
              <input type="text" className="form-control-plaintext" id="staticEmail" defaultValue="emailexamplel@umass.edu" style={formStyle} />
              </div> 
          </div> 
          </div>
          <br></br>
          <div className="form-group">
            <div className = "row">
              <div className="col">
              <label>Academic: </label>
            </div> 
              <div className="col">
              <input type="email" className="form-control" id="ethencity"  style={formStyle}/>
              </div> 
          </div> 
          </div>
          <br></br>
          <div className="form-group">
            <div className = "row">
              <div className="col">
              <label>School: </label>
            </div> 
              <div className="col">
              <input type="email" className="form-control" id="school"  style={formStyle}/>
              </div> 
          </div> 
          </div>
          <br></br>
          <div className="form-group">
            <div className = "row">
              <div className="col">
              <label>Country: </label>
            </div> 
              <div className="col">
              <input type="email" className="form-control" id="country"  style={formStyle}/>
              </div> 
          </div> 
          </div>
          <br></br>
          <div className="form-group">
            <div className = "row">
              <div className="col">
              <label>Bio: </label>
            </div> 
              <div className="col">
              <textarea className="form-control form-control-lg" id="exampleFormControlTextarea1" rows="3" style={formStyle}></textarea>
              </div> 
          </div> 
          </div>
           </form>
           <br></br>
           <button className="btn btn-dark"role="button" style={{marginLeft: '5%'}}><Link to="*" style={{ textDecoration: 'none', color: 'white'}} >Edit</Link></button>
        <br></br>
        <br></br>
      </div>
    );
  }
}

