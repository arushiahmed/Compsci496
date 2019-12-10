// NEW: added the import for react.
import React from 'react';
import 'isomorphic-fetch';
import { Link } from 'react-router';
import SearchBar from './SearchBar.jsx';

const profile = {
	border: "2px solid black",    
  marginTop: "10px",
  marginLeft: "5%",
  textAlign: "center",
  fontSize: "50px",
  height: "150px", 
  width: "150px",
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
              <a className="btn btn-dark"role="button"><Link to="/rate" style={{ textDecoration: 'none', color: 'white' }} >Rate</Link></a>
            </div> 
              <div className="col">
              <a className="btn btn-dark"role="button"><Link to="/chat" style={{ textDecoration: 'none', color: 'white' }} >Chat</Link></a>
              </div> 
          </div>
        <h1 style={{marginLeft: '5%'}}>Profile</h1>
        <br></br>
          <div className="picture" style={profile}>
            Profile picture
          </div>
          <br></br> <br></br>
          <form style={{marginLeft: '5%'}}>
          <div class="form-group">
            <div className = "row">
              <div className="col">
              <label for="exampleFormControlInput1">Email address</label>
            </div> 
              <div className="col">
              <input type="text"  readonly class="form-control-plaintext" id="staticEmail" value="email@example.com" style={formStyle} > </input>
              </div> 
          </div> 
          </div>
          <br></br>
          <div class="form-group">
            <div className = "row">
              <div className="col">
              <label for="exampleFormControlInput1">School</label>
            </div> 
              <div className="col">
              <input type="email" class="form-control" id="school"  style={formStyle}/>
              </div> 
          </div> 
          </div>
          <br></br>
          <div class="form-group">
            <div className = "row">
              <div className="col">
              <label for="exampleFormControlInput1">Ethencity</label>
            </div> 
              <div className="col">
              <input type="email" class="form-control" id="ethencity"  style={formStyle}/>
              </div> 
          </div> 
          </div>
          <br></br>
          <div class="form-group">
            <div className = "row">
              <div className="col">
              <label for="exampleFormControlInput1">Country</label>
            </div> 
              <div className="col">
              <input type="email" class="form-control" id="country"  style={formStyle}/>
              </div> 
          </div> 
          </div>
          <br></br>
          <div class="form-group">
            <div className = "row">
              <div className="col">
              <label for="exampleFormControlInput1">Bio:</label>
            </div> 
              <div className="col">
              <textarea class="form-control form-control-lg" id="exampleFormControlTextarea1" rows="3" style={formStyle}></textarea>
              </div> 
          </div> 
          </div>
           </form>
           <br></br>
           <button className="btn btn-dark" type="submit" style={{marginLeft: '5%'}}><Link to="*" style={{ textDecoration: 'none', color: 'white'}} >Edit</Link></button>
        <br></br>
        <br></br>
      </div>
    );
  }
}

