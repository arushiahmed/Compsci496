import React from 'react';
import 'isomorphic-fetch';
import { Link } from 'react-router';
import SearchBar from './SearchBar.jsx';

const inputStyle = {
  marginRight: '50%',
  
}

const textStyle = {
  fontSize: '22px',
  fontFamily: 'Athelas',
  marginLeft: '5%',

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
  //  this.handleChange = this.handleChange.bind(this);
  //  this.handleSubmit = this.handleSubmit.bind(this)
    
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
        <h1>Survery Questions</h1>
        </center>
        <br></br><br></br>
      <form className="form-group" name="question" onSubmit={this.handleForm}>
      <h3 style={{marginLeft: '2%'}}>What are the people you want to connect with?</h3>
      <div className="form-group">
            <div className="row" style={textStyle}>
              <div className="col">
              <label for="one">Do you want to meet in person or online?</label>
              </div>
              <div className="col">
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="meet" id="meet1" value="option1" />
                  <label class="form-check-label" for="meet1">In person </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="meet" id="meet2" value="option2" />
                <label class="form-check-label" for="meet2">Online</label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="meet" id="meet3" value="option2" />
                <label class="form-check-label" for="meet3">Both</label>
                </div>
              </div>
            </div>
      </div>
      <br></br>
      <div className="form-group">
            <div className="row" style={textStyle}>
              <div className="col">
              <label for="two">Do you want to connect with Undergraduates Students or Graduates Students?</label>
              </div>
              <div className="col">
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="meet" id="meet1" value="option1" />
                  <label class="form-check-label" for="meet1">Undergraduates Students</label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="meet" id="meet2" value="option2" />
                <label class="form-check-label" for="meet2">Graduates Students</label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="meet" id="meet3" value="option2" />
                <label class="form-check-label" for="meet3">Both Undergraduates and Graduates Students</label>
                </div>
              </div>
            </div>
      </div>
      <br></br>
      <div className="form-group" >
            <div className="row" style={textStyle}>
              <div className="col">
              <label for="three">Do you want to connect with people in the same year as you?</label>
              </div>
              <div className="col">
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="meet" id="meet1" value="option1"/>
                  <label class="form-check-label" for="meet1">Yes </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="meet" id="meet2" value="option2" />
                <label class="form-check-label" for="meet2">No</label>
                </div>
              </div>
            </div>
      </div>
      <br></br>
      <div className="form-group" >
            <div className="row" style={textStyle}>
              <div className="col">
              <label for="four">Do you want to connect with people from the same country?</label>
              </div>
              <div className="col">
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="meet" id="meet1" value="option1" />
                  <label class="form-check-label" for="meet1">Yes </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="meet" id="meet2" value="option2" />
                <label class="form-check-label" for="meet2">No</label>
                </div>
              </div>
            </div>
      </div>
      <br></br>
      <div className="form-group" >
            <div className="row" style={textStyle}>
              <div className="col">
              <label for="five">Do you want to connect with people who share the same ethnicity?</label>
              </div>
              <div className="col">
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="meet" id="meet1" value="option1" />
                  <label class="form-check-label" for="meet1">Yes </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="meet" id="meet2" value="option2" />
                <label class="form-check-label" for="meet2">No</label>
                </div>
              </div>
            </div>
      </div>
      <br></br>
      <div className="form-group" >
            <div className="row" style={textStyle}>
              <div className="col">
              <label for="six">Do you want to connect with people in the same major?</label>
              </div>
              <div className="col">
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="meet" id="meet1" value="option1"/>
                  <label class="form-check-label" for="meet1">Yes </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="meet" id="meet2" value="option2" />
                <label class="form-check-label" for="meet2">No</label>
                </div>
              </div>
            </div>
      </div>
      <br></br>
    <h3 style={{marginLeft: '2%'}}>Information about you</h3>
      </form>
      <center> 
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
          </center>
          <br></br><br></br>
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

