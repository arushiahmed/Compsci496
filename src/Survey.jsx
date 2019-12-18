import React from 'react';
import 'isomorphic-fetch';
import { Link } from 'react-router';


import SearchBar from './SearchBar.jsx';

const formStyle = {
  marginLeft: '5%',
  marginRight: '5%',
  fontSize: '20px',
}

    const FormQuestion = (props) => (
       <div>
         <h3 style={{marginLeft: '2%'}}>What are the people you want to connect with?</h3>
         <hr />
            <div className="viewForm" style={formStyle}>Do you want to meet somone in person, online, or both?<br></br><strong>My Answer: </strong>{props.question.one}</div><br></br>
            <hr />
            <div className="viewForm" style={formStyle}>Do you want to connect with Undergraduates, Graduates Students, or both?<br></br><strong>My Answer: </strong>{props.question.two}</div><br></br>
            <hr />
            <div className="viewForm" style={formStyle}>Do you want to connect with people in the same year as you, different, or both?<br></br><strong>My Answer:</strong>{props.question.three}</div><br></br>
            <hr />
            <div className="viewForm" style={formStyle}>Do you want to connect with people from the same country, different, or both?<br></br><strong>My Answer: </strong>{props.question.four}</div><br></br>
            <hr />
            <div className="viewForm" style={formStyle}>Do you want to connect with people in the same major, different, or both?<br></br><strong>My Answer: </strong>{props.question.five}</div><br></br>
            <hr />
            <div className="viewForm" style={formStyle}>Do you want to connect with people in the same school/college as you, different, or both?<br></br><strong>My Answer: </strong>{props.question.six}</div><br></br>
            <hr />
            <div className="viewForm" style={formStyle}>Do you want to connect with someone who has a car on campus?<br></br><strong>My Answer: </strong>{props.question.seven}</div><br></br>
            <hr />
            <div className="viewForm" style={formStyle}>Do you want to connect with people who share the same ethnicity?<br></br><strong>My Answer: </strong>{props.question.eight}</div><br></br>
            <hr />
          <h3 style={{marginLeft: '2%'}}>Knowledge about the University</h3>
            <div className="viewForm" style={formStyle}>Do you have any knowledge of the school before you started? If yes please describe below.<br></br><strong>My Answer: </strong>{props.question.nine}</div><br></br>
            <hr />
            <div className="viewForm" style={formStyle}>Do you know the city/town of where your school is located? If yes please descibe below.<br></br><strong>My Answer: </strong>{props.question.ten}</div><br></br>
            <hr />
            <div className="viewForm" style={formStyle}>Do you have a job(s) on campus? If yes please descibe the position and what you do below.<br></br><strong>My Answer: </strong>{props.question.eleven}</div><br></br>
            <hr />
            <div className="viewForm" style={formStyle}>Are their resources on campus that you found helpful/not helpful? If yes please descibe the position and what you do below.<br></br><strong>My Answer: </strong>{props.question.tweleve}</div><br></br>
            <hr />
            <div className="viewForm" style={formStyle}>Are you involved with any clubs/organizations on campus? If yes please descibe the position and what you do below.<br></br><strong>My Answer: </strong>{props.question.thirteen}</div><br></br>
            <hr />
          <h3 style={{marginLeft: '2%'}}>What are your hobbies?</h3>
          <div className="viewForm" style={formStyle}>Select all hobbies that apply to you.<br></br><strong>My Answer: </strong> {props.question.categories}</div><br></br>
          <hr />
          <div className="viewForm" style={formStyle}>If there is a hobbie that was not listest above, type your answers here. Please explain more about your hobbies.<br></br><strong>My Answer: </strong>{props.question.fourteen}</div><br></br>
          <hr />
          <h3 style={{marginLeft: '2%'}}>What are you hoping to get out of this website?</h3>
            <div className="viewForm" style={formStyle}>Are you looking for help or are you willing to help? Please describe.<br></br><strong>My Answer: </strong>{props.question.fifteen}</div><br></br>
            <hr />
            <div className="viewForm" style={formStyle}>Are there any challenges you are coping with? Please describe.<br></br><strong>My Answer: </strong>{props.question.sixteen}</div><br></br>
            <hr />
            <div className="viewForm" style={formStyle}>How can someone help you with your challenges? Please describe.<br></br><strong>My Answer: </strong>{props.question.seventeen}</div><br></br>
            <hr />
            <div className="viewForm" style={formStyle}>How are you able to help someone with their challenges? Please describe.<br></br><strong>My Answer: </strong>{props.question.eighteen}</div><br></br>
            <hr />  
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
          <FormPage questionform={this.state.questionform} />
            <center>
            <div className = "row">
                <div className="col">
                <button className="btn btn-dark" role="button"><Link to="/form" style={{textDecoration: 'none', color: 'white' }}>New Survery</Link></button>
                </div> 
                <div className="col">
                <button className="btn btn-dark" role="button"><Link to="/*" style={{textDecoration: 'none', color: 'white' }}>Edit</Link></button>
                </div>
                <div className="col">
                <button className="btn btn-dark" role="button" Link="/connect"><Link to="/connect" style={{textDecoration: 'none', color: 'white' }} >Find Friends</Link></button>
                </div>
            </div>   
            <br></br><br></br>
            </center>
          </div>
      </div>
    );
  }
}