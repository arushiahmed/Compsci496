import React from 'react';

export default class IssueFilter extends React.Component {
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
        Status:
          <select value={this.state.status} onChange={this.onChangeStatus}>
          <option value="">(Any)</option>
          <option value="Undergraduate">Undergraduate</option>
          <option value="Graduate">Graduate</option>
        </select>
        <button onClick={this.applyFilter}>Apply</button>
        <button onClick={this.resetFilter} disabled={!this.state.changed}>Reset</button>
        <button onClick={this.clearFilter}>Clear</button>
      </div>
    );
  }
}

IssueFilter.propTypes = {
  setFilter: React.PropTypes.func.isRequired,
  initFilter: React.PropTypes.object.isRequired,
};