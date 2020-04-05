import React from 'react'
import {createStore, combineReducers} from 'redux'
import { Provider } from 'react-redux'

import Layout from '../layouts/Layout'
import Dashboard from '../containers/Dashboard/Dashboard'

// Reducers 
import counterReducer from '../store/reducers/counter'
import backgroundReducer from '../store/reducers/background'

const rootReducer = combineReducers({
	ctr: counterReducer,
	background: backgroundReducer
})

const store = createStore(rootReducer)

const WebApp = (props) => (
	<Provider store={store}>
		<Layout>
			<Dashboard />
		</Layout>
	</Provider>
)

export default WebApp