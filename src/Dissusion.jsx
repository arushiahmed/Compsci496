import React from 'react';
import 'isomorphic-fetch';
import { Link } from 'react-router';

import Profile from './Profile.jsx';
import IssueFilter from './IssueFilter.jsx';
import SearchBar from './SearchBar.jsx';

export default class Welcome extends React.createClass ({
  getInitialState:function(){
    return {housing:false,ride:false,food:false, homesickness:false, popular:true}
  },
    switch:function(word)
    {
    let popular, housing,ride,food,homesickness;
    if(word == "housing"){housing = true;ride = false;food=false; homesickness=false; popular=false}
    else if(word =="ride"){ride = true;housing = false;food=false; homesickness=false; popular=false}
    else if(word == "food"){food=true;ride = false;housing = false;homesickness=false; popular=false}
    else if(word == "homesickness"){homesickness=true;food=false;ride = false;housing = false;popular=false}
    else{popular=true;homesickness=false;food=false;ride= false;housing = false;}
    return this.setState({popular:popular,housing:housing,ride:ride,food:food,homesickness:homesickness})
    },
    
    render:function(){
            return (
              <div>
                  <SearchBar></SearchBar>
                  <h1>Discussion App</h1>
                    <div id="buttons">
                      <button id="popularButton"onClick={this.switch.bind(null,"popular")} className={this.state.popular}>Popular</button>
                      <button id="housingButton"onClick={this.switch.bind(null,"housing")} className={this.state.housing}>Housing</button>
                      <button id="transportationButton"onClick={this.switch.bind(null,"ride")} className={this.state.ride}>Transportation</button>
                      <button id="foodButton"onClick={this.switch.bind(null,"food")} className={this.state.food}>Food</button>
                      <button id="homesicknessButton"onClick={this.switch.bind(null,"homesickness")} className={this.state.homesickness}>Home Sickness</button>
                     </div>
                      {this.state.popular?<Popular/>:null}
                      {this.state.housing?<Housing />:null}
                      {this.state.ride?<Transportation />:null}
                      {this.state.food?<Food />:null}
                      {this.state.homesickness?<HomeSickness />:null}
                </div>
              )
            }
          })
          {}

class Popular extends React.Component {
  constructor() {
  super();
  }
  render(){
     return (
       <center>
         <h1>Popular</h1>
      <form>
      <div class="form-group">
      <div class="mb-3">
        <label for="validationTextarea">Textarea</label>
        <br></br>
        <textarea class="form-control is-invalid" id="validationTextarea" placeholder="Required example textarea" required></textarea>
        </div>
      <a className="btn btn-dark" href="/" role="button">Submit</a>
      </div>
    </form>    
    </center>  
      );
    }
  }

  class Housing extends React.Component {
    constructor() {
    super();
    }
    render(){
       return (
                     
    
          <h1>Housing</h1>
       
        );
      }
    }

    class Transportation extends React.Component {
      constructor() {
      super();
      }
      render(){
         return (
                       
   
             <h1>Transportation </h1>
        
          );
        }
      }

      class Food extends React.Component {
        constructor() {
        super();
        }
        render(){
           return (
                         
      
              <h1>Food</h1>
          
            );
          }
        }

        class HomeSickness extends React.Component {
          constructor() {
          super();
          }
          render(){
             return (
                           
          
                <h1>HomeSickness</h1>
             
              );
            }
          }


