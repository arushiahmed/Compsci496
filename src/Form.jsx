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
/*
const FormQuestion = (props) => (
  <ul className="question">
    <div className="viewForm">What do you like to do?<br></br>{props.question.one}</div><br></br>
    <div className="viewForm">What struggles are you facing?<br></br>{props.question.two}</div><br></br>
    <div className="viewForm">What are you looking for in a person?<br></br>{props.question.three}</div><br></br>
    <div className="viewForm">How can someone help you?<br></br> {props.question.four}</div><br></br>
    <div className="viewForm">Why do you want to connect with someone?<br></br>{props.question.five}</div><br></br>
    <div className="viewForm">Do you want to meet in person or online?<br></br> {props.question.six}</div><br></br>
    <div className="viewForm">Do you want to connect with people from the same country?<br></br> {props.question.seven}</div><br></br>
    <div className="viewForm">Do you want to connect with people who share the same ethnicity?<br></br> {props.question.eight}</div><br></br>
  </ul>
)

function FormPage(props)
{
  const formQuestions = props.questionform.map(question => (
    <FormQuestion key={question._id} question={question} />
  ));

  return(
    <div id="question-air">
      <ul>
        {formQuestions}
      </ul>
    </div>
  );
} 

export default class Form extends React.createClass ({
  getInitialState:function(){
    return {edit:false, save:false, form:true}
  },
    switch:function(word)
    {
    let edit,form,save;
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
          <br></br><br></br><br></br>
          {this.state.signup?<Question/>:null}
          {this.state.login?<Save />:null}
          {this.state.login?<Edit />:null}
        </div>
      )
    }
  })
  {} */


 export default class Form extends React.Component {
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

      fetch('/api/questionform', {
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
        <h1>Form</h1>
        <br></br>
        <div>
          <form className="form-group" name="question" onSubmit={this.handleForm}>
          <div className="form-group" >
            <label for="one"  style={textStyle}>What do you like to do?</label>
              <br></br>
              <input type="text" className="form-control" id="one" rows="3" style={inputStyle} />
          </div>
          <br></br>
          <div className="form-group" >
          <label for="two" style={textStyle}>What struggles are you facing?</label>
              <br></br>
              <input type="text" className="form-control" id="two" rows="3" style={inputStyle} />
            </div>
            <br></br>
            <div className="form-group" >
            <label for="three"  style={textStyle}>What are you looking for in a person?</label>
              <br></br>
              <input type="text" className="form-control" id="three" rows="3" style={inputStyle} />
            </div>
            <br></br>
            <div className="form-group" >
              <label for="four" style={textStyle}>How can someone help you?</label>
              <br></br>
              <input type="text" className="form-control" id="four"  style={inputStyle} />
            </div>
            <br></br>
            <div className="form-group" >
              <label for="five" style={textStyle}>Why do you want to connect with someone?</label>
              <br></br>
              <input type="text" className="form-control" id="five" style={inputStyle} />
            </div>
            <br></br>
            <div className="form-group" >
              <label for="six" style={textStyle}>Do you want to meet in person or online?</label>
              <br></br>
              <input type="text" className="form-control" id="six" rows="3" style={inputStyle} />
            </div>
            <br></br>
            <div className="form-group" >
              <label for="seven" style={textStyle}>Do you want to connect with people from the same country?</label>
              <br></br>
              <input type="text" className="form-control" id="seven" rows="3" style={inputStyle} />
            </div>
            <br></br>
            <div className="form-group" >
              <label for="eight" style={textStyle}>Do you want to connect with people who share the same ethnicity?</label>
              <br></br>
              <input type="text" className="form-control" id="eight" rows="3" style={inputStyle} />
            </div>
          <br></br><br></br><br></br>
      </form>
      </div>
        <div className = "row">
              <div className="col">
              <button className="btn btn-dark" type="submit"><Link to="/save" style={{ textDecoration: 'none', color: 'white' }}>Save</Link></button>
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

/*
class Save extends React.Component {
  constructor() {
    super();
    this.loadData = this.loadData.bind(this);

    this.state = {
     questionform: [],
    };
    
  }
  componentDidMount(){
      this.loadData();
  }

  loadData(){
      let question = this.state.questionform;
      fetch("api/questionform")
        .then(res => {
            if (res.ok){
                res.json().then( json => {
                    let questionform = [];
                    json.records.forEach(question => {
                        questionform.push(
                            question
                        )
                    });
                    this.setState({questionform: questionform})
                })
            }
        }).catch( err => {
            alert("There was a problem: " + err.message)
        });
  }
  
  render() {
    return (
      <div id="save">
        <SearchBar>
        </SearchBar>
        <center>
        <h1>Save</h1>
        <br></br>
        <hr />
          <FormPage questionform={this.state.questionform} />
          <hr />
          <div className = "row">
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
*/

