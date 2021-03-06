import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, withRouter, IndexRoute } from 'react-router';

import Welcome from './Welcome.jsx';
import Profile from './Profile.jsx'
import About from './About.jsx'
import Survey from './Survey.jsx';
import NewSurvey from './NewSurvey.jsx';
import FriendList from './FriendList.jsx';

var contentNode = document.getElementById("contents");

// A simple component to indicate that a page was not found.
const NoMatch = () => <p>Page Not Found</p>;

// This defines the main application layout that can be used
// across nested routes. The `props.children` property is received
// by the parent route. See the route definitions below.
const App = (props) => (
<div>
  <div className="contents">
    {props.children}
  </div >
</div>
);

// For safety, we specify that the prop types received by the
// App component must require a "children" property. If we do
// not include this it will not compile.
App.propTypes = {
  children: React.PropTypes.object.isRequired,
};


const RoutedApp = () => (
  <Router history={hashHistory} >
    {/* <Redirect from="/" to="/issues" /> - replaced this with the Dashboard component */}
    <Route path="/" component={App} >
      <IndexRoute component={Welcome} />
      <Route path="/connect" component={withRouter(FriendList)} />
      <Route path="/about" component={About} />
      <Route path="/userSurvey" component={Survey} />
      <Route path="/form" component={NewSurvey} />
      <Route path="/profile" component={Profile} />
      <Route path="*" component={NoMatch} />
    </Route>
  </Router>);

// This renders the JSX router inside the content node:
ReactDOM.render(<RoutedApp />, contentNode);