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

//Checkboxes

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
    this.handleCheck = this.handleCheck.bind(this);
    this.oneChange = this.oneChange.bind(this);
    this.twoChange = this.twoChange.bind(this);
    this.threeChange = this.threeChange.bind(this);
    this.fourChange = this.fourChange.bind(this);
    this.fiveChange = this.fiveChange.bind(this);
    this.sixChange = this.sixChange.bind(this);
    this.sevenChange = this.sevenChange.bind(this);
    this.eightChange = this.eightChange.bind(this);
    
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
        "nine": form.openOnevalue,
        "ten": form.openTwovalue,
        "eleven": form.openThree.value,
        "tweleve": form.openFour.value,
        "thirteen": form.openFive.value,
        "fourteen": form.openSix.value,
        "fifteen": form.openSeven.value,
        "sixteen": form.openEight.value,
        "seventeen": form.openNine.value,
        "eighteen": form.openTen.value
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
                  <input className="form-check-input" type="radio" name="inlineRadioOptions5" id="inlineRadio5" value="Same" checked={this.state.five === 'Same'} onChange={this.fiveChange}/>
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

    <h3 style={{marginLeft: '2%'}}>Knowledge about the University</h3>
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
      <h3 style={{marginLeft: '2%'}}>What are your hobbies</h3>
      <br></br>
      <div className="form-group">
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
  <div className="form-group">
              <div className="row" style={textStyle}>
                <div className="col">
                <label>If there is a hobbie that was not listest above, type your answers here. Please explain more about your hobbies.</label>
                </div>
                <div className="col">
                  <textarea type="text" className="form-control" id="openSix" style={inputStyle}/>
                </div>
              </div>
        </div> 
  <br></br>
      <h3 style={{marginLeft: '2%'}}>What are you hoping to get out of this website?</h3>
      <br></br>
      <div className="form-group">
            <div className="row" style={textStyle}>
              <div className="col">
              <label>Are you looking for someone to help you or are you willing to help people?</label>
              </div>
              <div className="col">
                <textarea type="text" className="form-control" id="openSeven" style={inputStyle}/>
              </div>
            </div>
      </div> 
      <div className="form-group" >
            <div className="row" style={textStyle}>
              <div className="col">
              <label>Are there any challenges you are coping with? If yes, please describe.</label>
              </div>
              <div className="col">
                <textarea type="text" className="form-control" id="openEight" style={inputStyle}/>
              </div>
            </div>            
      </div>
      <div className="form-group" >
            <div className="row" style={textStyle}>
              <div className="col">
              <label>How can someone help you with your challenges? Please descibe.</label>
              </div>
              <div className="col">
                <textarea type="text" className="form-control" id="openNine" style={inputStyle}/>
              </div>
            </div>            
      </div>
      <div className="form-group" >
            <div className="row" style={textStyle}>
              <div className="col">
              <label>How are you able to help someone with their challenges? Please descibe how you can help a person.</label>
              </div>
              <div className="col">
                <textarea type="text" className="form-control" id="openTen" style={inputStyle}/>
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



