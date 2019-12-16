import React from 'react';
import 'isomorphic-fetch';
import { Link } from 'react-router';
import SearchBar from './SearchBar.jsx';

//Style Variables
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
//Form Helpers

 export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      one: '',
      two: '',
      three: '',
      four: '',
      five: '',
      six: '',
      seven: '',
      eight: '',
      nine: '',
      ten: '',
      eleven: '',
      tweleve: '',
      thirteen: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this)
    this.oneChange = this.oneChange.bind(this);
    this.twoChange = this.twoChange.bind(this);
    this.threeChange = this.threeChange.bind(this);
    this.fourChange = this.fourChange.bind(this);
    this.fiveChange = this.fiveChange.bind(this);
    this.sixChange = this.sixChange.bind(this);
    this.sevenChange = this.sevenChange.bind(this);
    this.eightChange = this.eightChange.bind(this);
    this.nineChange = this.nineChange.bind(this);
    this.tenChange = this.tenChange.bind(this);      
  }

  oneChange(e){
    this.setState({one: e.target.value});
  }
  twoChange(e){
    this.setState({two: e.target.value});
  }
  threeChange(e){
    this.setState({three: e.target.value});
  }
  fourChange(e){
    this.setState({four: e.target.value});
  }
  fiveChange(e){
    this.setState({five: e.target.value});
  }
  sixChange(e){
    this.setState({six: e.target.value});
  }
  sevenChange(e){
    this.setState({seven: e.target.value});
  }
  eightChange(e){
    this.setState({eight: e.target.value});
  }
  nineChange(e){
    this.setState({nine: e.target.value});
  }
  tenChange(e){
    this.setState({ten: e.target.value});
  }

    handleSubmit(e)
    {
      e.preventDefault();
      let form = document.forms.question
      const submitReq = {
        "one": form.inlineRadio1.value,
        "two": form.inlineRadio2.value,
        "three": form.inlineRadio3.value,
        "four": form.inlineRadio4.value,
        "five": form.inlineRadio5.value,
        "six": form.inlineRadio6.value,
        "seven": form.inlineRadio7.value,
        "eight": form.inlineRadio8.value,
        "nine": form.inlineRadio9.value,
        "ten": form.inlineRadio10.value,
        "eleven": form.open1.value,
        "tweleve": form.open2.value,
        "thirteen": form.open3.value
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
        <SearchBar> </SearchBar>   
        <h1 style={{marginLeft: '2%'}}>Survery Questions</h1>
        <br></br><br></br>
      <form className="form-group" name="question" onSubmit={this.handleSubmit}>
      <h3 style={{marginLeft: '2%'}}>What are the people you want to connect with?</h3>
      <div className="form-group">
            <div className="row" style={textStyle}>
              <div className="col">
              <label>Do you want to meet in person or online?</label>
              </div>
                <div className="form-check form-check-inline" style={formStyle}>
                  <input className="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio1" value="In person" checked={this.state.one === 'In person'} onChange={this.oneChange}/>
                  <label className="form-check-label" htmlFor="inlineRadio1">In person</label>
                </div>
                <div className="form-check form-check-inline" style={formStyle}>
                <input className="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio1" value="Online" checked={this.state.one === 'Online'} onChange={this.oneChange}/>
                <label className="form-check-label" htmlFor="inlineRadio1">Online</label>
                </div>
                <div className="form-check form-check-inline" style={formStyle}>
                <input className="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio1" value="Both" checked={this.state.one === 'Both'} onChange={this.oneChange}/>
                <label className="form-check-label" htmlFor="inlineRadio1">Both</label>
              </div>
            </div>
      </div>
      <div className="form-group">
            <div className="row" style={textStyle}>
              <div className="col">
              <label>Do you want to connect with Undergraduates or Graduates Students?</label>
              </div>
                <div className="form-check form-check-inline" style={formStyle}>
                  <input className="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio2" value="Undergraduates" checked={this.state.two === 'Undergraduates'} onChange={this.twoChange}/>
                  <label className="form-check-label" htmlFor="inlineRadio1">Undergraduates</label>
                </div>
                <div className="form-check form-check-inline" style={formStyle}>
                <input className="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio2" value="Graduates" checked={this.state.two === 'Graduates'} onChange={this.twoChange}/>
                <label className="form-check-label" htmlFor="inlineRadio2">Graduates</label>
                </div>
                <div className="form-check form-check-inline" style={formStyle}>
                <input className="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio2" value="Both" checked={this.state.two === 'Both'} onChange={this.twoChange}/>
                <label className="form-check-label" htmlFor="inlineRadio2">Both</label>
                </div>
            </div>
      </div>
      <div className="form-group" >
            <div className="row" style={textStyle}>
              <div className="col">
              <label>Do you want to connect with people in the same year as you?</label>
              </div>
                <div className="form-check form-check-inline" style={formStyle}>
                  <input className="form-check-input" type="radio" name="inlineRadioOptions3" id="inlineRadio3" value="Yes" checked={this.state.three === 'Yes'} onChange={this.threeChange}/>
                  <label className="form-check-label" htmlFor="inlineRadio3">Yes </label>
                </div>
                <div className="form-check form-check-inline" style={formStyle}>
                <input className="form-check-input" type="radio" name="inlineRadioOptions3" id="inlineRadio3" value="No" checked={this.state.three === 'No'} onChange={this.threeChange}/>
                <label className="form-check-label" htmlFor="inlineRadio3">No</label>
                </div>
            </div>
      </div>
      <div className="form-group" >
            <div className="row" style={textStyle}>
              <div className="col">
              <label>Do you want to connect with people from the same country?</label>
              </div>
                <div className="form-check form-check-inline" style={formStyle}>
                  <input className="form-check-input" type="radio" name="inlineRadioOptions4" id="inlineRadio4" value="Yes" checked={this.state.four === 'Yes'} onChange={this.fourChange}/>
                  <label className="form-check-label" htmlFor="inlineRadio1">Yes </label>
                </div>
                <div className="form-check form-check-inline" style={formStyle}>
                <input className="form-check-input" type="radio" name="inlineRadioOptions4" id="inlineRadio4" value="No" checked={this.state.four === 'No'} onChange={this.fourChange}/>
                <label className="form-check-label" htmlFor="inlineRadio4">No</label>
                </div>
            </div>
      </div>
      <div className="form-group" >
            <div className="row" style={textStyle}>
              <div className="col">
              <label>Do you want to connect with people who share the same ethnicity?</label>
              </div>
                <div className="form-check form-check-inline" style={formStyle}>
                  <input className="form-check-input" type="radio" name="inlineRadioOptions5" id="inlineRadio5" value="Yes" checked={this.state.five === 'Yes'} onChange={this.fiveChange}/>
                  <label className="form-check-label" htmlFor="inlineRadio5">Yes </label>
                </div>
                <div className="form-check form-check-inline" style={formStyle}>
                <input className="form-check-input" type="radio" name="inlineRadioOptions5" id="inlineRadio5" value="No" checked={this.state.five === 'No'} onChange={this.fiveChange}/>
                <label className="form-check-label" htmlFor="inlineRadio5">No</label>
                </div>
            </div>
      </div>
      <div className="form-group" >
            <div className="row" style={textStyle}>
              <div className="col">
              <label>Do you want to connect with people in the same major?</label>
              </div>
                <div className="form-check form-check-inline" style={formStyle}>
                  <input className="form-check-input" type="radio" name="inlineRadioOptions6" id="inlineRadio6" value="Yes" checked={this.state.six === 'Yes'} onChange={this.sixChange}/>
                  <label className="form-check-label" htmlFor="inlineRadio6">Yes </label>
                </div>
                <div className="form-check form-check-inline" style={formStyle}>
                <input className="form-check-input" type="radio" name="inlineRadioOptions6" id="inlineRadio6" value="No" checked={this.state.six === 'No'} onChange={this.sixChange}/>
                <label className="form-check-label" htmlFor="inlineRadio6">No</label>
                </div>
            </div>
      </div>
    <br></br>
    <h3 style={{marginLeft: '2%'}}>Knowledge about the school and why are you using this website</h3>
      <div className="form-group" >
            <div className="row" style={textStyle}>
              <div className="col">
              <label>Do you have any knowledge of the school before you started?</label>
              </div>
                <div className="form-check form-check-inline" style={formStyle}>
                  <input className="form-check-input" type="radio" name="inlineRadioOptions8" id="inlineRadio8" value="Yes" checked={this.state.eight === 'Yes'} onChange={this.eightChange}/>
                  <label className="form-check-label" htmlFor="inlineRadio8">Yes </label>
                </div>
                <div className="form-check form-check-inline" style={formStyle}>
                <input className="form-check-input" type="radio" name="inlineRadioOptions8" id="inlineRadio8" value="No" checked={this.state.eight === 'No'} onChange={this.eightChange}/>
                <label className="form-check-label" htmlFor="inlineRadio8">No</label>
                </div>
            </div>
      </div> 
      <div className="form-group" >
            <div className="row" style={textStyle}>
              <div className="col">
              <label>Do you know the aera of where your school is located?</label>
              </div>
                <div className="form-check form-check-inline" style={formStyle}>
                  <input className="form-check-input" type="radio" name="inlineRadioOptions9" id="inlineRadio9" value="Yes" checked={this.state.nine === 'Yes'} onChange={this.nineChange}/>
                  <label className="form-check-label" htmlFor="inlineRadio9">Yes </label>
                </div>
                <div className="form-check form-check-inline" style={formStyle}>
                <input className="form-check-input" type="radio" name="inlineRadioOptions9" id="inlineRadio9" value="No" checked={this.state.nine === 'No'} onChange={this.nineChange}/>
                <label className="form-check-label" htmlFor="inlineRadio9">No</label>
                </div>
            </div>
      </div> 
      <div className="form-group" >
            <div className="row" style={textStyle}>
              <div className="col">
              <label>Do you have a car on campus?</label>
              </div>
                <div className="form-check form-check-inline" style={formStyle}>
                  <input className="form-check-input" type="radio" name="inlineRadioOptions10" id="inlineRadio10" value="Yes" checked={this.state.ten === 'Yes'} onChange={this.tenChange}/>
                  <label className="form-check-label" htmlFor="inlineRadio10">Yes </label>
                </div>
                <div className="form-check form-check-inline" style={formStyle}>
                <input className="form-check-input" type="radio" name="inlineRadioOptions10" id="inlineRadio10" value="No" checked={this.state.ten === 'No'} onChange={this.tenChange}/>
                <label className="form-check-label" htmlFor="inlineRadio10">No</label>
                </div>
            </div>
      </div> 
      <div className="form-group" >
            <div className="row" style={textStyle}>
              <div className="col">
              <label>Are you looking for someone to help you or are you willing to help people?</label>
              </div>
                <div className="form-check form-check-inline" style={formStyle}>
                  <input className="form-check-input" type="radio" name="inlineRadioOptions7" id="inlineRadio7" value="Yes" checked={this.state.seven=== 'Yes'} onChange={this.sevenChange}/>
                  <label className="form-check-label" htmlFor="inlineRadio7">Yes </label>
                </div>
                <div className="form-check form-check-inline" style={formStyle}>
                <input className="form-check-input" type="radio" name="inlineRadioOptions7" id="inlineRadio7" value="No" checked={this.state.seven === 'No'} onChange={this.sevenChange}/>
                <label className="form-check-label" htmlFor="inlineRadio7">No</label>
                </div>
                <div className="form-check form-check-inline" style={formStyle}>
                <input className="form-check-input" type="radio" name="inlineRadioOptions7" id="inlineRadio7" value="Both" checked={this.state.seven === 'Both'} onChange={this.sevenChange}/>
                <label className="form-check-label" htmlFor="inlineRadio2">Both</label>
                </div>
            </div>
      </div> 
      <div className="form-group" >
            <div className="row" style={textStyle}>
              <div className="col">
              <label>Are there any challenges you are coping with? If yes, please describe.</label>
              </div>
              <div className="col">
                <textarea type="text" className="form-control" id="open1" style={inputStyle}/>
              </div>
            </div>            
      </div>
      <div className="form-group" >
            <div className="row" style={textStyle}>
              <div className="col">
              <label>How can someone help you with your challenges? Please descibe.</label>
              </div>
              <div className="col">
                <textarea type="text" className="form-control" id="open2" style={inputStyle}/>
              </div>
            </div>            
      </div>
      <div className="form-group" >
            <div className="row" style={textStyle}>
              <div className="col">
              <label>How are you able to help someone with their challenges? Please descibe how you can help a person.</label>
              </div>
              <div className="col">
                <textarea type="text" className="form-control" id="open3" style={inputStyle}/>
              </div>
            </div>            
      </div>
      <br></br>
      <h3 style={{marginLeft: '2%'}}>What are your hobbies</h3>
      <center> 
        <div className = "row">
              <div className="col">
              <button className="btn btn-dark"><Link to="/userSurvey" style={{ textDecoration: 'none', color: 'white' }} >Edit</Link></button>
              </div> 
              <div className="col">
              <button className="btn btn-dark" type="submit" value="Submit"><Link to="/connect" style={{ textDecoration: 'none', color: 'white' }} >Find Friends</Link></button>
              </div>
          </div>   
          </center>
    </form>
          <br></br><br></br>
          </div>
    );
  }
}



