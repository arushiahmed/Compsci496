import React from 'react';
import { Link } from 'react-router';

const bodyPage = {
  width: '100%',
	height: '700px',
	margin: '0'

};

const content = 
{
  width: '550px',
  margin: 'auto',
  marginBottom: '5%',
};

const divStyle = {
  width: '100%',
  height: '250px',
  marginTop: '20px',

};

const signUp = {
  height: '$height',
  marginLeft: '25px',
  marginTop: '20px'
};

const loginPage = {
  height: '$height/2',
  marginLeft: '25%',
  marginTop: '20px'
}

const titleName = {
	border: "2px solid black",    
  marginTop: "10px",
  borderRadius: "50%",
  textAlign: "center",
  fontFamily: "cursive", 
  fontSize: "50px",
  height: "350px", 
  width: "350px",
  lineHeight: "350px"
}


export default class Welcome extends React.createClass ({
    getInitialState:function(){
      return {signup:false,login:true}
    },
      switch:function(word)
      {
      let signup,login;
      if(word == "signup"){signup = true;login = false;}
      else{login = true; signup = false;}
      return this.setState({login:login,signup:signup})
      },
      
      
      render:function(){
              return (
                <div style={bodyPage}>
                  <center style={content}>
                  <div className="picture" style={titleName}>
                  Website title
                </div>
              <br></br> <br></br>
                      <div id="buttons">
                        <button id="signupButton" onClick={this.switch.bind(null,"signup")} className="btn btn-dark" style={signUp}>Sign Up</button>
                        <button id="loginButton" onClick={this.switch.bind(null,"login")} className="btn btn-dark" style={loginPage}>Login</button>
                       </div>
                       <br></br><br></br><br></br>
                        {this.state.signup?<Signup/>:null}
                        {this.state.login?<Login />:null}
                  </center>
                  </div>
                  
                )
              }
            })
          {}
  
   
   class Signup extends React.Component {    
    constructor() {
      super();
      this.handleEvent = this.handleEvent.bind(this);
    }
    handleEvent(e){
      e.preventDefault();
      let form = document.forms.user;
      const submitReq = {
        "firstname": form.firstname.value,
        "lastname": form.lastname.value,
        "degree": form.inputDegree.value,
        "school": form.inputSchool.value,
        "email": form.inputEmail.value,
        "major": form.inputMajor.value,
        "year": form.inputYear.value,
        "country": form.inputCountry.value,
        "username": form.inputUsername.value,
        "password": form.inputPassword.value,
        "comfirmPassword": form.comfirmPassword.value
      }
      
      fetch('api/users', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(submitReq),
      })

      .then(res => res.json())
      .then(json => {
        if(json.sucess){
          alert('Failed to create new user.\n Error description ' + json.msg);
        }
        else{
          alert('User Saved');
        }
      });

    }
    render(){
      return (
          <center >
        <form className = "form-group" name="user" onSubmit={this.handleEvent}>
          <div className = "form-group">
          <label for = "name">Name</label>
            <div className = "row">
              <div className="col">
                <input type="name" className = "form-control" id="firstname" placeholder=" First Name"/>
            </div> 
              <div className="col">
              <input  type="name" className = "form-control" id="lastname" placeholder=" Last Name"/>
              </div> 
          </div>              
        </div>
        <br></br>
            <div className = "form-group">  
          <label for = "degree">Undergraduate or Graduate Student</label>
          <input type="school" className = "form-control" id="inputDegree" placeholder="School"/>
        </div>
          <br></br>  
        <div className = "form-group">  
          <label for = "school">School</label>
          <input type="school" className = "form-control" id="inputSchool" placeholder="School"/>
        </div>
          <br></br>
          <div className = "form-group">  
            <label for = "inputEmail">School Email</label>
              <input type="email" className = "form-control" id="inputEmail" placeholder="Email"/>
            </div>
            <br></br>
          <div className = "form-group">  
          <label for = "major">Major</label>
          <input type="major" className = "form-control" id="inputMajor" placeholder="Major"/>
        </div>
        <br></br>
        <div className = "form-group">  
          <label for = "year">Year</label>
          <input type="year" className = "form-control" id="inputYear" placeholder="Year"/>
        </div>
        <br></br>
        <div className = "form-group">  
          <label for = "country">Country</label>
          <input type="country" className = "form-control" id="inputCountry" placeholder="Country"/>
        </div>
        <br></br>
          <div className = "form-group">  
            <label for = "userName">Username</label>
              <input type="email" className = "form-control" id="inputUsername" placeholder=" Username"/>
            </div>
            <br></br>
        <div className = "form-group">
          <label for = "inputPassword">Password</label>
          <input type="password" className = "form-control" id="inputPassword" placeholder=" Password"/>
        </div>  
        <br></br>
        <div className = "form-group">
          <label for = "inputPassword">Confirm Password</label>
          <input type="password" className= "form-control" id="comfirmPassword"placeholder=" Password"/>
        </div>  
        <br></br>
        <a className="btn btn-dark"role="button"><Link to="/form" style={{ textDecoration: 'none', color: 'white' }} >Sign Up</Link></a>
      </form>
      <br></br><br></br>
    </center>
          );
        }
      }
  
  class Login extends React.Component {
         constructor() {
         super();
         }
         render(){
          return (
                <center >
                    <form >
                    <div className = "form-group">
                      <label for = "inputEmail">Username</label>
                      <input type="email" className = "form-control" id="inputEmail" placeholder=" Username"/>
                    </div>
                    <br></br>
                    <div className = "form-group">
                      <label for = "inputPassword">Password</label>
                      <input type="password" className = "form-control" id="inputPassword" placeholder=" Password"/>
                    </div>  
                    <br></br>
                    <a className="btn btn-dark" role="button"><Link to="/about" style={{ textDecoration: 'none', color: 'white' }}>Login</Link></a>
                  </form>
                  <br></br><br></br>
                </center>
              );
            }
    }