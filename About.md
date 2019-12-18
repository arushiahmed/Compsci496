# About This Application

Welcome to Intermingle. This is an interactive platform where international students and domestic students can find friends. 
Majority of this website is not implemented. Below is a list of the pages of the site, how a user would interact with the page, and what needs to be implemented on the page. 

# Pages and Description

1. Welcome: This is the home page where users either signin and signup. If the user is signing up then they would fill out the form that will directly take them to the survey once completed. The signin page is for returning users where they fill in their username (set to their email) and the password where they will be directed to the about page.

2. About: The about page will give them the infomation about the application. The about page will have contain content from the About.md file as well.

3. Connect With Friends: This page is where users will look for friends. Each person has their own card that gives the user the name, if they are a undergraduate or graduate student, school, the year based on graduation, their overall rating, and the bio that describes who they are. This page also has two filters implemented. One filter is where users can look for either undergraduates or graduate students and the second filter is if the user is trying to find friends from a certain rating. If the user likes a person, then they can click on their card that will direct them to their profile to find the chat button to start a conversation with them. Their is also a rating button where the user can go rate the person and also see other reviews about how others describe this person. Currently the list of friends is mock data running from mongo scripts/init.mongo.js. 

4. Survey: This page is where the user will see their survey. Currently this page show the survey sections and questions with no data that is fill. To fill out the survey the user will click on the new survey button and bring them to a new survey page. The user will fill the form then press the save button then next click on the find friends button that will give them a list of friends that would be a good match for them based on the survey. Currenlty the list of friends is just mock data that does not filiter it to their survey. When the user presses the save button, they can go back to the survey button and scrool down and see the new updated survey they have filled out. 

5. Profile: This is the user profile where they can see thier email, wether they are a undergraduate or graduate student, the school, which country they are from, and the bio they have written about themseleves. There is an edit button when the user wants to change their profile, a chat button where the user can go talk to their friends, and a rating button to see their reviews. Currently none of the buttons on the page work.

6. Logout Button: This is a button not a page. When the user clicks on this button, it will direct them back to the welcome page.
