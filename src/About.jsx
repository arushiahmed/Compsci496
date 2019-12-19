import React from 'react';
import 'isomorphic-fetch';
import { Link } from 'react-router';

import Profile from './Profile.jsx';
import SearchBar from './SearchBar.jsx';

const textStyle = {
  marginLeft: '15%',
  marginRight: '15%',
 // width: '850px',
  fontSize: '14px'
}

export default class About extends React.Component {
  constructor() {
    super();
    
  }
  render() {
    return (
      <div>
        <SearchBar></SearchBar>
        <br></br>
        <h1 style={{marginLeft: '2%'}}>About</h1>
        <br></br><br></br>
        <center>
          <div className="about" style={textStyle}>
          <h3>Welcome to Intermingle.</h3>
          <br></br>
          <p><strong>Overview: </strong>One of the biggest adjustments for students is going away from home to college. For international students, it is more of an adjustment than for domestic students. These students have to adjust going to school away from their family but also experiencing a new culture. This adjustment can cause stress for these students that affects their academic performance and their experience living in the United States. 
          This application is for both international and domestic student to find people and connect within their University. Below is a list of the descripition of each page, the function of their page, and what features of the page needs to be implemented.</p>
          <br></br>
          <p><strong>1. Welcome: </strong> This is the home page where users either signin and signup. If the user is signing up then they would fill out the form that will directly take them to the survey once completed. The signin page is for returning users where they fill in their username (set to their email) 
          and the password where they will be directed to the about page.</p> 
          <p><strong>2. About: </strong> The about page will give them the infomation about the application and its purpose. When a returning user signing in, it will direct them to the about page. <strong>Note:</strong> the content is the same as the About.md file as well.</p>
          <p><strong>3. Connect With Friends: </strong> This page is where users will look for friends. Each person has their own card that gives the user the name, if they are a undergraduate or graduate student, school, the year based on graduation, their overall rating, 
          and the bio that describes who they are. This page also has two filters implemented. One filter is where users can look for either undergraduates or graduate students and the second filter is if the user is trying to find friends from a certain rating. If the user likes a person, then they can click on their card that will direct them to their profile to find the chat button to start a conversation with them. Their is also a rating button where the user can go rate the person and also see other reviews about how others describe this person. 
          Currently the list of friends is mock data running from mongo scripts/init.mongo.js.</p>
          <p><strong>4. Survey: </strong>This page is where the user will see their survey. Currently this page show the survey sections and questions with no data that is fill. 
          To fill out the survey the user will click on the new survey button and bring them to a new survey page. The user will fill the form then press the save button then next click on the 
          find friends button that will give them a list of friends that would be a good match for them based on the survey. Currenlty the list of friends is just mock data that does not filiter it to their survey. When the user presses the save button, 
          they can go back to the survey button and scrool down and see the new updated survey they have filled out.</p>
          <p><strong>5. Profile: </strong>This is the user profile where they can see thier email, wether they are a undergraduate or graduate student, the school, which country they are from, and the bio they have written about themseleves. There is an edit button when the user wants to change their profile, a chat button where the user can go talk to their friends, and a rating button to see their reviews. 
          Currently none of the buttons on the page work.</p>
          <p><strong>6. Logout Button:</strong> This is a button not a page. When the user clicks on this button, it will direct them back to the welcome page.</p>
          </div>       
        </center>
      </div>
    );
  }
}