// 使用 Component 必须引入 React
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { VisibilityFilters, addTodo } from '../actions/todoApp'


class App extends Component {
	render () {
		console.log(this.props);
		return <div>000</div>
	}
	componentDidMount () {
		this.props.dispatch(addTodo('lalala'));
	}
}

// 从 state 中，处理出 部分数据，传入 connect绑定的组件
function select (state) {
	return {
		// 可见todo 数组
		VisibilityTodos: state.todos.filter(item => {
			switch(state.visibilityFilter) {
				case VisibilityFilters.SHOW_ALL:
					return true;
				case VisibilityFilters.SHOW_COMPLETED:
					return item.completed;
				case VisibilityFilters.SHOW_ACTIVE:
					return !item.completed;
			}
		}),
		// 可见 条件str
		VisibilityFilter: state.visibilityFilter
	}
}

// 通过 connect，把 state、dispatch 传入 组件
	// 1、connect 向 select中，传入 state
	// 2、select 返回值 作为 props 传入 App
	// 3、同时 dispatch 也会一同 传入 App
export default connect(select)(App);