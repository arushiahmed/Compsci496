# About This Application

Welcome to Intermingle. One of the biggest adjustments for students is going away from home to college. For international students, it is more of an adjustment than for domestic students. These students have to adjust going to school away from their family but also experiencing a new culture. This adjustment can cause stress for these students that affect their academic performance and their experience living in the United States. The purpose of this system is for both international and domestic student to find people and connect within their University. Below is a list of the description of each page, the function of their page, and what features of the page needs to be implemented.

# Pages and Description

1. **Welcome to Intermingle:** The landing page is defaulted to the login page with the option of register. If the user is using the web application for the first time, they will click on the register. The register page will ask the user to out a form that asks them for their first and last name, if they are either a undergraduate or graduate student, the school they attend, their email, their major, graduation year, the country they are from, a username, password, and confirmation of their password. Currently only some of the fields of the form have validation such as name, their email that must be a ".edu" account, and if their password match. Currently the system does not notify if they are putting invalid content. Once the user fills finishes  that will directly take them to the survey page once completed. The login page is for returning users where they fill in their username (set to their email currently) and the password where they will be directed to the about page. 

2. **About:** The about page will give them the information about the application and its purpose. It will give them an overview of this application and description of features of system. When a returning user signing in, it will direct them to this page. 

3. **Connect With Friends:** This page is where users will look for friends (Figure 5). Each person has their own card that gives the user the name, if they are a undergraduate or graduate student, school, the year based on graduation, their overall rating, and the bio that describes who they are. This page also has two filters implemented. One filter is where users can look for either undergraduates or graduate students and the second filter is if the user is trying to find friends from a certain rating. If the user likes a person, then they can click on their card that will direct them to their profile to find the chat button to start a conversation with them. Their is also a rating button where the user can go rate the person and also see other reviews about how others describe this person. Currently the list of friends is mock data that is store in the database. To run the scripts to generate a list of friends, run mongo scripts/init.mongo.js.

4. **Survey:** This page is where the user will see their survey. Currently the page shows a empty survey of the sections and questions. To fill out the survey the user will have to click on the new survey button that brings them to the survey. From their, the user will fill the form and press the save button to like them know the survey has been recorded. Then next they will click on the find friends button that will direct them to the connect with friends page. The connect of friends page will give them a list of potential people that would be a good match for them based on the survey. Currently the system only shows a list of friends as mock data and does not create a list based on the user survey. When the user presses the survey button again, they can scroll down and see the new updated survey they have filled out.

5. **Profile:** This is the user profile where they can see their email, if they are a undergraduate or graduate student, the school, which country they are from, and the bio they have written about themselves (Figure 7). There is an edit button when the user wants to change their profile, a chat button where the user can go talk to their friends, and a rating button to see their reviews. Currently none of the buttons on the page work. 

# Future implementation

There is still more implementation needed to be done or errros that need to be fixed for Intermingle. Below is a list of what feature that need to be implemented and errors need to be fixed.

## List of implementation

  1. **Rate Component:** The purpose of having a rate feature if letting people know how helpful and how reliable is this person. When a user goes to another person profile, they will see a rate button. When rate button is active it will give a serious of questions about the person such has, "I enjoy the conversation I have with this person", "This person is a good listener", and more. Based on these questions, the user will rate the person on a scale from one to five where one is not good to five be excellent.
  
  2. **Chat Component:** The chat component is for users to talk to one another. When the user likes on the button to help them start a conversation with other people, the system will give a list of starter conversation. 
    
 3. **Edit Button:** There are edit buttons on the survey and profile page that have not been implemented. 
    
 4. **More Filter:** In the Connect with Friends page, a filter that needs to be implemented is graduated year.  
    
 5. **Survey Questions:** There are some survey questions that ask yes or no questions. Some questions if a user says yes, then another follow up question will be displayed asking them to explain more. Questions such as 2d-2f would need this feature to be implemented.
        
 6. **Data Bases:** Currently the data base records just surveys, and list of users with no account. The database needs to store all user accounts as well as mapped their information from the registration form to their profile.
    
 7. **Search Bar:** The purpose of the search bar is for users to find certain information. It is more effective for Connect with Friends page when users want to find a certain person.
 
 ## Errors in the system
 
  1. Survey: Currently the website displays an empty survey. When a user fills out a survey, it should replace the blank survey with the new one. When the users saves the sur- vey, they will see the both the new survey and the blank survey. Every time the user fills out a new survey, it will display all the surveys they have done in the last.

  2. Survey Section Hobbies: In the hobbies sections of the survey, the user is able to selected multiple choices. When the user selects their hobbies and press save, the survey will say that have only selected on hobbies which is sports. I am having trouble figuring out a way for the survey to record just the checked off item.

  3. Display Validation: The only validation that are imple- mented are just in the registration page for certain field. I was having trouble figuring out a way to tell the user that this field is required.
