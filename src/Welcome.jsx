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
                  <h1 style={{marginLeft: '2%', marginTop: '15px',}}>Website title</h1> 
                  <center style={content}>
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
    }
    render(){
      return (
        <form className ="form-group" name="signup">
          <div className="form-group">
          <label>Name</label>
            <div className="row">
              <div className="col">
                <input type="name" className="form-control" id="firstname" placeholder="First Name"/>
            </div> 
              <div className="col">
              <input type="name" className="form-control" id="lastname" placeholder="Last Name"/>
              </div> 
          </div>              
        </div>
        <br></br>
            <div className="form-group">  
          <label>Undergraduate or Graduate Student</label>
          <input type="degree" className="form-control" id="inputDegree" placeholder="Degree"/>
        </div>
          <br></br>  
        <div className="form-group">  
          <label>School</label>
          <input type="school" className="form-control" id="inputSchool" placeholder="School"/>
        </div>
          <br></br>
          <div className="form-group">  
            <label>School Email</label>
              <input type="email" className="form-control" id="inputEmail" placeholder="Email"/>
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
          <input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
        </div>  
        <br></br>
        <div className="form-group">
          <label>Confirm Password</label>
          <input type="password" className="form-control" id="comfirmPassword"placeholder="Confirm Password"/>
        </div>  
        <br></br>
        <button className="btn btn-dark"role="button"><Link to="/form" style={{ textDecoration: 'none', color: 'white' }} >Sign Up</Link></button>
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
                    <button className="btn btn-dark" role="button"><Link to="/about" style={{ textDecoration: 'none', color: 'white' }}>Login</Link></button>
                </form>
                           
              );
            }
    }