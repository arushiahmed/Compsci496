import React from 'react';
import 'isomorphic-fetch';
import { Link } from 'react-router';


import SearchBar from './SearchBar.jsx';

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
    );

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
      <div>
        <SearchBar>
        </SearchBar>
        <center>
        <h1>Save</h1>
          <br></br>
          <div>
          <hr />
            <FormPage questionform={this.state.questionform} />
            <hr />
            <div className = "row">
                <div className="col">
                <a className="btn btn-dark"role="button"><Link to="/form" style={{ textDecoration: 'none', color: 'white' }} >Edit</Link></a>
                </div> 
                <div className="col">
                <a className="btn btn-dark"role="button"><Link to="/connect" style={{ textDecoration: 'none', color: 'white' }} >Find Friends</Link></a>
                </div>
            </div>   
            <br></br><br></br>
          </div>
        </center>
      </div>
    );
  }
}