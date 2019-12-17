import React from 'react';
import 'isomorphic-fetch';
import { Link } from 'react-router';

import SearchBar from './SearchBar.jsx';
import ConnectFilter from './ConnectFilter.jsx';



const FriendList = (props) => {
  return( 
  <div className="card border-dark mb-3">
    <div className="card-body h-100">
      <h5 className="card-title">{props.friend.name}</h5>
      <h6 className="card-subtitle mb-2" id="status">Status: {props.friend.status}</h6>
      <h6 className="card-subtitle mb-2" id="school">School: {props.friend.school}</h6>
      <h6 className="card-subtitle mb-2" id="year">Year: {props.friend.year}</h6>
      <h6 className="card-subtitle mb-2" id="rate">Rate: {props.friend.rate}</h6>
      <p className="card-text id=bio">{props.friend.bio}</p>
      <br></br>
    </div>
  </div>

);

}

FriendList.propTypes = {
  friend: React.PropTypes.object.isRequired,
};


function FriendTable(props) {
  const issueRows = props.friends.map(friend => (
    <FriendList key={friend._id} friend={friend} />
  ));

  return (
    <div className="card-deck">
        {issueRows}
    </div>
  );
}

FriendTable.propTypes = {
  friends: React.PropTypes.array.isRequired,
  };

export default class Connect extends React.Component {
  constructor() {
    super();
    this.state = {friends: [] }; 

    this.loadData = this.loadData.bind(this);
    this.setFilter = this.setFilter.bind(this);
    
   }

   componentDidMount(){
     this.loadData();
   }

   componentDidUpdate(prevProps){
     const oldQuery = prevProps.location.query;
     const newQuery = this.props.location.query;
     if(oldQuery.status == newQuery.status){
       return ;
     }
     this.loadData(); 
   }

   loadData(){
     fetch(`/api/friends${this.props.location.search}`).then(res => {
       if(res.ok){
         res.json().then(json => {
          let friends = [];
          json.records.forEach(friend => {
            friends.push(
              friend
            )   
          });
          this.setState({friends: json.records})
        })
      }
    }).catch (err => {
      alert("There was a problem: ", err)
    });
  }

  setFilter(query){
    this.props.router.push({pathname: this.props.location.pathname, query});
  }
          
  render() {
    return (
      <div>
        <SearchBar></SearchBar>
        <h1 style={{marginLeft: '2%'}}>Connect with Students</h1>
        <br></br><br></br>
        <ConnectFilter setFilter={this.setFilter} initFilter={this.props.location.query} />
        <br></br><br></br>
        <FriendTable friends={this.state.friends} />
      </div>
    );
  }
}

Connect.propTypes = {
  location: React.PropTypes.object.isRequired,
  router: React.PropTypes.object,
};