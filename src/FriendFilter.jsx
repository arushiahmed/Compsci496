import React from 'react';

const inputStyle = {
  //   marginRight: '5%',
     marginLeft: '2%'
   }

export default class FriendFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: props.initFilter.status || '',
      changed: false,
    };

    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.applyFilter = this.applyFilter.bind(this);
    this.resetFilter = this.resetFilter.bind(this);
    this.clearFilter = this.clearFilter.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      status: newProps.initFilter.status || '',
      changed: false,
    });
  }

  resetFilter() {
    this.setState({
      status: this.props.initFilter.status || '',
      changed: false,
    });
  }

  onChangeStatus(e) {
    this.setState({ status: e.target.value, changed: true });
  }


  clearFilter(e) {
    this.props.setFilter({});
  }

  applyFilter() {
    const newFilter = {};
    if (this.state.status) newFilter.status = this.state.status;
    this.props.setFilter(newFilter);
  }

  clearFilter() {
    this.props.setFilter({});
  }

  render() {
    return (
      <div>
        <label style={inputStyle}>Academic:</label>
          <select value={this.state.status} onChange={this.onChangeStatus} style={{marginLeft:'4px'}}>
          <option value="">(Any)</option>
          <option value="Undergraduate">Undergraduate</option>
          <option value="Graduate">Graduate</option>
        </select>
        <button className="btn btn-dark" style={inputStyle} onClick={this.applyFilter}>Apply</button>
        <button className="btn btn-dark" style={inputStyle} onClick={this.resetFilter} disabled={!this.state.changed}>Reset</button>
        <button className="btn btn-dark" style={inputStyle} onClick={this.clearFilter}>Clear</button>
      </div>
    );
  }
}

FriendFilter.propTypes = {
  setFilter: React.PropTypes.func.isRequired,
  initFilter: React.PropTypes.object.isRequired,
};