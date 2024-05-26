import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux';

import { store } from '/src/main/core/store';
import Main from './main/main.jsx'

ReactDOM
	.createRoot(document.getElementById('root'))
	.render(
		<React.StrictMode>
			<Provider store={store}>
				<Main />
			</Provider>
		</React.StrictMode>,
	)