import '../style/reset.scss';

import React from 'react'; // 使用 react-dom，必须引入 React
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from '../react/container/App';
import todoApp from '../react/reducer/todoApp';


// reducer 构造 store
let store = createStore(
	todoApp,
	// 用于 在Chrome中，用 redux DevTools 调试
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
	// 根节点 上存放 store
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
)