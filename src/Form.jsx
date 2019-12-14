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
      ten:''
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
    this.setState({one: e.target.value });
  }
  twoChange(e){
    this.setState({two: e.target.value });
  }
  threeChange(e){
    this.setState({three: e.target.value });
  }
  fourChange(e){
    this.setState({four: e.target.value });
  }
  fiveChange(e){
    this.setState({five: e.target.value });
  }
  sixChange(e){
    this.setState({six: e.target.value });
  }
  sevenChange(e){
    this.setState({seven: e.target.value });
  }
  eightChange(e){
    this.setState({eight: e.target.value });
  }
  nineChange(e){
    this.setState({nine: e.target.value });
  }
  tenChange(e){
    this.setState({ten: e.target.value });
  }

    handleSubmit(e)
    {
      e.preventDefault();
      let form = document.forms.question
      const submitReq = {
        "one": form.inlineRadioOptions1.value,
        "two": form.inlineRadioOptions2.value,
        "three": form.inlineRadioOptions3.value,
        "four": form.inlineRadioOptions4.value,
        "five": form.inlineRadioOptions5.value,
        "six": form.inlineRadioOptions6.value,
        "seven": form.inlineRadioOptions7.value,
        "eight": form.inlineRadioOptions8.value,
        "nine": form.inlineRadioOptions9.value,
        "ten": form.inlineRadioOptions10.value,
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
      <form className="form-group" name="question" onSubmit={this.handleSubmit}>
      <h3 style={{marginLeft: '2%'}}>What are the people you want to connect with?</h3>
      <div className="form-group">
            <div className="row" style={textStyle}>
              <div className="col">
              <label for="one">Do you want to meet in person or online?</label>
              </div>
                <div class="form-check form-check-inline" style={formStyle}>
                  <input class="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio1" value="option1" checked={this.state.one === 'option1'} onChange={this.oneChange}/>
                  <label class="form-check-label" for="inlineRadio1">In person </label>
                </div>
                <div class="form-check form-check-inline" style={formStyle}>
                <input class="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio1" value="option2" checked={this.state.one === 'option2'} onChange={this.oneChange}/>
                <label class="form-check-label" for="inlineRadio1">Online</label>
                </div>
                <div class="form-check form-check-inline" style={formStyle}>
                <input class="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio1" value="option3" checked={this.state.one === 'option3'} onChange={this.oneChange}/>
                <label class="form-check-label" for="inlineRadio1">Both</label>
              </div>
            </div>
      </div>
      <div className="form-group">
            <div className="row" style={textStyle}>
              <div className="col">
              <label for="two">Do you want to connect with Undergraduates or Graduates Students?</label>
              </div>
                <div class="form-check form-check-inline" style={formStyle}>
                  <input class="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio2" value="option4" checked={this.state.two === 'option4'} onChange={this.twoChange}/>
                  <label class="form-check-label" for="inlineRadio1">Undergraduates</label>
                </div>
                <div class="form-check form-check-inline" style={formStyle}>
                <input class="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio2" value="option5" checked={this.state.two === 'option5'} onChange={this.twoChange}/>
                <label class="form-check-label" for="inlineRadio2">Graduates</label>
                </div>
                <div class="form-check form-check-inline" style={formStyle}>
                <input class="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio2" value="option6" checked={this.state.two === 'option6'} onChange={this.twoChange}/>
                <label class="form-check-label" for="inlineRadio2">Both</label>
                </div>
            </div>
      </div>
      <div className="form-group" >
            <div className="row" style={textStyle}>
              <div className="col">
              <label for="three">Do you want to connect with people in the same year as you?</label>
              </div>
                <div class="form-check form-check-inline" style={formStyle}>
                  <input class="form-check-input" type="radio" name="inlineRadioOptions3" id="inlineRadio3" value="option7" checked={this.state.three === 'option7'} onChange={this.threeChange}/>
                  <label class="form-check-label" for="inlineRadio3">Yes </label>
                </div>
                <div class="form-check form-check-inline" style={formStyle}>
                <input class="form-check-input" type="radio" name="inlineRadioOptions3" id="inlineRadio3" value="option8" checked={this.state.three === 'option8'} onChange={this.threeChange}/>
                <label class="form-check-label" for="inlineRadio3">No</label>
                </div>
            </div>
      </div>
      <div className="form-group" >
            <div className="row" style={textStyle}>
              <div className="col">
              <label for="four">Do you want to connect with people from the same country?</label>
              </div>
                <div class="form-check form-check-inline" style={formStyle}>
                  <input class="form-check-input" type="radio" name="inlineRadioOptions4" id="inlineRadio4" value="option9" checked={this.state.four === 'option9'} onChange={this.fourChange}/>
                  <label class="form-check-label" for="inlineRadio1">Yes </label>
                </div>
                <div class="form-check form-check-inline" style={formStyle}>
                <input class="form-check-input" type="radio" name="inlineRadioOptions4" id="inlineRadio4" value="option10" checked={this.state.four === 'option10'} onChange={this.fourChange}/>
                <label class="form-check-label" for="inlineRadio4">No</label>
                </div>
            </div>
      </div>
      <div className="form-group" >
            <div className="row" style={textStyle}>
              <div className="col">
              <label for="five">Do you want to connect with people who share the same ethnicity?</label>
              </div>
                <div class="form-check form-check-inline" style={formStyle}>
                  <input class="form-check-input" type="radio" name="inlineRadioOptions5" id="inlineRadio5" value="option11" checked={this.state.five === 'option11'} onChange={this.fiveChange}/>
                  <label class="form-check-label" for="inlineRadio5">Yes </label>
                </div>
                <div class="form-check form-check-inline" style={formStyle}>
                <input class="form-check-input" type="radio" name="inlineRadioOptions5" id="inlineRadio5" value="option12" checked={this.state.five === 'option12'} onChange={this.fiveChange}/>
                <label class="form-check-label" for="inlineRadio5">No</label>
                </div>
            </div>
      </div>
      <div className="form-group" >
            <div className="row" style={textStyle}>
              <div className="col">
              <label for="six">Do you want to connect with people in the same major?</label>
              </div>
                <div class="form-check form-check-inline" style={formStyle}>
                  <input class="form-check-input" type="radio" name="inlineRadioOptions6" id="inlineRadio6" value="option13" checked={this.state.six === 'option13'} onChange={this.sixChange}/>
                  <label class="form-check-label" for="inlineRadio6">Yes </label>
                </div>
                <div class="form-check form-check-inline" style={formStyle}>
                <input class="form-check-input" type="radio" name="inlineRadioOptions6" id="inlineRadio6" value="option14" checked={this.state.six === 'option14'} onChange={this.sixChange}/>
                <label class="form-check-label" for="inlineRadio6">No</label>
                </div>
            </div>
      </div>
    <br></br>
    <h3 style={{marginLeft: '2%'}}>Knowledge about the school and why are you using this website</h3>
    <div className="form-group" >
            <div className="row" style={textStyle}>
              <div className="col">
              <label for="seven">Are you looking for someone to help you?</label>
              </div>
                <div class="form-check form-check-inline" style={formStyle}>
                  <input class="form-check-input" type="radio" name="inlineRadioOptions7" id="inlineRadio7" value="option15" checked={this.state.seven=== 'option15'} onChange={this.sevenChange}/>
                  <label class="form-check-label" for="inlineRadio7">Yes </label>
                </div>
                <div class="form-check form-check-inline" style={formStyle}>
                <input class="form-check-input" type="radio" name="inlineRadioOptions7" id="inlineRadio7" value="option16" checked={this.state.seven === 'option16'} onChange={this.sevenChange}/>
                <label class="form-check-label" for="inlineRadio7">No</label>
                </div>
                <div class="form-check form-check-inline" style={formStyle}>
                <input class="form-check-input" type="radio" name="inlineRadioOptions7" id="inlineRadio7" value="option17" checked={this.state.seven === 'option12'} onChange={this.sevenChange}/>
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
                  <input class="form-check-input" type="radio" name="inlineRadioOptions8" id="inlineRadio8" value="option18" checked={this.state.eight === 'option18'} onChange={this.eightChange}/>
                  <label class="form-check-label" for="inlineRadio8">Yes </label>
                </div>
                <div class="form-check form-check-inline" style={formStyle}>
                <input class="form-check-input" type="radio" name="inlineRadioOptions8" id="inlineRadio8" value="option19" checked={this.state.eight === 'option19'} onChange={this.eightChange}/>
                <label class="form-check-label" for="inlineRadio8">No</label>
                </div>
            </div>
      </div> 
      <div className="form-group" >
            <div className="row" style={textStyle}>
              <div className="col">
              <label for="nine">Do you know the aera of where your school is located?</label>
              </div>
                <div class="form-check form-check-inline" style={formStyle}>
                  <input class="form-check-input" type="radio" name="inlineRadioOptions9" id="inlineRadio9" value="option20" checked={this.state.nine === 'option20'} onChange={this.nineChange}/>
                  <label class="form-check-label" for="inlineRadio9">Yes </label>
                </div>
                <div class="form-check form-check-inline" style={formStyle}>
                <input class="form-check-input" type="radio" name="inlineRadioOptions9" id="inlineRadio9" value="option21" checked={this.state.nine === 'option21'} onChange={this.nineChange}/>
                <label class="form-check-label" for="inlineRadio9">No</label>
                </div>
            </div>
      </div> 
      <div className="form-group" >
            <div className="row" style={textStyle}>
              <div className="col">
              <label for="ten">Do you have a car on campus?</label>
              </div>
                <div class="form-check form-check-inline" style={formStyle}>
                  <input class="form-check-input" type="radio" name="inlineRadioOptions10" id="inlineRadio10" value="option22" checked={this.state.ten === 'option22'} onChange={this.tenChange}/>
                  <label class="form-check-label" for="inlineRadio10">Yes </label>
                </div>
                <div class="form-check form-check-inline" style={formStyle}>
                <input class="form-check-input" type="radio" name="inlineRadioOptions10" id="inlineRadio10" value="option23" checked={this.state.ten === 'option23'} onChange={this.tenChange}/>
                <label class="form-check-label" for="inlineRadio10">No</label>
                </div>
            </div>
      </div> 
      <div className="form-group" >
            <div className="row" style={textStyle}>
              <div className="col">
              <label for="two">Are there any challenges you are coping with? If yes, please describe.</label>
              </div>
              <div className="col">
                <textarea type="text" className="form-control" id="two" style={inputStyle}/>
              </div>
            </div>            
      </div>
      <div className="form-group" >
            <div className="row" style={textStyle}>
              <div className="col">
              <label for="two">How can someone help you with your challenges? Please descibe.</label>
              </div>
              <div className="col">
                <textarea type="text" className="form-control" id="two" style={inputStyle}/>
              </div>
            </div>            
      </div>
      <div className="form-group" >
            <div className="row" style={textStyle}>
              <div className="col">
              <label for="two">How are you able to help someone with their challenges? Please descibe how you can help a person.</label>
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
              <button className="btn btn-dark" type="submit" type="submit"><Link to="/connect" style={{ textDecoration: 'none', color: 'white' }} >Find Friends</Link></button>
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

