import React from 'react';
import 'isomorphic-fetch';
import { Link } from 'react-router';
import SearchBar from './SearchBar.jsx';

const inputStyle = {
  marginRight: '5%',
  
}

const textStyle = {
  fontSize: '22px',
  fontFamily: 'Athelas',
  marginLeft: '5%',
  marginRight: '5%'

}

const formStyle = {
  marginLeft: '2%',
  marginRight: '2%',
  fontSize: '20px'
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
                <div class="form-check form-check-inline" style={formStyle}>
                  <input class="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio1" value="option1" />
                  <label class="form-check-label" for="inlineRadio1">In person </label>
                </div>
                <div class="form-check form-check-inline" style={formStyle}>
                <input class="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio1" value="option1" />
                <label class="form-check-label" for="inlineRadio2">Online</label>
                </div>
                <div class="form-check form-check-inline" style={formStyle}>
                <input class="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio1" value="option1" />
                <label class="form-check-label" for="inlineRadio3">Both</label>
                </div>
          
            </div>
      </div>
      <br></br>
      <div className="form-group">
            <div className="row" style={textStyle}>
              <div className="col">
              <label for="two">Do you want to connect with Undergraduates or Graduates Students?</label>
              </div>
                <div class="form-check form-check-inline" style={formStyle}>
                  <input class="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio2" value="option2" />
                  <label class="form-check-label" for="inlineRadio1">Undergraduates</label>
                </div>
                <div class="form-check form-check-inline" style={formStyle}>
                <input class="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio2" value="option2" />
                <label class="form-check-label" for="inlineRadio2">Graduates</label>
                </div>
                <div class="form-check form-check-inline" style={formStyle}>
                <input class="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio2" value="option2" />
                <label class="form-check-label" for="inlineRadio2">Both</label>
                </div>
            </div>
      </div>
      <br></br>
      <div className="form-group" >
            <div className="row" style={textStyle}>
              <div className="col">
              <label for="three">Do you want to connect with people in the same year as you?</label>
              </div>
                <div class="form-check form-check-inline" style={formStyle}>
                  <input class="form-check-input" type="radio" name="inlineRadioOptions3" id="inlineRadio3" value="option3"/>
                  <label class="form-check-label" for="inlineRadio3">Yes </label>
                </div>
                <div class="form-check form-check-inline" style={formStyle}>
                <input class="form-check-input" type="radio" name="inlineRadioOptions3" id="inlineRadio3" value="option3" />
                <label class="form-check-label" for="inlineRadio3">No</label>
                </div>
            </div>
      </div>
      <br></br>
      <div className="form-group" >
            <div className="row" style={textStyle}>
              <div className="col">
              <label for="four">Do you want to connect with people from the same country?</label>
              </div>
                <div class="form-check form-check-inline" style={formStyle}>
                  <input class="form-check-input" type="radio" name="inlineRadioOptions4" id="inlineRadio4" value="option4" />
                  <label class="form-check-label" for="inlineRadio1">Yes </label>
                </div>
                <div class="form-check form-check-inline" style={formStyle}>
                <input class="form-check-input" type="radio" name="inlineRadioOptions4" id="inlineRadio4" value="option4" />
                <label class="form-check-label" for="inlineRadio4">No</label>
                </div>
            </div>
      </div>
      <br></br>
      <div className="form-group" >
            <div className="row" style={textStyle}>
              <div className="col">
              <label for="five">Do you want to connect with people who share the same ethnicity?</label>
              </div>
                <div class="form-check form-check-inline" style={formStyle}>
                  <input class="form-check-input" type="radio" name="inlineRadioOptions5" id="inlineRadio5" value="option5" />
                  <label class="form-check-label" for="inlineRadio5">Yes </label>
                </div>
                <div class="form-check form-check-inline" style={formStyle}>
                <input class="form-check-input" type="radio" name="inlineRadioOptions5" id="inlineRadio5" value="option5" />
                <label class="form-check-label" for="inlineRadio5">No</label>
                </div>
            </div>
      </div>
      <br></br>
      <div className="form-group" >
            <div className="row" style={textStyle}>
              <div className="col">
              <label for="six">Do you want to connect with people in the same major?</label>
              </div>
                <div class="form-check form-check-inline" style={formStyle}>
                  <input class="form-check-input" type="radio" name="inlineRadioOptions6" id="inlineRadio6" value="option6"/>
                  <label class="form-check-label" for="inlineRadio6">Yes </label>
                </div>
                <div class="form-check form-check-inline" style={formStyle}>
                <input class="form-check-input" type="radio" name="inlineRadioOptions6" id="inlineRadio6" value="option6" />
                <label class="form-check-label" for="inlineRadio6">No</label>
                </div>
            </div>
      </div>
      <br></br>
    <h3 style={{marginLeft: '2%'}}>Why are you using this website?</h3>
    <div className="form-group" >
            <div className="row" style={textStyle}>
              <div className="col">
              <label for="seven">Are you looking for someone to help you?</label>
              </div>
                <div class="form-check form-check-inline" style={formStyle}>
                  <input class="form-check-input" type="radio" name="inlineRadioOptions7" id="inlineRadio7" value="option7"/>
                  <label class="form-check-label" for="inlineRadio7">Yes </label>
                </div>
                <div class="form-check form-check-inline" style={formStyle}>
                <input class="form-check-input" type="radio" name="inlineRadioOptions7" id="inlineRadio7" value="option7" />
                <label class="form-check-label" for="inlineRadio7">No</label>
                </div>
                <div class="form-check form-check-inline" style={formStyle}>
                <input class="form-check-input" type="radio" name="inlineRadioOptions7" id="inlineRadio7" value="option7" />
                <label class="form-check-label" for="inlineRadio2">Both</label>
                </div>
            </div>
      </div> 
      <div className="form-group" >
            <div className="row" style={textStyle}>
              <div className="col">
              <label for="eight">Do you have any knowledge of the school before you started?</label>
              </div>
                <div class="form-check form-check-inline" style={formStyle}>
                  <input class="form-check-input" type="radio" name="inlineRadioOptions8" id="inlineRadio8" value="option8"/>
                  <label class="form-check-label" for="inlineRadio8">Yes </label>
                </div>
                <div class="form-check form-check-inline" style={formStyle}>
                <input class="form-check-input" type="radio" name="inlineRadioOptions8" id="inlineRadio8" value="option8" />
                <label class="form-check-label" for="inlineRadio8">No</label>
                </div>
            </div>
      </div> 
      <div className="form-group" >
            <div className="row" style={textStyle}>
              <div className="col">
              <label for="nine">Do you know the aera?</label>
              </div>
                <div class="form-check form-check-inline" style={formStyle}>
                  <input class="form-check-input" type="radio" name="inlineRadioOptions9" id="inlineRadio9" value="option9"/>
                  <label class="form-check-label" for="inlineRadio9">Yes </label>
                </div>
                <div class="form-check form-check-inline" style={formStyle}>
                <input class="form-check-input" type="radio" name="inlineRadioOptions9" id="inlineRadio9" value="option9" />
                <label class="form-check-label" for="inlineRadio9">No</label>
                </div>
            </div>
      </div> 
      <br></br>
      <div className="form-group" >
            <div className="row" style={textStyle}>
              <div className="col">
              <label for="ten">Do you have a car?</label>
              </div>
                <div class="form-check form-check-inline" style={formStyle}>
                  <input class="form-check-input" type="radio" name="inlineRadioOptions10" id="inlineRadio10" value="option10"/>
                  <label class="form-check-label" for="inlineRadio1">Yes </label>
                </div>
                <div class="form-check form-check-inline" style={formStyle}>
                <input class="form-check-input" type="radio" name="inlineRadioOptions10" id="inlineRadio2" value="option10" />
                <label class="form-check-label" for="inlineRadio2">No</label>
                </div>
            </div>
      </div> 
      <br></br>
      <div className="form-group" >
            <div className="row" style={textStyle}>
              <div className="col">
              <label for="two">Are there any challenges you are coping with? If yes, please describe</label>
              </div>
              <div className="col">
                <textarea type="text" className="form-control" id="two" style={inputStyle}/>
              </div>
            </div>            
      </div>
      <br></br>
      <div className="form-group" >
            <div className="row" style={textStyle}>
              <div className="col">
              <label for="two">How are you able to help someone? Please descibe</label>
              </div>
              <div className="col">
                <textarea type="text" className="form-control" id="two" style={inputStyle}/>
              </div>
            </div>            
      </div>

          <br></br>
    <h3 style={{marginLeft: '2%'}}>What are your hobbies</h3>
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

