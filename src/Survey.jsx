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
         <h3 style={{marginLeft: '2%'}}>1. What are the people you want to connect with?</h3>
            <div className="viewForm" style={formStyle}>1a. Undergraduates, Graduates Students, or both?<br></br><strong>My Answer: </strong>{props.question.one}</div><br></br>
            <hr />
            <div className="viewForm" style={formStyle}>1b. Graduating year?<br></br><strong>My Answer: </strong>{props.question.two}</div><br></br>
            <hr />
            <div className="viewForm" style={formStyle}>1c. Major?<br></br><strong>My Answer:</strong>{props.question.three}</div><br></br>
            <hr />
            <div className="viewForm" style={formStyle}>1d. The department as your major?<br></br><strong>My Answer: </strong>{props.question.four}</div><br></br>
            <hr />
            <div className="viewForm" style={formStyle}>1e. Ethnicity?<br></br><strong>My Answer: </strong>{props.question.five}</div><br></br>
            <hr />
            <div className="viewForm" style={formStyle}>1f. Country?<br></br><strong>My Answer: </strong>{props.question.six}</div><br></br>
            <hr />
            <div className="viewForm" style={formStyle}>1g. Religion?<br></br><strong>My Answer: </strong>{props.question.seven}</div><br></br>
            <hr />
            <div className="viewForm" style={formStyle}>Do you want to connect with people who share the same ethnicity?<br></br><strong>My Answer: </strong>{props.question.eight}</div><br></br>
            <hr />
          <h3 style={{marginLeft: '2%'}}>2. How much do you know about your campus and the aera</h3>
            <div className="viewForm" style={formStyle}>2a. I know the campus of my school?<br></br><strong>My Answer: </strong>{props.question.eight}</div><br></br>
            <hr />
            <div className="viewForm" style={formStyle}>2b. I know the area outside of the campus?<br></br><strong>My Answer: </strong>{props.question.nine}</div><br></br>
            <hr />
            <div className="viewForm" style={formStyle}>2c. I know lots of places to live off campus?<br></br><strong>My Answer: </strong>{props.question.ten}</div><br></br>
            <hr />
            <div className="viewForm" style={formStyle}>2d. I have a job on campus?<br></br><strong>My Answer: </strong>{props.question.eleven}</div><br></br>
            <hr />
            <div className="viewForm" style={formStyle}>2e. I know useful resources on campus?<br></br><strong>My Answer: </strong>{props.question.tweleve}</div><br></br>
            <hr />
            <div className="viewForm" style={formStyle}>2f. I am involved with clubs/organization on campus?<br></br><strong>My Answer: </strong>{props.question.thirteen}</div><br></br>
            <hr />
          <h3 style={{marginLeft: '2%'}}>3. What are your hobbies?</h3>
          <div className="viewForm" style={formStyle}>3a. Select all hobbies that apply to you.<br></br><strong>My Answer: </strong> {props.question.categories}</div><br></br>
          <hr />
          <div className="viewForm" style={formStyle}>3b. If there is a hobbie that was not listest above, type your answers here. Please explain more about your hobbies.<br></br><strong>My Answer: </strong>{props.question.openOne}</div><br></br>
          <hr />
          <h3 style={{marginLeft: '2%'}}>4. What are you hoping to get out of this website?</h3>
            <div className="viewForm" style={formStyle}>4a. Getting help or receiving help?<br></br><strong>My Answer: </strong>{props.question.fourteen}}</div><br></br>
            <hr />
            <div className="viewForm" style={formStyle}>4b. Someone that has a car?.<br></br><strong>My Answer: </strong>{props.question.fifteen}</div><br></br>
            <hr />
            <div className="viewForm" style={formStyle}>4c. A guide around the city/campus?<br></br><strong>My Answer: </strong>{props.question.sixteen}</div><br></br>
            <hr />
            <div className="viewForm" style={formStyle}>4d. Just for fun?<br></br><strong>My Answer: </strong>{props.question.seventeen}</div><br></br>
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