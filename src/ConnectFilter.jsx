import React from 'react';
import 'isomorphic-fetch';

const inputStyle = {
 //   marginRight: '5%',
    marginLeft: '5%'
  }

export default class ConnectFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            academic: props.initFilter.academic || '',
            changed: false,
        };
        this.onChangeAcademic = this.onChangeAcademic.bind(this)
        this.applyFilter = this.applyFilter.bind(this)
        this.resetFilter = this.resetFilter.bind(this)
        this.clearFilter = this.clearFilter.bind(this)
    }

    componentWillReceiveProps(newProps){
        this.setState({
            academic: newProps.initFilter.academic || '',
            changed: false,
        });
    }

    resetFilter(){
        this.setState({
            academic: this.props.initFilter.academic || '',
            changed: false,
        });
    }

    clearFilter(e){
        this.props.setFilter({});
    }

    onChangeAcademic(e){
        this.setState({academic: e.target.value, changed: true}); 
    }

    applyFilter(){
        const newFilter = {};
        if(this.state.academic) newFilter.academic = this.state.status;
        this.props.setFilter(newFilter);
    }

    clearFilter(){
        this.props.setFilter({});
    }

    render(){
        return(
            
                <div>
                    <div className="row" style={inputStyle}>
                        Academic:
                    <select value={this.state.academic} onChange={this.onChangeAcademic}>
                    <option value="">(Any)</option>
                    <option value="Undergraduate">Undergraduate</option>
                    <option value="Graduate">Graduate</option>
                    </select>
                    <button className="btn btn-dark" style={inputStyle} onClick={this.applyFilter}>Apply</button>
                    <button className="btn btn-dark" style={inputStyle} onClick={this.resetFilter} disabled={!this.state.changed}>Reset</button>
                    <button className="btn btn-dark" style={inputStyle} onClick={this.clearFilter}>Clear</button>
                    </div>
                </div>

        );
    }
}

ConnectFilter.propTypes = {
    setFilter: React.PropTypes.func.isRequired,
    initFilter: React.PropTypes.object.isRequired,
};