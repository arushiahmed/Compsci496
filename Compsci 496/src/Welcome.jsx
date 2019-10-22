import React from 'react';
import { Link } from 'react-router';

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
                <div>
                  <center>
                      <div id="buttons">
                        <button id="signupButton" className="btn btn-dark" onClick={this.switch.bind(null,"signup")} className={this.state.signup}>Sign Up</button>
                        <button id="loginButton" className="btn btn-dark" onClick={this.switch.bind(null,"login")} className={this.state.login}>Login</button>
                       </div>
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
            <center>
        <form>
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
      <div className = "form-group">  
           <label for = "inputEmail">Email</label>
            <input type="email" className = "form-control" id="inputEmail" placeholder="Email"/>
          </div>
      <div className = "form-group">  
        <label for = "inputEmail">School</label>
        <input type="school" className = "form-control" id="inputschool" placeholder="School"/>
      </div>
      <div class="form-group">
      <label for="exampleFormControlSelect1">What Type of Student Are You</label>
      <select class="form-control" id="exampleFormControlSelect1">
        <option>International</option>
        <option>United States</option>
        </select>
        </div>
  
      <div className = "form-group">  
        <label for = "inputEmail">Country</label>
        <input type="country" className = "form-control" id="inputcountry" placeholder="Country"/>
      </div>
  
        <div className = "form-group">  
           <label for = "inputEmail">Username</label>
            <input type="email" className = "form-control" id="inputEmail" placeholder=" Username"/>
          </div>
      <div className = "form-group">
        <label for = "inputPassword">Password</label>
        <input type="password" className = "form-control" id="inputPassword"placeholder=" Password"/>
      </div>  
      <div className = "form-group">
        <label for = "inputPassword">Confirm Password</label>
        <input type="password" className= "form-control" id="inputPassword"placeholder=" Password"/>
      </div>  
      <a className="btn btn-dark"role="button"><Link to="/home" style={{ textDecoration: 'none', color: 'white' }} >Sign Up</Link></a>
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
                <center>
                    <form>
                    <div className = "form-group">
                      <label for = "inputEmail">Username</label>
                      <input type="email" className = "form-control" id="inputEmail" placeholder=" Username"/>
                    </div>
                    <div className = "form-group">
                      <label for = "inputPassword">Password</label>
                      <input type="password" className = "form-control" id="inputPassword" placeholder=" Password"/>
                    </div>  
                    <a className="btn btn-dark" role="button"><Link to="/home" style={{ textDecoration: 'none', color: 'white' }}>Login</Link></a>
                  </form>
                  </center>
              );
            }
    }