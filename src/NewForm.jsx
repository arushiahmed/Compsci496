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
      categories: false, //['Sports', 'Dance', 'Music', 'Art', 'Fashion', 'Make up', 'Traveling', 'Hiking', 'Gardening', 'Camping', 'Video Games', 'Photography', 'Cars', 'Movies', 'Books', 'Volunteer', 'Comendy', 'Games', 'Building', 'Fishing', 'Theater', 'Baking/Cooking', 'Other'],
      nine: '',
      ten: '',
      eleven: '',
      tweleve: '',
      thirteen: '',
      fourteen: '',
      fifteen: '',
      sixteen: '',
      seventeen: '',
      eighteen: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this)
  //  this.handleCheck = this.handleCheck.bind(this);
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

  handleCheck() {
    this.setState({
      categories: !this.state.categories 
    });
  }; 
  

/*setCategory = (e) => {
    const categories = this.state.categories.slice(0);
    const index = categories.indexOf(e.target.value);

    if(e.target.checked){
      categories.push(e.target.value);
    }
    else{
      categories.splice(index, 1);
    }

    this.setState({
      categories: categories
    });
  }
*/
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
      <h2 style={{marginLeft: '2%'}}>What are the people you want to connect with?</h2>
      <br></br>
      <div className="form-group">
            <div className="row" style={textStyle}>
              <div className="col">
              <label>Do you want to meet somone in person, online, or both?</label>
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
              <label>Do you want to connect with Undergraduates, Graduates Students, or both?</label>
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
              <label>Do you want to connect with people in the same year as you, different, or both?</label>
              </div>
                <div className="form-check form-check-inline" style={formStyle}>
                  <input className="form-check-input" type="radio" name="inlineRadioOptions3" id="inlineRadio3" value="Same" checked={this.state.three === 'Same'} onChange={this.threeChange}/>
                  <label className="form-check-label" htmlFor="inlineRadio3">Same</label>
                </div>
                <div className="form-check form-check-inline" style={formStyle}>
                <input className="form-check-input" type="radio" name="inlineRadioOptions3" id="inlineRadio3" value="Different" checked={this.state.three === 'Different'} onChange={this.threeChange}/>
                <label className="form-check-label" htmlFor="inlineRadio3">Different</label>
                </div>
                <div className="form-check form-check-inline" style={formStyle}>
                <input className="form-check-input" type="radio" name="inlineRadioOptions3" id="inlineRadio3" value="Both" checked={this.state.three === 'Both'} onChange={this.threeChange}/>
                <label className="form-check-label" htmlFor="inlineRadio3">Both</label>
                </div>
            </div>
      </div>
      <div className="form-group" >
            <div className="row" style={textStyle}>
              <div className="col">
              <label>Do you want to connect with people from the same country, different, or both?</label>
              </div>
                <div className="form-check form-check-inline" style={formStyle}>
                  <input className="form-check-input" type="radio" name="inlineRadioOptions4" id="inlineRadio4" value="Same" checked={this.state.four === 'Same'} onChange={this.fourChange}/>
                  <label className="form-check-label" htmlFor="inlineRadio1">Same</label>
                </div>
                <div className="form-check form-check-inline" style={formStyle}>
                <input className="form-check-input" type="radio" name="inlineRadioOptions4" id="inlineRadio4" value="Different" checked={this.state.four === 'Different'} onChange={this.fourChange}/>
                <label className="form-check-label" htmlFor="inlineRadio4">Different</label>
                </div>
                <div className="form-check form-check-inline" style={formStyle}>
                <input className="form-check-input" type="radio" name="inlineRadioOptions4" id="inlineRadio4" value="Both" checked={this.state.four === 'Both'} onChange={this.fourChange}/>
                <label className="form-check-label" htmlFor="inlineRadio4">Both</label>
                </div>
            </div>
      </div>
      <div className="form-group" >
            <div className="row" style={textStyle}>
              <div className="col">
              <label>Do you want to connect with people in the same major, different, or both?</label>
              </div>
                <div className="form-check form-check-inline" style={formStyle}>
                  <input className="form-check-input" type="radio" name="inlineRadioOptions5" id="inlineRadio5" value="Same" checked={this.state.five=== 'Same'} onChange={this.fiveChange}/>
                  <label className="form-check-label" htmlFor="inlineRadio5">Same</label>
                </div>
                <div className="form-check form-check-inline" style={formStyle}>
                <input className="form-check-input" type="radio" name="inlineRadioOptions5" id="inlineRadio5" value="Different" checked={this.state.five === 'Different'} onChange={this.fiveChange}/>
                <label className="form-check-label" htmlFor="inlineRadio5">Different</label>
                </div>
                <div className="form-check form-check-inline" style={formStyle}>
                <input className="form-check-input" type="radio" name="inlineRadioOptions5" id="inlineRadio5" value="Both" checked={this.state.five === 'Both'} onChange={this.fiveChange}/>
                <label className="form-check-label" htmlFor="inlineRadio5">Both</label>
                </div>
            </div>
      </div>
      <div className="form-group" >
            <div className="row" style={textStyle}>
              <div className="col">
              <label>Do you want to connect with people in the same school/college as you, different, or both?</label>
              </div>
                <div className="form-check form-check-inline" style={formStyle}>
                  <input className="form-check-input" type="radio" name="inlineRadioOptions6" id="inlineRadio6" value="Same" checked={this.state.six === 'Same'} onChange={this.sixChange}/>
                  <label className="form-check-label" htmlFor="inlineRadio6">Same</label>
                </div>
                <div className="form-check form-check-inline" style={formStyle}>
                <input className="form-check-input" type="radio" name="inlineRadioOptions6" id="inlineRadio6" value="Different" checked={this.state.six === 'Different'} onChange={this.sixChange}/>
                <label className="form-check-label" htmlFor="inlineRadio6">Different</label>
                </div>
                <div className="form-check form-check-inline" style={formStyle}>
                <input className="form-check-input" type="radio" name="inlineRadioOptions6" id="inlineRadio6" value="Both" checked={this.state.six === 'Both'} onChange={this.sixChange}/>
                <label className="form-check-label" htmlFor="inlineRadio2">Both</label>
                </div>
            </div>
      </div>
      <div className="form-group" >
            <div className="row" style={textStyle}>
              <div className="col">
              <label>Do you want to connect with someone who has a car on campus?</label>
              </div>
                <div className="form-check form-check-inline" style={formStyle}>
                  <input className="form-check-input" type="radio" name="inlineRadioOptions7" id="inlineRadio7" value="Yes" checked={this.state.seven === 'Yes'} onChange={this.sevenChange}/>
                  <label className="form-check-label" htmlFor="inlineRadio7">Yes </label>
                </div>
                <div className="form-check form-check-inline" style={formStyle}>
                <input className="form-check-input" type="radio" name="inlineRadioOptions7" id="inlineRadio7" value="No" checked={this.state.seven === 'No'} onChange={this.sevenChange}/>
                <label className="form-check-label" htmlFor="inlineRadio7">No</label>
                </div>
                <div className="form-check form-check-inline" style={formStyle}>
                <input className="form-check-input" type="radio" name="inlineRadioOptions7" id="inlineRadio7" value="Both" checked={this.state.seven === 'Both'} onChange={this.sevenChange}/>
                <label className="form-check-label" htmlFor="inlineRadio7">Both</label>
                </div>
            </div>
      </div> 
      <div className="form-group" >
            <div className="row" style={textStyle}>
              <div className="col">
              <label>Do you want to connect with people who share the same ethnicity?</label>
              </div>
                <div className="form-check form-check-inline" style={formStyle}>
                  <input className="form-check-input" type="radio" name="inlineRadioOptions8" id="inlineRadio8" value="Same" checked={this.state.eight === 'Same'} onChange={this.eightChange}/>
                  <label className="form-check-label" htmlFor="inlineRadio8">Same</label>
                </div>
                <div className="form-check form-check-inline" style={formStyle}>
                <input className="form-check-input" type="radio" name="inlineRadioOptions8" id="inlineRadio8" value="Different" checked={this.state.eight === 'Different'} onChange={this.eightChange}/>
                <label className="form-check-label" htmlFor="inlineRadio8">Different</label>
                </div>
            </div>
      </div>
    <br></br>
    <h2 style={{marginLeft: '2%'}}>Knowledge about the University</h2>
    <br></br>
      <div className="form-group" >
            <div className="row" style={textStyle}>
              <div className="col">
              <label>Do you have any knowledge of the school before you started? If yes please describe below.</label>
              </div>
              <div className="col">
                <textarea type="text" className="form-control" id="openOne" style={inputStyle}/>
              </div>
            </div>
      </div> 
      <div className="form-group" >
            <div className="row" style={textStyle}>
              <div className="col">
              <label>Do you know the aera of where your school is located? If yes please descibe below.</label>
              </div>
              <div className="col">
                <textarea type="text" className="form-control" id="openTwo" style={inputStyle}/>
              </div>
            </div>
      </div> 
      <div className="form-group" >
            <div className="row" style={textStyle}>
              <div className="col">
              <label>Do you have a job(s) on campus? If yes please descibe the position and what you do below.</label>
              </div>
              <div className="col">
                <textarea type="text" className="form-control" id="openThree" style={inputStyle}/>
              </div>
            </div>
      </div> 
      <div className="form-group" >
            <div className="row" style={textStyle}>
              <div className="col">
              <label>Are their resources on campus that you found helpful/not helpful? If yes please descibe the position and what you do below.</label>
              </div>
              <div className="col">
                <textarea type="text" className="form-control" id="openFour" style={inputStyle}/>
              </div>
            </div>
      </div> 
      <div className="form-group" >
            <div className="row" style={textStyle}>
              <div className="col">
              <label>Are you involved with any clubs/organizations on campus? If yes please descibe the position and what you do below.</label>
              </div>
              <div className="col">
                <textarea type="text" className="form-control" id="openFive" style={inputStyle}/>
              </div>
            </div>
      </div>
      
      <br></br>
      <h2 style={{marginLeft: '2%'}}>What are your hobbies</h2>
      <br></br>
      <div className="form-group">
        <div className="row" style={textStyle}>
          <div className="col">
            <div class="form-check">
              <input class="form-check-input" style={formStyle} type="checkbox" name="categories" value={this.state.categories} id="defaultCheck1" onChange={this.handleCheck}/>
              <label class="form-check-label" for="defaultCheck1">Sports</label>
            </div>
          </div>
          <div className="col">
            <div class="form-check">
              <input class="form-check-input" style={formStyle} type="checkbox" value="Dance" id="defaultCheck2"/>
              <label class="form-check-label" for="defaultCheck2">Dance</label>
            </div>
          </div>
          <div className="col">
            <div class="form-check">
              <input class="form-check-input" style={formStyle} type="checkbox" value="Music" id="defaultCheck3"/>
              <label class="form-check-label" for="defaultCheck3">Music</label>
            </div>
          </div>
          <div className="col">
            <div class="form-check">
              <input class="form-check-input" style={formStyle} type="checkbox" value="Art" id="defaultCheck4"/>
              <label class="form-check-label" for="defaultCheck4">Art</label>
            </div>
          </div>
          <div className="col">
            <div class="form-check">
              <input class="form-check-input" style={formStyle} type="checkbox" value="Fashion" id="defaultCheck5"/>
              <label class="form-check-label" for="defaultCheck5">Fashion</label>
            </div>
          </div>
        </div>
      </div> 


      <h2 style={{marginLeft: '2%'}}>What are you hoping to get out of this website?</h2>
      <br></br>
      <div className="form-group">
            <div className="row" style={textStyle}>
              <div className="col">
              <label>Are you looking for someone to help you or are you willing to help people?</label>
              </div>
              <div className="col">
                <textarea type="text" className="form-control" id="openOne" style={inputStyle}/>
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



