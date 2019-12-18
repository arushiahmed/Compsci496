import React from 'react';
import 'isomorphic-fetch';
import { Link } from 'react-router';

const bodyPage = {
  width: '100%',
	height: '100%',
  margin: '0',

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

function validateLogin(first, last, degree, email, password, password2){
  const errors = [];

  if(first.length === 0){
    errors.push(alert("Firstname can't be empty"));
  }

  if(last.length === 0){
    errors.push("Lastname can't be empty");
  }

  if(degree != "Undergraduate" || "Graduate"){
    errors.push("please type either Undergrate or Graduate");
  }

  if (email.split("").filter(x => x === "@").length !== 1) {
    errors.push(alert("Email should contain a @"));
  }
  if (email.indexOf(".edu") === -1) {
    errors.push(alert("Email should contain at least one dot"));
  }
  if (password.length < 6) {
    errors.push(alert("Password should be at least 6 characters long"));
  }

  if(password2.length != password.length){
    errors.push(alert("Password does not match"));
  }

  return errors;

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
                  <h1 style={{marginLeft: '2%', marginTop: '15px',}}>Welcome to Intermingle</h1> 
                  <center style={content}>
                 <br></br> <br></br>
                      <div id="buttons">
                        <button id="signupButton" onClick={this.switch.bind(null,"signup")} className="btn btn-dark" style={signUp}>Sign Up</button>
                        <button id="loginButton" onClick={this.switch.bind(null,"login")} className="btn btn-dark" style={loginPage}>Sign In</button>
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
      this.state ={
        errors: []
      };

      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
      e.preventDefault();

      const first = ReactDOM.findDOMNode(this._firstname).value;
      const last = ReactDOM.findDOMNode(this._lastname).value;
      const degree = ReactDOM.findDOMNode(this._inputDegree).value;
      const email = ReactDOM.findDOMNode(this._inputEmail).value;
      const password = ReactDOM.findDOMNode(this._inputPassword).value;
      const password2 = ReactDOM.findDOMNode(this._comfirmPassword).value;

      const errors = validateLogin(first, last, degree, email, password, password2);
      if(errors.length > 0){
        this.setState({errors});
        return
      }
    }
    render(){
      const {errors} = this.state;
      return (
        <form className ="form-group" name="signup" onSubmit={this.handleSubmit}>
          {errors.map(error => (
          <p key={error}>Error: {error}</p>
        ))}
          <div className="form-group">
          <label>Name</label>
            <div className="row">
              <div className="col">
                <input type="text" className="form-control" id="firstname" ref={firstname => this._firstname = firstname} placeholder="First Name"/>
            </div> 
              <div className="col">
              <input type="text" className="form-control" id="lastname" ref={lastname => this._lastname = lastname} placeholder="Last Name"/>
              </div> 
          </div>              
        </div>
        <br></br>
            <div className="form-group">  
          <label>Undergraduate or Graduate Student</label>
          <input type="text" className="form-control" id="inputDegree" ref={inputDegree => this._inputDegree = inputDegree} placeholder="Degree"/>
        </div>
          <br></br>  
        <div className="form-group">  
          <label>School</label>
          <input type="text" className="form-control" id="inputSchool" placeholder="School"/>
        </div>
          <br></br>
          <div className="form-group">  
            <label>School Email</label>
              <input type="email" className="form-control" id="inputEmail" ref={inputEmail => this._inputEmail = inputEmail} placeholder="Email"/>
            </div>
            <br></br>
          <div className="form-group">  
          <label>Major</label>
          <input type="major" className="form-control" id="inputMajor" placeholder="Major"/>
        </div>
        <br></br>
        <div className="form-group">  
          <label>Year</label>
          <input type="year" className="form-control" id="inputYear" placeholder="Year"/>
        </div>
        <br></br>
        <div className="form-group">  
          <label>Country</label>
          <input type="country" className="form-control" id="inputCountry" placeholder="Country"/>
        </div>
        <br></br>
          <div className="form-group">  
            <label>Username</label>
              <input type="email" className="form-control" id="inputUsername" placeholder="Username"/>
            </div>
            <br></br>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" id="inputPassword" ref={inputPassword => this._inputPassword = inputPassword} placeholder="Password"/>
        </div>  
        <br></br>
        <div className="form-group">
          <label>Confirm Password</label>
          <input type="password" className="form-control" id="comfirmPassword" ref={comfirmPassword => this._comfirmPassword = comfirmPassword}  placeholder="Confirm Password"/>
        </div>  
        <br></br>
        <button className="btn btn-dark"type="submit"><Link to="/form" style={{ textDecoration: 'none', color: 'white' }}>Sign Up</Link></button>
      </form>

          );
        }
      }
  
class Login extends React.Component {
         constructor() {
         super();
         }
         render(){
          return (
               <form className="form-group" name="login">
                    <div className="form-group">
                      <label>Username</label>
                      <input className="form-control" id="inputName" placeholder="Username"/>
                    </div>
                    <br></br>
                    <div className ="form-group">
                      <label>Password</label>
                      <input className="form-control" id="inputPassword" placeholder="Password"/>
                    </div>  
                    <br></br>
                    <button className="btn btn-dark" role="button"><Link to="/about" style={{ textDecoration: 'none', color: 'white' }}>Sign In</Link></button>
                </form>
                           
              );
            }
    }