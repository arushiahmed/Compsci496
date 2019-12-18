import React from 'react';
import 'isomorphic-fetch';
import { Link } from 'react-router';

import SearchBar from './SearchBar.jsx';
import NewSurvey from './NewSurvey.jsx';
import Survey from './Survey.jsx';

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

export default class Form extends React.createClass ({
    getInitialState:function(){
      return {signup:true,login:false}
    },
      switch:function(word)
      {
      let signup,login;
      if(word == "signup"){signup = false;login = true;}
      else{login = false; signup = true;}
      return this.setState({login:login,signup:signup})
      },
      
      
      render:function(){
              return (
                <div style={bodyPage}>
                    <SearchBar></SearchBar>
                  <center style={content}>
                 <br></br> <br></br>
                      <div id="buttons">
                        <button id="signupButton" onClick={this.switch.bind(null,"signup")} className="btn btn-dark" style={signUp}>Old</button>
                        <button id="loginButton" onClick={this.switch.bind(null,"login")} className="btn btn-dark" style={loginPage}>New</button>
                       </div>
                       <br></br><br></br><br></br>
                        {this.state.signup?<New/>:null}
                        {this.state.login?<Old/>:null}
                  </center>
              </div>
                  
                )
              }
            })
          {}
  
   
class New extends React.Component {    
    constructor() {
      super();
    }
    render(){
      return (
        <div>
        <h1 style={{marginLeft: '2%'}}>New</h1>
        <br></br><br></br> 
      </div>
              

          );
        }
      }
  
class Old extends React.Component {
         constructor() {
         super();
         }
         render(){
          return (
            <div>
            <h1 style={{marginLeft: '2%'}}>Old</h1>
            <br></br><br></br>   
          </div>
                           
              );
            }
    }