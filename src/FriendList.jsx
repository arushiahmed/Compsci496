import React from 'react';
import 'isomorphic-fetch';
import { Link } from 'react-router';

import FriendFilter from './FriendFilter.jsx';
import SearchBar from './SearchBar.jsx';

// NEW
// (1) Added a function to delete an issue given the issue ID.
// (2) Added a button to the interface to provide the delete functionality.
const FriendCard = (props) => (

  <Link to="/profile" style={{ textDecoration: 'none', color: 'black' }}>

    <div className="card border-dark mb-3" style={{width: '400px', marginLeft: '25%'}}>
      <div className="card-body h-100">
        <h5 className="card-title">Name: {props.friend.name} </h5>
        <h6 className="card-subtitle mb-2" id="academic">Academic: {props.friend.status}</h6>
        <h6 className="card-subtitle mb-2" id="school">School: {props.friend.school}</h6>
        <h6 className="card-subtitle mb-2" id="year">Year: {props.friend.year}</h6>
        <h6 className="card-subtitle mb-2" id="rate">Rate: {props.friend.rate}</h6> 
        <p className="card-text" id="bio">Bio: {props.friend.bio}</p> 
        <br></br>
      </div>
  </div>
  </Link>

  );


FriendCard.propTypes = {
  friend: React.PropTypes.object.isRequired,
};
// NEW END

function FriendTable(props) {
  const friendCard = props.friends.map(friend => (
    <FriendCard key={friend._id} friend={friend}  />
  ));
  return (
  
      <div className="card-deck">
      {friendCard}
    </div>
    

  );
}

// NEW
FriendTable.propTypes = {
  friends: React.PropTypes.array.isRequired,
};
// NEW END

export default class FriendList extends React.Component {
  constructor() {
    super();
    this.state = { friends: [] };

    this.loadData = this.loadData.bind(this);
    this.setFilter = this.setFilter.bind(this);
  }



  componentDidMount() {
    this.loadData();
  }

  // This method is part of the React component "lifecycle". It is invoked
  // when a component property is updated. In this case, we are using it to
  // load new data when the props.location object is changed. In particular,
  // when we click on a link that causes react router to change the view to
  // the IssueList and the URL changes (for example, a search query) it
  // causes the componentDidUpdate() method to be invoked.
  componentDidUpdate(prevProps) {
    const oldQuery = prevProps.location.query;
    const newQuery = this.props.location.query;
    if (oldQuery.status === newQuery.status && 
        oldQuery.rate_gte === newQuery.rate_gte
      && oldQuery.rate_lte === newQuery.rate_lte) 
    {
      return;
    }
    this.loadData();
  }

  loadData() {
    // Note: React Router automatically adds a "location" property to a react
    //       object's "props". The object that the "location" property refers
    //       to also has a "search" property which is the query string of the
    //       URL, including the '?' character  -  which is why we do not need
    //       to add it to the string in the `fetch()` call.
    fetch(`/api/friends${this.props.location.search}`).then(response => {
      if (response.ok) {
        response.json().then(data => {
          let friends = [];
          data.records.forEach(friend =>{
            friends.push(
              friend
            )
          });
          this.setState({friends: data.records})
        })
      }
    }).catch(err => {
      alert("Error in fetching data from server:", err);
    });
  }

  setFilter(query) {
    this.props.router.push({ pathname: this.props.location.pathname, query });
  }

  render() {
    return (
      <div>
        <SearchBar> </SearchBar>
        <br></br>
        <h1 style={{marginLeft: '2%'}}>Connect With Friends</h1>
        <br></br><br></br>
        <FriendFilter setFilter={this.setFilter} initFilter={this.props.location.query} />
        <br></br><br></br>
        <FriendTable friends={this.state.friends} />
       
      </div>
    );
  }
}

FriendList.propTypes = {
  location: React.PropTypes.object.isRequired,
  router: React.PropTypes.object,
};