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
    }
    render(){
      return (
          <center >
        <form >
          <div className = "form-group">
          <label for = "inputName">Name</label>
            <div className = "row">
              <div className="col">
                <input type="name" className = "form-control" id="inputName" placeholder=" First Name"/>
            </div> 
              <div className="col">
              <input  type="name" className = "form-control" id="inputName" placeholder=" Last Name"/>
              </div> 
          </div>              
        </div>
        <br></br>
        <div className = "form-group">  
            <label for = "inputEmail">Email</label>
              <input type="email" className = "form-control" id="inputEmail" placeholder="Email"/>
            </div>
            <br></br>
        <div className = "form-group">  
          <label for = "inputEmail">School</label>
          <input type="school" className = "form-control" id="inputschool" placeholder="School"/>
        </div>
          <br></br>
        <div className = "form-group">  
          <label for = "inputEmail">Country</label>
          <input type="country" className = "form-control" id="inputcountry" placeholder="Country"/>
        </div>
        <br></br>
          <div className = "form-group">  
            <label for = "inputEmail">Username</label>
              <input type="email" className = "form-control" id="inputEmail" placeholder=" Username"/>
            </div>
            <br></br>
        <div className = "form-group">
          <label for = "inputPassword">Password</label>
          <input type="password" className = "form-control" id="inputPassword"placeholder=" Password"/>
        </div>  
        <br></br>
        <div className = "form-group">
          <label for = "inputPassword">Confirm Password</label>
          <input type="password" className= "form-control" id="inputPassword"placeholder=" Password"/>
        </div>  
        <a className="btn btn-dark"role="button"><Link to="/question" style={{ textDecoration: 'none', color: 'white' }} >Sign Up</Link></a>
      </form>
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
                    <a className="btn btn-dark" role="button"><Link to="/about" style={{ textDecoration: 'none', color: 'white' }}>Login</Link></a>
                  </form>
                </center>
              );
            }
    }