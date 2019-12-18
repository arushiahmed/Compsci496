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
      rate_gte: props.initFilter.rate_gte || '',
      rate_lte: props.initFilter.rate_lte || '',
      changed: false,
    };

    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onChangeRateGte = this.onChangeRateGte.bind(this);
    this.onChangeRateLte = this.onChangeRateLte.bind(this);
    this.applyFilter = this.applyFilter.bind(this);
    this.resetFilter = this.resetFilter.bind(this);
    this.clearFilter = this.clearFilter.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      status: newProps.initFilter.status || '',
      rate_gte: newProps.initFilter.rate_gte || '',
      rate_lte: newProps.initFilter.rate_lte || '',
      changed: false,
    });
  }

  resetFilter() {
    this.setState({
      status: this.props.initFilter.status || '',
      rate_gte: this.props.initFilter.rate_gte || '',
      rate_lte: this.props.initFilter.rate_lte || '',
      changed: false,
    });
  }

  onChangeStatus(e) {
    this.setState({ status: e.target.value, changed: true });
  }

  onChangeRateGte(e) {
    const rateString = e.target.value;
    if (rateString.match(/^(\d*\.)?\d+$/)) {
      this.setState({ rate_gte: e.target.value, changed: true });
    }
  }

  onChangeRateLte(e) {
    const rateString = e.target.value;
    if (rateString.match(/^(\d*\.)?\d+$/)) {
      this.setState({ rate_lte: e.target.value, changed: true });
    }
  }


  clearFilter(e) {
    this.props.setFilter({});
  }

  applyFilter() {
    const newFilter = {};
    if (this.state.status) newFilter.status = this.state.status;
    if (this.state.rate_gte) newFilter.rate_gte = this.state.rate_gte;
    if (this.state.rate_lte) newFilter.rate_lte = this.state.rate_lte;
    this.props.setFilter(newFilter);
  }

  clearFilter() {
    this.props.setFilter({});
  }

  render() {
    return (
      <div>
        <label style={inputStyle}>Academic:</label>
          <select value={this.state.status} onChange={this.onChangeStatus} style={{marginLeft:'4px', cursor: 'pointer'}}>
          <option value="" style={{cursor: 'pointer'}}>(Any)</option>
          <option style={{cursor: 'pointer'}} value="Undergraduate">Undergraduate</option>
          <option style={{cursor: 'pointer'}} value="Graduate">Graduate</option>
        </select>
        &nbsp;
        Rate between:
        <input size={5} value={this.state.rate_gte} onChange={this.onChangeRateGte} />
        &nbsp;-&nbsp;
        <input size={5} value={this.state.rate_lte} onChange={this.onChangeRateLte} />
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