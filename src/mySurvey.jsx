import React from 'react';
import 'isomorphic-fetch';
import { Link } from 'react-router';


import SearchBar from './SearchBar.jsx';

const formStyle = {
  marginLeft: '2%',
  marginRight: '2%',
  fontSize: '20px'
}

    const FormQuestion = (props) => (
       <div>
         <h3 style={{marginLeft: '2%'}}>What are the people you want to connect with?</h3>
            <div className="viewForm" style={formStyle}>Do you want to meet somone in person, online, or both?<br></br>{props.question.one}</div><br></br>
            <div className="viewForm" style={formStyle}>Do you want to connect with Undergraduates, Graduates Students, or both?<br></br>{props.question.two}</div><br></br>
            <div className="viewForm" style={formStyle}>Do you want to connect with people in the same year as you, different, or both?<br></br>{props.question.three}</div><br></br>
            <div className="viewForm" style={formStyle}>Do you want to connect with people from the same country, different, or both?<br></br> {props.question.four}</div><br></br>
            <div className="viewForm" style={formStyle}>Do you want to connect with people in the same major, different, or both?<br></br>{props.question.five}</div><br></br>
            <div className="viewForm" style={formStyle}>Do you want to connect with people in the same school/college as you, different, or both?<br></br> {props.question.six}</div><br></br>
            <div className="viewForm" style={formStyle}>Do you want to connect with someone who has a car on campus?<br></br> {props.question.seven}</div><br></br>
            <div className="viewForm" style={formStyle}>Do you want to connect with people who share the same ethnicity?<br></br> {props.question.eight}</div><br></br>
          
          <h3 style={{marginLeft: '2%'}}>Knowledge about the University</h3>
            <div className="viewForm" style={formStyle}>Do you have any knowledge of the school before you started? If yes please describe below.<br></br> {props.question.nine}</div><br></br>
            <div className="viewForm" style={formStyle}>Do you know the aera of where your school is located? If yes please descibe below.<br></br> {props.question.ten}</div><br></br>
            <div className="viewForm" style={formStyle}>Do you have a job(s) on campus? If yes please descibe the position and what you do below.<br></br> {props.question.eleven}</div><br></br>
            <div className="viewForm" style={formStyle}>Are their resources on campus that you found helpful/not helpful? If yes please descibe the position and what you do below.<br></br> {props.question.tweleve}</div><br></br>
            <div className="viewForm" style={formStyle}>Are you involved with any clubs/organizations on campus? If yes please descibe the position and what you do below.<br></br> {props.question.thirteen}</div><br></br>

          <h3 style={{marginLeft: '2%'}}>What are your hobbies?</h3>
          <div className="viewForm" style={formStyle}>{props.question.categories}</div><br></br>
          <div className="viewForm" style={formStyle}>If there is a hobbie that was not listest above, type your answers here. Please explain more about your hobbies.<br></br> {props.question.fourteen}</div><br></br>

          <h3 style={{marginLeft: '2%'}}>Knowledge about the University</h3>
            <div className="viewForm" style={formStyle}>Are you looking for someone to help you or are you willing to help people?<br></br> {props.question.fifteen}</div><br></br>
            <div className="viewForm" style={formStyle}>Are there any challenges you are coping with? If yes, please describe.<br></br> {props.question.sixteen}</div><br></br>
            <div className="viewForm" style={formStyle}>How can someone help you with your challenges? Please descibe.<br></br> {props.question.seventeen}</div><br></br>
            <div className="viewForm" style={formStyle}>How are you able to help someone with their challenges? Please descibe how you can help a person.<br></br> {props.question.eighteen}</div><br></br>
       </div>
          
  
      );

    function FormPage(props)
    {
      const formQuestions = props.questionform.map(question => (
        <FormQuestion key={question._id} question={question} />
      ));
    
      return(
        <div id="question-air">
            {formQuestions}
        </div>
      );
    } 

export default class Survey extends React.Component {
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
        <SearchBar></SearchBar>
        <h1 style={{marginLeft: '2%'}}>My Survey</h1>
          <br></br><br></br>
          <div>
          <hr />
            <FormPage questionform={this.state.questionform} />
            <hr />
            <center>
            <div className = "row">
                <div className="col">
                <button className="btn btn-dark" role="button"><Link to="/form" style={{textDecoration: 'none', color: 'white' }}>New Survery</Link></button>
                </div> 
                <div className="col">
                <button className="btn btn-dark" role="button"><Link to="/connect" style={{textDecoration: 'none', color: 'white' }} >Find Friends</Link></button>
                </div>
            </div>   
            <br></br><br></br>
            </center>
          </div>
      </div>
    );
  }
}