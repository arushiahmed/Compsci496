import React from 'react';
import 'isomorphic-fetch';
import { Link } from 'react-router';

import SearchBar from './SearchBar.jsx';



const FriendList = (props) => (
<div className="col mb-4">
  <div className="card h-100">
    <div className="card-body">
      <h5 className="card-title"><Link to="/profile">Profile: {props.friend.name}</Link></h5>
      <h6 className="card-subtitle mb-2">School: {props.friend.school}</h6>
      <h6 className="card-subtitle mb-2">Year: {props.friend.year}</h6>
      <h6 className="card-subtitle mb-2">Rate: {props.friend.rate}</h6>
      <p className="card-text">{props.friend.bio}</p>
      <br></br>
    </div>
  </div>
</div>

);

function FriendTable(props) {
  const issueRows = props.friends.map(friend => (
    <FriendList key={friend._id} friend={friend} />
  ));

  return (
    <div className="row row-cols-1 row-cols-md-3">
        {issueRows}
    </div>
  );
}

export default class Connect extends React.Component {
  constructor() {
    super();
    this.loadData = this.loadData.bind(this);

    this.state = {
      friends: [],
    }; 
   }

   componentDidMount(){
     this.loadData();
   }

   loadData(){
     let friend = this.state.friends;
     fetch("api/friends")
        .then(res => {
          if(res.ok) {
            res.json().then(json => {
              let friends = [];
              json.records.forEach(friend => {
                friends.push(
                  friend
                )
              });
              this.setState({friends: friends})
            })
          }
        }).catch (err => {
          alert("There was a problem: " + err.message)
        });
   }


  render() {
    return (
      <div>
        <SearchBar></SearchBar>
        <center>
        <h1>Connect with Students</h1>
        </center>
        <br></br>
        <FriendTable friends={this.state.friends} />
      </div>
    );
  }
}


