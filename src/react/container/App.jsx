// 使用 Component 必须引入 React
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from '../actions/todoApp'

// 将 actions 打包成一个对象
const actionCreators = { addTodo, toggleTodo, setVisibilityFilter };

class App extends Component {
	render () {
		console.log(this.props);
		return <div>000</div>
	}
	componentDidMount () {
		// this.props.dispatch(addTodo('lalala'));
		this.props.addTodo('xixixi');
	}
}

// 从 state 中，筛选出 部分数据，传入 connect绑定的组件
function mapStateToProps (state) {
	// 返回一个obj
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

// 通过 connect，把 state、dispatch 传入 组件(智能化 组件)
	// 1、mapStateToProps
		// 不传 或 null，则 state, 不传入 App 的 props上
		// 传，则 mapStateToProps 中传入state，返回 obj ，...obj 绑定到 App的 props上
	// 2、actionCreators
		// 不传 或 null，则 dispatch 传入 App 的 props上
		// 传，则 actionCreators 各属性: action函数，被 绑定上 dispatch (可直接调用)，传入 到 App的 props 上
export default connect(mapStateToProps, actionCreators)(App);