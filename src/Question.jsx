import React from 'react';
import 'isomorphic-fetch';
import { Link } from 'react-router';
import SearchBar from './SearchBar.jsx';

const inputStyle = {
  width: '50%'
}

const textStyle = {
  fontSize: '22px',
  fontFamily: 'Athelas'

}

export default class Question extends React.Component {
  constructor() {
    super();
    
  }
  render() {
    return (
      <div>
        <SearchBar> </SearchBar>
        <center>
        <h1>Question Air</h1>
        <br></br>
        <form >
        <div class="form-group" >
          <label for="exampleFormControlTextarea1" style={textStyle}>What do you like to do?</label>
          <br></br>
          <textarea class="form-control form-control-lg" id="exampleFormControlTextarea1" rows="3" style={inputStyle}></textarea>
        </div>
        <br></br>
        <div class="form-group" >
          <label for="exampleFormControlTextarea1" style={textStyle}>What struggles are you facing?</label>
          <br></br>
          <textarea class="form-control form-control-lg" id="exampleFormControlTextarea1" rows="3" style={inputStyle}></textarea>
        </div>
        <br></br>
        <div class="form-group" >
          <label for="exampleFormControlTextarea1" style={textStyle}>What are you looking for in a person?</label>
          <br></br>
          <textarea class="form-control form-control-lg" id="exampleFormControlTextarea1" rows="3" style={inputStyle}></textarea>
        </div>
        <br></br>
        <div class="form-group" >
          <label for="exampleFormControlTextarea1" style={textStyle}>How can someone help you?</label>
          <br></br>
          <textarea class="form-control form-control-lg" id="exampleFormControlTextarea1" rows="3" style={inputStyle}></textarea>
        </div>
        <br></br>
        <div class="form-group" >
          <label for="exampleFormControlTextarea1" style={textStyle}>Why do you want to connect with someone?</label>
          <br></br>
          <textarea class="form-control form-control-lg" id="exampleFormControlTextarea1" rows="3" style={inputStyle}></textarea>
        </div>
        <br></br>
        <div class="form-group" >
          <label for="exampleFormControlTextarea1" style={textStyle}>Do you want to meet in person or online?</label>
          <br></br>
          <textarea class="form-control form-control-lg" id="exampleFormControlTextarea1" rows="3" style={inputStyle}></textarea>
        </div>
        <br></br>
        <div class="form-group" >
          <label for="exampleFormControlTextarea1" style={textStyle}>Do you want to connect with people from the same country?</label>
          <br></br>
          <textarea class="form-control form-control-lg" id="exampleFormControlTextarea1" rows="3" style={inputStyle}></textarea>
        </div>
        <br></br>
        <div class="form-group" >
          <label for="exampleFormControlTextarea1" style={textStyle}>Do you want to connect with people who share the same ethnicity?</label>
          <br></br>
          <textarea class="form-control form-control-lg" id="exampleFormControlTextarea1" rows="3" style={inputStyle}></textarea>
        </div>
        <br></br><br></br><br></br>
        </form>
        <div className = "row">
              <div className="col">
              <a className="btn btn-dark"role="button"><Link to="/connect" style={{ textDecoration: 'none', color: 'white' }} >Save</Link></a>
            </div> 
              <div className="col">
              <a className="btn btn-dark"role="button"><Link to="/connect" style={{ textDecoration: 'none', color: 'white' }} >Edit</Link></a>
              </div> 
              <div className="col">
              <a className="btn btn-dark"role="button"><Link to="/connect" style={{ textDecoration: 'none', color: 'white' }} >Find Friends</Link></a>
              </div>
          </div>   
          <br></br><br></br>
          </center>
          </div>
    );
  }
}

