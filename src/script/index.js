import '../style/reset.scss';

import React from 'react';
import ReactDom from 'react-dom';

class MyComponent extends React.Component {

	render() {
		return (
			<div>Hello React</div>
		)
	}

}

ReactDom.render(
	<MyComponent />,
	document.getElementById('app')
)