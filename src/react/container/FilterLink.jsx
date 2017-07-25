import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class FilterLink extends Component {
	render (){
		return <Link to={this.props.filter}>
			{this.props.children}
		</Link>
	}
}

export default FilterLink;