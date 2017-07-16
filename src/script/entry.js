import '../style/reset.scss';

import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter, Route, Link } from 'react-router-dom';


class App extends React.Component {
	render () {
		return (
			<div>
				<div className='app'>
					<Link to='/' className='item'>首页</Link>
					<Link to='/tv' className='item'>电视</Link>
					<Link to='/tv/shows/aaaa' className='item'>电视</Link>
				</div>
				{this.props.children}
			</div>
		)
	}
}

class TV extends React.Component {
	render () {
		return (
			<div>
				<div className='ui info message'>电视节目列表</div>
				{this.props.children}
				{/* <Route> 应该像这样 放在Route.props.component 组件下 */}
				<div>
					<Route path='/tv/shows/:id' component={Show}></Route>
				</div>
			</div>
		)
	}
}

class Show extends React.Component {
	constructor(props) {
		super(props);
	}
	render () {
		return (
			/* 通过 this.props.match.params 获取 url中 :id 参数 */
			<h3>节目 {this.props.match.params.id}</h3>
		)
	}
}

ReactDom.render(
	/* 原因1: */
	/* 使用 hash 作为 路由 */
	/* 好处：无需后端 配合 做同样的路由 */
	/* 若用 path 作为 路由 */
	/* 坏处：若后端未做 对应的路由，则刷新 404 */ 
	/* 选择：不用<BrowserRouter>，用<HashRouter> */
	/* 策略：前后端 路由还是功能分开，前端用hash，后端用path */
	<HashRouter>
		<div>
			<Route path='/' component={App}></Route>
			<Route path='/tv' component={TV}>
				{/* <Route> Children下，不能放 <Route> 了 */}
			</Route>
		</div>
	</HashRouter>,
	document.getElementById('app')
)