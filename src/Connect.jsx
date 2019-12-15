import React from 'react';
import 'isomorphic-fetch';
import { Link } from 'react-router';

import SearchBar from './SearchBar.jsx';



const FriendList = (props) => (
  <Link to="/profile" style={{ textDecoration: 'none', color: 'black' }}>
    <div className="col" style={{marginBottom: '15px'}}>
  <div className="card h-100">
    <div className="card-body">
      <h5 className="card-title">{props.friend.name}</h5>
      <h6 className="card-subtitle mb-2">Degree: {props.friend.degree}</h6>
      <h6 className="card-subtitle mb-2">School: {props.friend.school}</h6>
      <h6 className="card-subtitle mb-2">Year: {props.friend.year}</h6>
      <h6 className="card-subtitle mb-2">Rate: {props.friend.rate}</h6>
      <p className="card-text">{props.friend.bio}</p>
      <br></br>
    </div>
  </div>
</div>
  </Link>


);

function FriendTable(props) {
  const issueRows = props.friends.map(friend => (
    <FriendList key={friend._id} friend={friend} />
  ));

  return (
    <div className="row-cols-2 row-cols-md-3">
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
        <h1 style={{marginLeft: '2%'}}>Connect with Students</h1>
        <br></br><br></br>
        <FriendTable friends={this.state.friends} />
      </div>
    );
  }
}


