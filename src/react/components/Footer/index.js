import React, { Component } from 'react';

import './index.scss';
// 要使用图片，要先引入图片 —— 打包到 配置了静态文件的路径
import image_time_png from './images/time.png';

class Footer extends Component {
	render() {
		return <div className='m-Footer'>
			<p>
				Show:
				{this.renderFilter.bind(this)('SHOW_ALL', 'All')}
				{', '}
				{this.renderFilter.bind(this)('SHOW_COMPLETED', 'Completed')}
				{', '}
				{this.renderFilter.bind(this)('SHOW_ACTIVE', 'Active')}
			</p>
			{ /* <img> src 为 require时 赋值的 str */ }
			<img src={ image_time_png } />
			<div className='time-png'></div>
		</div>
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