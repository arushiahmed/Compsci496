import React from 'react';
import 'isomorphic-fetch';
import { Link } from 'react-router';

import SearchBar from './SearchBar.jsx';


const FriendList = (props) => (
 <tr>
      <td><Link to="/profile">{props.friend.name}</Link></td>
      <td>{props.friend.school}</td>
      <td>{props.friend.year}</td>
      <td >{props.friend.rate}</td>
      <td>{props.friend.bio}</td>
  </tr>
    

);

function FriendTable(props) {
  const issueRows = props.friends.map(friend => (
    <FriendList key={friend._id} friend={friend} />
  ));

  return (
    <table id="bordered-table" >
      <thead>
        <tr>
          <th>Name:</th>
          <th>School:</th>
          <th>Year:</th>
          <th>Rate:</th>
          <th>Bio:</th>
        </tr>
      </thead>
  <tbody>{issueRows}</tbody>
    </table>
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
        <br></br>
        <FriendTable friends={this.state.friends} />
        </center>
      </div>
    );
  }
}


