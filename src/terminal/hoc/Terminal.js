import React from 'react'
import {createStore, combineReducers} from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import Layout from '../layouts/Layout'
import Dashboard from '../containers/Dashboard/Dashboard'

// Reducers 
import layoutReducer from '../store/reducers/layout'
import counterReducer from '../store/reducers/counter'
import backgroundReducer from '../store/reducers/background'

const rootReducer = combineReducers({
	background: backgroundReducer,
	ctr: counterReducer,
	layout: layoutReducer
})

const store = createStore(rootReducer)

const Terminal = (props) => (
	<Provider store={store}>
		<Router>
			<Layout>
				<Dashboard />
			</Layout>
		</Router>
	</Provider>
)

export default Terminal