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

/*export default class Question extends React.createClass ({
  getInitialState:function(){
    return {edit:false, save:false, form:true}
  },
    switch:function(word)
    {
    let signup,login;
    if(word == "edit"){edit = true;save = false;form = false;}
    else if(word == "save"){save = true; edit = false; form = false}
    else{form = true; save = false; edit = false}
    return this.setState({form:form,save:save,edit:edit})
    },

    render:function(){
      return(
        <div>
          <div id="buttons">
              <button id="formButton" onClick={this.switch.bind(null,"form")} className="btn btn-dark" style={signUp}>Form</button>
              <button id="editButton" onClick={this.switch.bind(null,"edit")} className="btn btn-dark" style={loginPage}>Edit</button>
              <button id="saveButton" onClick={this.switch.bind(null,"save")} className="btn btn-dark" style={loginPage}>Save</button>
          </div>
        </div>
      )
    }
*/

export default class Question extends React.Component {
  constructor() {
    super();
    this.handleForm = this.handleForm.bind(this);
    
  }

    handleForm(e)
    {
      e.preventDefault();
      let form = document.forms.question
      const submitReq = {
        "one": form.one.value,
        "two": form.two.value,
        "three": form.three.value,
        "four": form.four.value,
        "five": form.five.value,
        "six": form.six.value,
        "seven": form.seven.value,
        "eight": form.eight.value,
      }

      fetch('/api/questions', {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(submitReq),
      })

      .then(res => res.json())
      .then(json => {
        if(json.success) {
          alert('Failed to add event.\n Error description: ' + json.msg);
        }
        else {
          alert('Questions Saved')
        }
      });
    }
  render() {
    return (
      <div>
        <SearchBar> 

        </SearchBar>
        <center>
        <h1>Question Air</h1>
        <br></br>
        <form >
          <div className="form-group" name="question" onSubmit={this.handleForm}>
          <div className="form-group" >
            <label for="one"  style={textStyle}>What do you like to do?</label>
              <br></br>
              <textarea className="form-control form-control-lg" id="one" rows="3" style={inputStyle}></textarea>
          </div>
          <br></br>
          <div className="form-group" >
          <label for="two" style={textStyle}>What struggles are you facing?</label>
              <br></br>
              <textarea className="form-control form-control-lg" id="two" rows="3" style={inputStyle}></textarea>
            </div>
            <br></br>
            <div className="form-group" >
            <label for="three"  style={textStyle}>What are you looking for in a person?</label>
              <br></br>
              <textarea className="form-control form-control-lg" id="three" rows="3" style={inputStyle}></textarea>
            </div>
            <br></br>
            <div className="form-group" >
              <label for="four" style={textStyle}>How can someone help you?</label>
              <br></br>
              <textarea className="form-control form-control-lg" id="four" rows="3" style={inputStyle}></textarea>
            </div>
            <br></br>
            <div className="form-group" >
              <label for="five" style={textStyle}>Why do you want to connect with someone?</label>
              <br></br>
              <textarea className="form-control form-control-lg" id="five" rows="3" style={inputStyle}></textarea>
            </div>
            <br></br>
            <div className="form-group" >
              <label for="six" style={textStyle}>Do you want to meet in person or online?</label>
              <br></br>
              <textarea className="form-control form-control-lg" id="six" rows="3" style={inputStyle}></textarea>
            </div>
            <br></br>
            <div className="form-group" >
              <label for="seven" style={textStyle}>Do you want to connect with people from the same country?</label>
              <br></br>
              <textarea className="form-control form-control-lg" id="seven" rows="3" style={inputStyle}></textarea>
            </div>
            <br></br>
            <div className="form-group" >
              <label for="eight" style={textStyle}>Do you want to connect with people who share the same ethnicity?</label>
              <br></br>
              <textarea className="form-control form-control-lg" id="eight" rows="3" style={inputStyle}></textarea>
            </div>
          <br></br><br></br><br></br>
          </div>
      </form>
        <div className = "row">
              <div className="col">
              <a className="btn btn-dark"role="button"><Link to="/save" style={{ textDecoration: 'none', color: 'white' }} >Save</Link></a>
            </div> 
              <div className="col">
              <a className="btn btn-dark"role="button"><Link to="/question" style={{ textDecoration: 'none', color: 'white' }} >Edit</Link></a>
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



