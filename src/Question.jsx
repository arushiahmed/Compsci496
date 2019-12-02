import React from 'react';
import 'isomorphic-fetch';
import { Link } from 'react-router';
import SearchBar from './SearchBar.jsx';

export default class Question extends React.Component {
  constructor() {
    super();
    
  }
  render() {
    return (
      <div>
        <SearchBar> </SearchBar>
        <center>
        <h1>Question Air</h1>
          <form>
          <div class="form-group">
              <label for="formGroupExampleInput2">What do you like to do?</label>
              <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Type Answer Here" />
        </div>
        <p></p>
          <div class="form-group">
              <label for="formGroupExampleInput2">What struggles are you facing?</label>
              <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Type Answer Here" />
          </div>
          <div class="form-group">
              <label for="formGroupExampleInput">What are you looking for in a person?</label>
              <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Type Answer Here" />
          </div>
          <div class="form-group">
              <label for="formGroupExampleInput2">How can someone help you?</label>
              <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Type Answer Here" />
          </div>
          <div class="form-group">
              <label for="formGroupExampleInput2">WHy do you want to connect with someone?</label>
              <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Type Answer Here" />
          </div>
          <div class="form-group">
              <label for="formGroupExampleInput2">Do you want to meet in person or online?</label>
              <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Type Answer Here" />
          </div>
          <div class="form-group">
              <label for="formGroupExampleInput2">Do you want to connect with people from the same country?</label>
              <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Type Answer Here" />
          </div>
          <div class="form-group">
              <label for="formGroupExampleInput2">Do you want to connect with people who share the same ethnicity?</label>
              <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Type Answer Here" />
          </div>
          </form>
        </center>
      </div>
    );
  }
}

