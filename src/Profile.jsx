// NEW: added the import for react.
import React from 'react';
import 'isomorphic-fetch';
import { Link } from 'react-router';
import SearchBar from './SearchBar.jsx';

const profile = {
	border: "2px solid black",    
  marginTop: "10px",
  borderRadius: "50%",
  textAlign: "center",
  fontFamily: "cursive", 
  fontSize: "50px",
  height: "350px", 
  width: "350px",
  lineHeight: "350px"
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
        <center>
        <h1>Profile</h1>
        <br></br>
          <div className="picture" style={profile}>
            Profile picture
          </div>
          <br></br> <br></br>
          <form>
          <div class="form-group">
            <div className = "row">
              <div className="col">
              <label for="exampleFormControlInput1">Email address</label>
            </div> 
              <div className="col">
              <input type="text"  readonly class="form-control-plaintext" id="staticEmail" value="email@example.com" style={formStyle} />
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
           <a className="btn btn-dark"role="button"><Link to="*" style={{ textDecoration: 'none', color: 'white' }} >Edit</Link></a>
        </center>
        <br></br>
        <br></br>
      </div>
    );
  }
}

