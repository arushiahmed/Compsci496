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
  marginRight: '5%', 
}

const formStyle = {
  marginLeft: '2%',
  marginRight: '2%',
  fontSize: '20px',
  cursor: 'pointer',
}

//Checkboxes

 export default class NewSurvey extends React.Component {
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
      thirteen: '',
      categories: [
        {name: 'Sports', value: 'Sports'}, 
        {name: 'Dance', value: 'Dance'}, 
        {name: 'Music', value: 'Music'}, 
        {name: 'Art', value: 'Art'}, 
        {name: 'Fashion', value: 'Fashion'}, 
        {name: 'Make up', value: 'Make up'},
        {name: 'Traveling', value: 'Traveling'}, 
        {name: 'Hiking', value: 'Hiking'}, 
        {name: 'Gardening', value: 'Gardening'}, 
        {name: 'Camping', value: 'Camping'}, 
        {name: 'Video Games', value: 'Video Games'}, 
        {name: 'Photography', value: 'Photography'}, 
        {name: 'Cars', value: 'Cars'}, 
        {name: 'Movies', value: 'Movies'}, 
        {name: 'Books', value: 'Books'},
        {name: 'Volunteer', value: 'Volunteer'}, 
        {name: 'Comedy', value: 'Comedy'}, 
        {name: 'Games', value: 'Games'},
        {name: 'Building', value: 'Building'},
        {name: 'Fishing', value: 'Fishing'},
        {name: 'Theater', value: 'Theater'},
        {name: 'Baking/Cooking', value: 'Baking/Cooking'}, 
        {name: 'Writing', value: 'Writing'}, 
        {name: 'Other', value: 'Other'}],
      openOne: ' ',  
      fourteen: '',
      fifteen: '',
      sixteen: '',
      seventeen: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCheck = this.handleCheck.bind(this);
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
    this.elevenChange = this.elevenChange.bind(this);
    this.tweleveChange = this.tweleveChange.bind(this);
    this.thirteenChange = this.thirteenChange.bind(this);
    this.fourteenChange = this.fourteenChange.bind(this);
    this.fifteenChange = this.fifteenChange.bind(this); 
    this.sixteenChange = this.sixteenChange.bind(this);
    this.seventeenChange = this.seventeenChange.bind(this);
  }  

handleCheck(e){
    const categories = this.state.categories
    let index

    if(e.target.checked){
      categories.push(+e.target.value)
    }
    else{
      index = categories.indexOf(+e.value)
      categories.splice(index, 1)
    }

    this.setState({
      [categories]: e.target.value
    });
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

  elevenChange(e){
    this.setState({eleven: e.target.value});
  }

  tweleveChange(e){
    this.setState({tweleve: e.target.value});
  }

  thirteenChange(e){
    this.setState({thirteen: e.target.value});
  }

  fourteenChange(e){
    this.setState({fourteen: e.target.value});
  }

  fifteenChange(e){
    this.setState({fifteen: e.target.value});
  }

  sixteenChange(e){
    this.setState({sixteen: e.target.value});
  }

  seventeenChange(e){
    this.setState({seventeen: e.target.value});
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
        "eleven": form.inlineRadio11.value,
        "tweleve": form.inlineRadio12.value,
        "thirteen": form.inlineRadio13.value,
        "openOne": form.openOne.value,
        "categories": form.defaultCheck.value,
        "fourteen": form.inlineRadio14.value,
        "fifteen": form.inlineRadio15.value,
        "sixteen": form.inlineRadio16.value,
        "seventeen": form.inlineRadio17.value,
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
          alert('Questions Saved');
          
        }
      });
    }
  render() {
    return (
      <div>
        <SearchBar> </SearchBar>  
        <br></br> 
        <h1 style={{marginLeft: '2%'}}>Survery</h1>
        <br></br><br></br>
      <form className="form-group" name="question" onSubmit={this.handleSubmit}>
      <h3 style={{marginLeft: '2%'}}>1. What are the people you want to connect with?</h3>
      <br></br>
      <div className="form-group">
            <div className="row" style={textStyle}>
              <div className="col">
              <label>1a. Undergraduates or Graduates Students</label>
              </div>
                <div className="form-check form-check-inline" style={formStyle}>
                  <input className="form-check-input" style={{cursor: 'pointer'}} type="radio" name="inlineRadioOptions1" id="inlineRadio1" value="In person" checked={this.state.one === 'In person'} onChange={this.oneChange}/>
                  <label className="form-check-label" htmlFor="inlineRadio1">Undergraduates</label>
                </div>
                <div className="form-check form-check-inline" style={formStyle}>
                <input className="form-check-input" style={{cursor: 'pointer'}}type="radio" name="inlineRadioOptions1" id="inlineRadio1" value="Online" checked={this.state.one === 'Online'} onChange={this.oneChange}/>
                <label className="form-check-label" htmlFor="inlineRadio1">Graduates</label>
                </div>
                <div className="form-check form-check-inline" style={formStyle}>
                <input className="form-check-input" style={{cursor: 'pointer'}} type="radio" name="inlineRadioOptions1" id="inlineRadio1" value="Both" checked={this.state.one === 'Both'} onChange={this.oneChange}/>
                <label className="form-check-label" htmlFor="inlineRadio1">Both</label>
              </div>
            </div>
      </div>
      <div className="form-group">
            <div className="row" style={textStyle}>
              <div className="col">
              <label>1b. Graduating year?</label>
              </div>
                <div className="form-check form-check-inline" style={formStyle}>
                  <input className="form-check-input" style={{cursor: 'pointer'}} type="radio" name="inlineRadioOptions2" id="inlineRadio2" value="Undergraduates" checked={this.state.two === 'Undergraduates'} onChange={this.twoChange}/>
                  <label className="form-check-label" htmlFor="inlineRadio1">Same</label>
                </div>
                <div className="form-check form-check-inline" style={formStyle}>
                <input className="form-check-input" style={{cursor: 'pointer'}} type="radio" name="inlineRadioOptions2" id="inlineRadio2" value="Graduates" checked={this.state.two === 'Graduates'} onChange={this.twoChange}/>
                <label className="form-check-label" htmlFor="inlineRadio2">Different</label>
                </div>
                <div className="form-check form-check-inline" style={formStyle}>
                <input className="form-check-input" style={{cursor: 'pointer'}} type="radio" name="inlineRadioOptions2" id="inlineRadio2" value="Both" checked={this.state.two === 'Both'} onChange={this.twoChange}/>
                <label className="form-check-label" htmlFor="inlineRadio2">Both</label>
                </div>
            </div>
      </div>
      <div className="form-group" >
            <div className="row" style={textStyle}>
              <div className="col">
              <label>1c. Major?</label>
              </div>
                <div className="form-check form-check-inline" style={formStyle}>
                  <input className="form-check-input" style={{cursor: 'pointer'}} type="radio" name="inlineRadioOptions3" id="inlineRadio3" value="Same" checked={this.state.three === 'Same'} onChange={this.threeChange}/>
                  <label className="form-check-label" htmlFor="inlineRadio3">Same</label>
                </div>
                <div className="form-check form-check-inline" style={formStyle}>
                <input className="form-check-input" style={{cursor: 'pointer'}} type="radio" name="inlineRadioOptions3" id="inlineRadio3" value="Different" checked={this.state.three === 'Different'} onChange={this.threeChange}/>
                <label className="form-check-label" htmlFor="inlineRadio3">Different</label>
                </div>
                <div className="form-check form-check-inline" style={formStyle}>
                <input className="form-check-input" style={{cursor: 'pointer'}} type="radio" name="inlineRadioOptions3" id="inlineRadio3" value="Both" checked={this.state.three === 'Both'} onChange={this.threeChange}/>
                <label className="form-check-label" htmlFor="inlineRadio3">Both</label>
                </div>
            </div>
      </div>
      <div className="form-group" >
            <div className="row" style={textStyle}>
              <div className="col">
              <label>1d. The department as your major?</label>
              </div>
                <div className="form-check form-check-inline" style={formStyle}>
                  <input className="form-check-input" style={{cursor: 'pointer'}} type="radio" name="inlineRadioOptions4" id="inlineRadio4" value="Same" checked={this.state.four === 'Same'} onChange={this.fourChange}/>
                  <label className="form-check-label" htmlFor="inlineRadio1">Same</label>
                </div>
                <div className="form-check form-check-inline" style={formStyle}>
                <input className="form-check-input" style={{cursor: 'pointer'}} type="radio" name="inlineRadioOptions4" id="inlineRadio4" value="Different" checked={this.state.four === 'Different'} onChange={this.fourChange}/>
                <label className="form-check-label" htmlFor="inlineRadio4">Different</label>
                </div>
                <div className="form-check form-check-inline" style={formStyle}>
                <input className="form-check-input" style={{cursor: 'pointer'}} type="radio" name="inlineRadioOptions4" id="inlineRadio4" value="Both" checked={this.state.four === 'Both'} onChange={this.fourChange}/>
                <label className="form-check-label" htmlFor="inlineRadio4">Both</label>
                </div>
            </div>
      </div>
      <div className="form-group" >
            <div className="row" style={textStyle}>
              <div className="col">
              <label>1e. Ethnicity?</label>
              </div>
                <div className="form-check form-check-inline" style={formStyle}>
                  <input className="form-check-input" style={{cursor: 'pointer'}} type="radio" name="inlineRadioOptions5" id="inlineRadio5" value="Same" checked={this.state.five === 'Same'} onChange={this.fiveChange}/>
                  <label className="form-check-label" htmlFor="inlineRadio5">Same</label>
                </div>
                <div className="form-check form-check-inline" style={formStyle}>
                <input className="form-check-input" style={{cursor: 'pointer'}} type="radio" name="inlineRadioOptions5" id="inlineRadio5" value="Different" checked={this.state.five === 'Different'} onChange={this.fiveChange}/>
                <label className="form-check-label" htmlFor="inlineRadio5">Different</label>
                </div>
                <div className="form-check form-check-inline" style={formStyle}>
                <input className="form-check-input" style={{cursor: 'pointer'}} type="radio" name="inlineRadioOptions5" id="inlineRadio5" value="Both" checked={this.state.five === 'Both'} onChange={this.fiveChange}/>
                <label className="form-check-label" htmlFor="inlineRadio5">Both</label>
                </div>
            </div>
      </div>
      <div className="form-group" >
            <div className="row" style={textStyle}>
              <div className="col">
              <label>1f. Country?</label>
              </div>
                <div className="form-check form-check-inline" style={formStyle}>
                  <input className="form-check-input" style={{cursor: 'pointer'}} type="radio" name="inlineRadioOptions6" id="inlineRadio6" value="Same" checked={this.state.six === 'Same'} onChange={this.sixChange}/>
                  <label className="form-check-label" htmlFor="inlineRadio6">Same</label>
                </div>
                <div className="form-check form-check-inline" style={formStyle}>
                <input className="form-check-input" style={{cursor: 'pointer'}} type="radio" name="inlineRadioOptions6" id="inlineRadio6" value="Different" checked={this.state.six === 'Different'} onChange={this.sixChange}/>
                <label className="form-check-label" htmlFor="inlineRadio6">Different</label>
                </div>
                <div className="form-check form-check-inline" style={formStyle}>
                <input className="form-check-input" style={{cursor: 'pointer'}} type="radio" name="inlineRadioOptions6" id="inlineRadio6" value="Both" checked={this.state.six === 'Both'} onChange={this.sixChange}/>
                <label className="form-check-label" htmlFor="inlineRadio2">Both</label>
                </div>
            </div>
      </div>
      <div className="form-group" >
            <div className="row" style={textStyle}>
              <div className="col">
              <label>1g. Religion?</label>
              </div>
                <div className="form-check form-check-inline" style={formStyle}>
                  <input className="form-check-input" style={{cursor: 'pointer'}} type="radio" name="inlineRadioOptions7" id="inlineRadio7" value="Yes" checked={this.state.seven === 'Yes'} onChange={this.sevenChange}/>
                  <label className="form-check-label" htmlFor="inlineRadio7">Same</label>
                </div>
                <div className="form-check form-check-inline" style={formStyle}>
                <input className="form-check-input" style={{cursor: 'pointer'}} type="radio" name="inlineRadioOptions7" id="inlineRadio7" value="No" checked={this.state.seven === 'No'} onChange={this.sevenChange}/>
                <label className="form-check-label" htmlFor="inlineRadio7">Different</label>
                </div>
                <div className="form-check form-check-inline" style={formStyle}>
                <input className="form-check-input" style={{cursor: 'pointer'}} type="radio" name="inlineRadioOptions7" id="inlineRadio7" value="Both" checked={this.state.seven === 'Both'} onChange={this.sevenChange}/>
                <label className="form-check-label" htmlFor="inlineRadio7">Both</label>
                </div>
            </div>
      </div> 
    <br></br>

    <h3 style={{marginLeft: '2%'}}>2. How much do you know about your campus and the aera?</h3>
    <br></br>
    <div className="form-group" >
            <div className="row" style={textStyle}>
              <div className="col">
              <label>2a. I know the campus of my school?</label>
              </div>
                <div className="form-check form-check-inline" style={formStyle}>
                  <input className="form-check-input" style={{cursor: 'pointer'}} type="radio" name="inlineRadioOptions8" id="inlineRadio8" value="Very Well" checked={this.state.eight === 'Same'} onChange={this.eightChange}/>
                  <label className="form-check-label" htmlFor="inlineRadio8">Very Well</label>
                </div>
                <div className="form-check form-check-inline" style={formStyle}>
                  <input className="form-check-input" style={{cursor: 'pointer'}} type="radio" name="inlineRadioOptions8" id="inlineRadio8" value="Well" checked={this.state.eight === 'Well'} onChange={this.eightChange}/>
                  <label className="form-check-label" htmlFor="inlineRadio8">Well</label>
                </div>
                <div className="form-check form-check-inline" style={formStyle}>
                  <input className="form-check-input" style={{cursor: 'pointer'}} type="radio" name="inlineRadioOptions8" id="inlineRadio8" value="In The Middle" checked={this.state.eight === 'In The Middle'} onChange={this.eightChange}/>
                  <label className="form-check-label" htmlFor="inlineRadio8">In The Middle</label>
                </div>
                <div className="form-check form-check-inline" style={formStyle}>
                  <input className="form-check-input" style={{cursor: 'pointer'}} type="radio" name="inlineRadioOptions8" id="inlineRadio8" value="Very Little" checked={this.state.eight === 'Very Little'} onChange={this.eightChange}/>
                  <label className="form-check-label" htmlFor="inlineRadio8">Very Little</label>
                </div>
                <div className="form-check form-check-inline" style={formStyle}>
                  <input className="form-check-input" style={{cursor: 'pointer'}} type="radio" name="inlineRadioOptions8" id="inlineRadio8" value="None" checked={this.state.eight === 'None'} onChange={this.eightChange}/>
                  <label className="form-check-label" htmlFor="inlineRadio8">None</label>
                </div>
            </div>
      </div>
      <div className="form-group" >
            <div className="row" style={textStyle}>
              <div className="col">
              <label>2b. I know the aera outside the campus?</label>
              </div>
                <div className="form-check form-check-inline" style={formStyle}>
                  <input className="form-check-input" style={{cursor: 'pointer'}} type="radio" name="inlineRadioOptions9" id="inlineRadio9" value="Very Well" checked={this.state.nine === 'Same'} onChange={this.nineChange}/>
                  <label className="form-check-label" htmlFor="inlineRadio8">Very Well</label>
                </div>
                <div className="form-check form-check-inline" style={formStyle}>
                  <input className="form-check-input" style={{cursor: 'pointer'}} type="radio" name="inlineRadioOptions9" id="inlineRadio9" value="Well" checked={this.state.nine === 'Well'} onChange={this.nineChange}/>
                  <label className="form-check-label" htmlFor="inlineRadio8">Well</label>
                </div>
                <div className="form-check form-check-inline" style={formStyle}>
                  <input className="form-check-input" style={{cursor: 'pointer'}} type="radio" name="inlineRadioOptions9" id="inlineRadio9" value="In The Middle" checked={this.state.nine === 'In The Middle'} onChange={this.nineChange}/>
                  <label className="form-check-label" htmlFor="inlineRadio8">In The Middle</label>
                </div>
                <div className="form-check form-check-inline" style={formStyle}>
                  <input className="form-check-input" style={{cursor: 'pointer'}} type="radio" name="inlineRadioOptions9" id="inlineRadio9" value="Very Little" checked={this.state.nine === 'Very Little'} onChange={this.nineChange}/>
                  <label className="form-check-label" htmlFor="inlineRadio8">Very Little</label>
                </div>
                <div className="form-check form-check-inline" style={formStyle}>
                  <input className="form-check-input" style={{cursor: 'pointer'}} type="radio" name="inlineRadioOptions9" id="inlineRadio9" value="None" checked={this.state.nine === 'None'} onChange={this.nineChange}/>
                  <label className="form-check-label" htmlFor="inlineRadio8">None</label>
                </div>
            </div>
      </div>
      <div className="form-group" >
            <div className="row" style={textStyle}>
              <div className="col">
              <label>2c. I know lots of places to live off campus?</label>
              </div>
                <div className="form-check form-check-inline" style={formStyle}>
                  <input className="form-check-input" style={{cursor: 'pointer'}} type="radio" name="inlineRadioOptions10" id="inlineRadio10" value="Yes" checked={this.state.ten === 'Yes'} onChange={this.tenChange}/>
                  <label className="form-check-label" htmlFor="inlineRadio8">Yes</label>
                </div>
                <div className="form-check form-check-inline" style={formStyle}>
                  <input className="form-check-input" style={{cursor: 'pointer'}} type="radio" name="inlineRadioOptions10" id="inlineRadio10" value="No" checked={this.state.ten === 'No'} onChange={this.tenChange}/>
                  <label className="form-check-label" htmlFor="inlineRadio8">No</label>
                </div>
            </div>
      </div>
      <div className="form-group" >
            <div className="row" style={textStyle}>
              <div className="col">
              <label>2d. I have a job on campus?</label>
              </div>
                <div className="form-check form-check-inline" style={formStyle}>
                  <input className="form-check-input" style={{cursor: 'pointer'}} type="radio" name="inlineRadioOptions11" id="inlineRadio11" value="Yes" checked={this.state.eleven === 'Yes'} onChange={this.elevenChange}/>
                  <label className="form-check-label" htmlFor="inlineRadio8">Yes</label>
                </div>
                <div className="form-check form-check-inline" style={formStyle}>
                  <input className="form-check-input" style={{cursor: 'pointer'}} type="radio" name="inlineRadioOptions11" id="inlineRadio11" value="No" checked={this.state.eleven === 'No'} onChange={this.elevenChange}/>
                  <label className="form-check-label" htmlFor="inlineRadio8">No</label>
                </div>
            </div>
      </div>
      <div className="form-group" >
            <div className="row" style={textStyle}>
              <div className="col">
              <label>2e. I know useful resources on campus?</label>
              </div>
                <div className="form-check form-check-inline" style={formStyle}>
                  <input className="form-check-input" style={{cursor: 'pointer'}} type="radio" name="inlineRadioOptions12" id="inlineRadio12" value="Yes" checked={this.state.tweleve === 'Yes'} onChange={this.tweleveChange}/>
                  <label className="form-check-label" htmlFor="inlineRadio8">Yes</label>
                </div>
                <div className="form-check form-check-inline" style={formStyle}>
                  <input className="form-check-input" style={{cursor: 'pointer'}} type="radio" name="inlineRadioOptions12" id="inlineRadio12" value="No" checked={this.state.tweleve === 'No'} onChange={this.tweleveChange}/>
                  <label className="form-check-label" htmlFor="inlineRadio8">No</label>
                </div>
            </div>
      </div>
      <div className="form-group" >
            <div className="row" style={textStyle}>
              <div className="col">
              <label>2f. I am involved with clubs/organization on campus?</label>
              </div>
                <div className="form-check form-check-inline" style={formStyle}>
                  <input className="form-check-input" style={{cursor: 'pointer'}} type="radio" name="inlineRadioOptions13" id="inlineRadio13" value="Yes" checked={this.state.thirteen === 'Yes'} onChange={this.thirteenChange}/>
                  <label className="form-check-label" htmlFor="inlineRadio8">Yes</label>
                </div>
                <div className="form-check form-check-inline" style={formStyle}>
                  <input className="form-check-input" style={{cursor: 'pointer'}} type="radio" name="inlineRadioOptions13" id="inlineRadio13" value="No" checked={this.state.thirteen === 'No'} onChange={this.thirteenChange}/>
                  <label className="form-check-label" htmlFor="inlineRadio8">No</label>
                </div>
            </div>
      </div>
      <br></br>
      <h3 style={{marginLeft: '2%'}}>3. What are your hobbies</h3>
      <br></br>
      <div className="form-group">
        <div className="col" style={textStyle}>
                <label>3a. Select all hobbies that apply to you.</label>
        </div>
      </div>
      <div className="form-group" id="hobbies">
        <div className="row" style={textStyle}>
          <div className="col">
            <div class="form-check">
              <input class="form-check-input" style={formStyle} type="checkbox" id="defaultCheck" checked={this.state.categories[0].false} name={this.state.categories[0].name} value={this.state.categories[0].value} onChange={this.setCategory}/>
              <label class="form-check-label" for="defaultCheck">Sports</label>
            </div>
          </div>
          <div className="col">
            <div class="form-check">
              <input class="form-check-input" style={formStyle} type="checkbox" id="defaultCheck1" checked={this.state.categories[1].false} name={this.state.categories[1].name} value={this.state.categories[1].value} onChange={this.setCategory}/>
              <label class="form-check-label" for="defaultCheck1">Dance</label>
            </div>
          </div>
          <div className="col">
            <div class="form-check">
              <input class="form-check-input" style={formStyle} type="checkbox" id="defaultCheck2" checked={this.state.categories[2].false} name={this.state.categories[2].name} value={this.state.categories[2].value} onChange={this.setCategory}/>
              <label class="form-check-label" for="defaultCheck2">Music</label>
            </div>
          </div>
          <div className="col">
            <div class="form-check">
              <input class="form-check-input" style={formStyle} type="checkbox" id="defaultCheck3" checked={this.state.categories[3].false} name={this.state.categories[3].name} value={this.state.categories[3].value} onChange={this.setCategory}/>
              <label class="form-check-label" for="defaultCheck3">Art</label>
            </div>
          </div>
          <div className="col">
            <div class="form-check">
              <input class="form-check-input" style={formStyle} type="checkbox" id="defaultCheck4" checked={this.state.categories[4].false} name={this.state.categories[4].name} value={this.state.categories[4].value} onChange={this.setCategory}/>
              <label class="form-check-label" for="defaultCheck4">Fashion</label>
            </div>
          </div>
          <div className="col">
            <div class="form-check">
              <input class="form-check-input" style={formStyle} type="checkbox" id="defaultCheck5" checked={this.state.categories[5].false} name={this.state.categories[5].name} value={this.state.categories[5].value} onChange={this.setCategory}/>
              <label class="form-check-label" for="defaultCheck5">Make up</label>
            </div>
          </div>
        </div>
        <div className="row" style={textStyle}>
          <div className="col">
            <div class="form-check">
              <input class="form-check-input" style={formStyle} type="checkbox" id="defaultCheck6" checked={this.state.categories[6].false} name={this.state.categories[6].name} value={this.state.categories[6].value} onChange={this.setCategory}/>
              <label class="form-check-label" for="defaultCheck6">Traveling</label>
            </div>
          </div>
          <div className="col">
            <div class="form-check">
              <input class="form-check-input" style={formStyle} type="checkbox" id="defaultCheck7" checked={this.state.categories[7].false} name={this.state.categories[7].name} value={this.state.categories[7].value} onChange={this.setCategory}/>
              <label class="form-check-label" for="defaultCheck7">Hiking</label>
            </div>
          </div>
          <div className="col">
            <div class="form-check">
              <input class="form-check-input" style={formStyle} type="checkbox" id="defaultCheck8" checked={this.state.categories[8].false} name={this.state.categories[8].name} value={this.state.categories[8].value} onChange={this.setCategory}/>
              <label class="form-check-label" for="defaultCheck8">Gardening</label>
            </div>
          </div>
          <div className="col">
            <div class="form-check">
              <input class="form-check-input" style={formStyle} type="checkbox" id="defaultCheck9" checked={this.state.categories[9].false} name={this.state.categories[9].name} value={this.state.categories[9].value} onChange={this.setCategory}/>
              <label class="form-check-label" for="defaultCheck9">Camping</label>
            </div>
          </div>
          <div className="col">
            <div class="form-check">
              <input class="form-check-input" style={formStyle} type="checkbox" id="defaultCheck10" checked={this.state.categories[10].false} name={this.state.categories[10].name} value={this.state.categories[10].value} onChange={this.setCategory}/>
              <label class="form-check-label" for="defaultCheck9">Video Games</label>
            </div>
          </div>
        <div className="col">
            <div class="form-check">
              <input class="form-check-input" style={formStyle} type="checkbox" id="defaultCheck11" checked={this.state.categories[11].false} name={this.state.categories[11].name} value={this.state.categories[11].value} onChange={this.setCategory}/>
              <label class="form-check-label" for="defaultCheck11">Photography</label>
            </div>
          </div>
        </div>
        <div className="row" style={textStyle}>
        <div className="col">
            <div class="form-check">
              <input class="form-check-input" style={formStyle} type="checkbox" id="defaultCheck12" checked={this.state.categories[12].false} name={this.state.categories[12].name} value={this.state.categories[12].value} onChange={this.setCategory}/>
              <label class="form-check-label" for="defaultCheck12">Cars</label>
            </div>
          </div>
          <div className="col">
            <div class="form-check">
              <input class="form-check-input" style={formStyle} type="checkbox" id="defaultCheck13" checked={this.state.categories[13].false} name={this.state.categories[13].name} value={this.state.categories[13].value} onChange={this.setCategory}/>
              <label class="form-check-label" for="defaultCheck13">Movies</label>
            </div>
          </div>
          <div className="col">
            <div class="form-check">
              <input class="form-check-input" style={formStyle} type="checkbox" id="defaultCheck14" checked={this.state.categories[14].false} name={this.state.categories[14].name} value={this.state.categories[14].value} onChange={this.setCategory}/>
              <label class="form-check-label" for="defaultCheck14">Books</label>
            </div>
          </div>
          <div className="col">
            <div class="form-check">
              <input class="form-check-input" style={formStyle} type="checkbox" id="defaultCheck15" checked={this.state.categories[15].false} name={this.state.categories[15].name} value={this.state.categories[15].value} onChange={this.setCategory}/>
              <label class="form-check-label" for="defaultCheck11">Volunteer</label>
            </div>
          </div>
          <div className="col">
            <div class="form-check">
              <input class="form-check-input" style={formStyle} type="checkbox" id="defaultCheck16" checked={this.state.categories[16].false} name={this.state.categories[16].name} value={this.state.categories[16].value} onChange={this.setCategory}/>
              <label class="form-check-label" for="defaultCheck16">Comedy</label>
            </div>
          </div>
          <div className="col">
            <div class="form-check">
              <input class="form-check-input" style={formStyle} type="checkbox" id="defaultCheck17" checked={this.state.categories[17].false} name={this.state.categories[17].name} value={this.state.categories[17].value} onChange={this.setCategory}/>
              <label class="form-check-label" for="defaultCheck17">Games</label>
            </div>
      </div> 
      </div>
      <div className="row" style={textStyle}>
      <div className="col">
            <div class="form-check">
              <input class="form-check-input" style={formStyle} type="checkbox" id="defaultCheck18" checked={this.state.categories[18].false} name={this.state.categories[18].name} value={this.state.categories[18].value} onChange={this.setCategory}/>
              <label class="form-check-label" for="defaultCheck18">Building</label>
            </div>
      </div> 
      <div className="col">
            <div class="form-check">
              <input class="form-check-input" style={formStyle} type="checkbox" id="defaultCheck19" checked={this.state.categories[19].false} name={this.state.categories[19].name} value={this.state.categories[19].value} onChange={this.setCategory}/>
              <label class="form-check-label" for="defaultCheck19">Fishing</label>
            </div>
      </div> 
      <div className="col">
            <div class="form-check">
              <input class="form-check-input" style={formStyle} type="checkbox" id="defaultCheck20" checked={this.state.categories[20].false} name={this.state.categories[20].name} value={this.state.categories[20].value} onChange={this.setCategory}/>
              <label class="form-check-label" for="defaultCheck20">Theater</label>
            </div>
      </div> 
      <div className="col">
            <div class="form-check">
              <input class="form-check-input" style={formStyle} type="checkbox" id="defaultCheck21" checked={this.state.categories[21].false} name={this.state.categories[21].name} value={this.state.categories[21].value} onChange={this.setCategory}/>
              <label class="form-check-label" for="defaultCheck21">Baking/Cooking</label>
            </div>
      </div> 
      <div className="col">
            <div class="form-check">
              <input class="form-check-input" style={formStyle} type="checkbox" id="defaultCheck22" checked={this.state.categories[22].false} name={this.state.categories[22].name} value={this.state.categories[22].value} onChange={this.setCategory}/>
              <label class="form-check-label" for="defaultCheck22">Writing</label>
            </div>
      </div> 
      <div className="col">
            <div class="form-check">
              <input class="form-check-input" style={formStyle} type="checkbox" id="defaultCheck23" checked={this.state.categories[23].false} name={this.state.categories[23].name} value={this.state.categories[23].value} onChange={this.setCategory}/>
              <label class="form-check-label" for="defaultCheck23">Other</label>
            </div>
      </div> 
      </div>
  </div>
  <br></br>
  <div className="form-group">
      <div className="row" style={textStyle}>
          <div className="col">
            <label>3b. If there is a hobbie that was not listest above, please type your answers here and  more details about your choosen hobbies.</label>
          </div>
        <div className="col">
          <textarea type="text" className="form-control" id="openOne" style={inputStyle}/>
        </div>
      </div>
  </div> 
  <br></br>
      <h3 style={{marginLeft: '2%'}}>4. What are you hoping to get out of this website?</h3>
      <br></br>
      <div className="form-group" >
            <div className="row" style={textStyle}>
              <div className="col">
              <label>4a. Getting help or receiving help?</label>
              </div>
                <div className="form-check form-check-inline" style={formStyle}>
                  <input className="form-check-input" style={{cursor: 'pointer'}} type="radio" name="inlineRadioOptions14" id="inlineRadio14" value="Getting Help" checked={this.state.fourteen === 'Getting Help'} onChange={this.fourteenChange}/>
                  <label className="form-check-label" htmlFor="inlineRadio7">Getting Help</label>
                </div>
                <div className="form-check form-check-inline" style={formStyle}>
                <input className="form-check-input" style={{cursor: 'pointer'}} type="radio" name="inlineRadioOptions14" id="inlineRadio14" value="Receiving Help" checked={this.state.fourteen === 'Receiving Help'} onChange={this.fourteenChange}/>
                <label className="form-check-label" htmlFor="inlineRadio7">Receiving Help</label>
                </div>
                <div className="form-check form-check-inline" style={formStyle}>
                <input className="form-check-input" style={{cursor: 'pointer'}} type="radio" name="inlineRadioOptions14" id="inlineRadio14" value="Both" checked={this.state.fourteen === 'Both'} onChange={this.fourteenChange}/>
                <label className="form-check-label" htmlFor="inlineRadio7">Both</label>
                </div>
            </div>
      </div> 
      <div className="form-group" >
            <div className="row" style={textStyle}>
              <div className="col">
              <label>4b. Someone that has a car?</label>
              </div>
                <div className="form-check form-check-inline" style={formStyle}>
                  <input className="form-check-input" style={{cursor: 'pointer'}} type="radio" name="inlineRadioOptions15" id="inlineRadio15" value="Yes" checked={this.state.fifteen=== 'Yes'} onChange={this.fifteenChange}/>
                  <label className="form-check-label" htmlFor="inlineRadio7">Yes</label>
                </div>
                <div className="form-check form-check-inline" style={formStyle}>
                <input className="form-check-input" style={{cursor: 'pointer'}} type="radio" name="inlineRadioOptions15" id="inlineRadio15" value="No" checked={this.state.fifteen === 'No'} onChange={this.fifteenChange}/>
                <label className="form-check-label" htmlFor="inlineRadio7">No</label>
                </div>
                <div className="form-check form-check-inline" style={formStyle}>
                <input className="form-check-input" style={{cursor: 'pointer'}} type="radio" name="inlineRadioOptions15" id="inlineRadio15" value="Both" checked={this.state.fifteen === 'Both'} onChange={this.fifteenChange}/>
                <label className="form-check-label" htmlFor="inlineRadio7">Both</label>
                </div>
            </div>
      </div>
      <div className="form-group" >
            <div className="row" style={textStyle}>
              <div className="col">
              <label>4c. A guide around the city/campus?</label>
              </div>
                <div className="form-check form-check-inline" style={formStyle}>
                  <input className="form-check-input" style={{cursor: 'pointer'}} type="radio" name="inlineRadioOptions16" id="inlineRadio16" value="Yes" checked={this.state.sixteen === 'Yes'} onChange={this.sixteenChange}/>
                  <label className="form-check-label" htmlFor="inlineRadio7">Yes</label>
                </div>
                <div className="form-check form-check-inline" style={formStyle}>
                <input className="form-check-input" style={{cursor: 'pointer'}} type="radio" name="inlineRadioOptions16" id="inlineRadio16" value="No" checked={this.state.sixteen === 'No'} onChange={this.sixteenChange}/>
                <label className="form-check-label" htmlFor="inlineRadio7">No</label>
                </div>
                <div className="form-check form-check-inline" style={formStyle}>
                <input className="form-check-input" style={{cursor: 'pointer'}} type="radio" name="inlineRadioOptions16" id="inlineRadio16" value="Both" checked={this.state.sixteen === 'Both'} onChange={this.sixteenChange}/>
                <label className="form-check-label" htmlFor="inlineRadio7">Both</label>
                </div>
            </div>
      </div> 
      <div className="form-group" >
            <div className="row" style={textStyle}>
              <div className="col">
              <label>4d. Just for fun?</label>
              </div>
                <div className="form-check form-check-inline" style={formStyle}>
                  <input className="form-check-input" style={{cursor: 'pointer'}} type="radio" name="inlineRadioOptions17" id="inlineRadio17" value="Yes" checked={this.state.seventeen === 'Yes'} onChange={this.seventeenChange}/>
                  <label className="form-check-label" htmlFor="inlineRadio7">Yes</label>
                </div>
                <div className="form-check form-check-inline" style={formStyle}>
                <input className="form-check-input" style={{cursor: 'pointer'}} type="radio" name="inlineRadioOptions17" id="inlineRadio17" value="No" checked={this.state.seventeen === 'No'} onChange={this.seventeenChange}/>
                <label className="form-check-label" htmlFor="inlineRadio7">No</label>
                </div>
            </div>
      </div>  
      <br></br>
      <center> 
        <div className = "row">
              <div className="col">
               <button className="btn btn-dark" type="submit" value="Submit">Save</button>
              </div>
          </div>   
      </center>
    </form>
    <center> 
        <div className = "row">
              <div className="col">
               <button className="btn btn-dark" type="submit" ><Link to="/connect" style={{ textDecoration: 'none', color: 'white' }} >Find Friends</Link></button>
              </div>
          </div>   
          </center>

          <br></br><br></br>
          </div>
    );
  }
}
