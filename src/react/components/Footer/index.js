import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return <p>
			Show:
			{this.renderFilter.bind(this)('SHOW_ALL', 'All')}
			{', '}
			{this.renderFilter.bind(this)('SHOW_COMPLETED', 'Completed')}
			{', '}
			{this.renderFilter.bind(this)('SHOW_ACTIVE', 'Active')}
		</p>
	}

	renderFilter(filter, name){
		if(filter === this.props.filter){
			return name;
		}
		else {
			return <a href='javascript:;' onClick={() => {this.props.onFilterChange(filter)}}>{name}</a>
		}
	}
}

export default Footer;