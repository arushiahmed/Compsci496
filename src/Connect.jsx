import React from 'react';
import 'isomorphic-fetch';
import { Link } from 'react-router';

import SearchBar from './SearchBar.jsx';
import ConnectFilter from './ConnectFilter.jsx';



const FriendList = (props) => (
  <Link to="/profile" style={{textDecoration: 'none', color: 'black' }}>
   
  <div className="card border-dark mb-3" style={{width: '550px', marginLeft: '30%', marginBottom: '15px'}}>
    <div className="card-body h-100">
      <h5 className="card-title">{props.friend.name}</h5>
      <h6 className="card-subtitle mb-2">Academic: {props.friend.academic}</h6>
      <h6 className="card-subtitle mb-2">School: {props.friend.school}</h6>
      <h6 className="card-subtitle mb-2">Year: {props.friend.year}</h6>
      <h6 className="card-subtitle mb-2">Rate: {props.friend.rate}</h6>
      <p className="card-text">{props.friend.bio}</p>
      <br></br>
    </div>
  </div>
</Link>


);

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
    this.state = {
      friends: [],
    }; 

    this.loadData = this.loadData.bind(this);
    this.setFilter = this.setFilter.bind(this);
    
   }

   componentDidMount(){
     this.loadData();
   }

   componentDidUpdate(prevProps){
     const oldQuery = prevProps.location.query;
     const newQuery = this.props.location.query;
     if(oldQuery.academic == newQuery.academic){
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
      alert("There was a problem: " + err.message)
    });
  }

  setFilter(query){
    this.props.router.push({pathname: this.props.location.pathname, query});
  }
          
/*
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

*/
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
