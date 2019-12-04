import React from 'react';
import 'isomorphic-fetch';
import { Link } from 'react-router';

import Question from './Question.jsx';
import SearchBar from './SearchBar.jsx';

const FormQuestions = (props) => (
    <div>
        <form>
          <div class="form-group" >
          <label for="exampleFormControlTextarea1" style={textStyle}>What do you like to do?{props.question.one}</label>
            <br></br>
            <textarea class="form-control form-control-lg" id="one" rows="3" style={inputStyle}></textarea>
          </div>
          <br></br>
          <div class="form-group" >
          <label for="exampleFormControlTextarea1" style={textStyle}>What struggles are you facing?{props.question.two}</label>
              <br></br>
              <textarea class="form-control form-control-lg" id="two" rows="3" style={inputStyle}></textarea>
            </div>
            <br></br>
            <div class="form-group" >
          <label for="exampleFormControlTextarea1" style={textStyle}>What are you looking for in a person?{props.question.three}</label>
              <br></br>
              <textarea class="form-control form-control-lg" id="three" rows="3" style={inputStyle}></textarea>
            </div>
            <br></br>
            <div class="form-group" >
              <label for="exampleFormControlTextarea1" style={textStyle}>How can someone help you?{props.question.four}</label>
              <br></br>
              <textarea class="form-control form-control-lg" id="four" rows="3" style={inputStyle}></textarea>
            </div>
            <br></br>
            <div class="form-group" >
              <label for="exampleFormControlTextarea1" style={textStyle}>Why do you want to connect with someone?{props.question.five}</label>
              <br></br>
              <textarea class="form-control form-control-lg" id="five" rows="3" style={inputStyle}></textarea>
            </div>
            <br></br>
            <div class="form-group" >
              <label for="exampleFormControlTextarea1" style={textStyle}>Do you want to meet in person or online?{props.question.six}</label>
              <br></br>
              <textarea class="form-control form-control-lg" id="six" rows="3" style={inputStyle}></textarea>
            </div>
            <br></br>
            <div class="form-group" >
              <label for="exampleFormControlTextarea1" style={textStyle}>Do you want to connect with people from the same country?{props.question.seven}</label>
              <br></br>
              <textarea class="form-control form-control-lg" id="seven" rows="3" style={inputStyle}></textarea>
            </div>
            <br></br>
            <div class="form-group" >
              <label for="exampleFormControlTextarea1" style={textStyle}>Do you want to connect with people who share the same ethnicity?{props.question.eight}</label>
              <br></br>
              <textarea class="form-control form-control-lg" id="eight" rows="3" style={inputStyle}></textarea>
            </div>
          <br></br><br></br><br></br>
      </form>
    </div>
);
    
    function FormPage(props)
    {
      const formQuestions = props.questions.map(question => (
        <FormQuestions key={question._id} question={question} />
      ));
    
      return(
        <div id="question-air">
          {formQuestions}
        </div>
      );
    }

export default class Save extends React.Component {
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
                res/json().then( json => {
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
      <div>
        <SearchBar>
        </SearchBar>
        <center>
        <h1>Save</h1>
        <br></br>
        <form> 
          <FormPage questionform={this.state.questionforms} />  
          </form>
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