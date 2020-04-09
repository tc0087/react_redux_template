import React from 'react'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { BrowserRouter as Router } from 'react-router-dom'

import Layout from '../layouts/Layout'

// Reducers 
import authReducer from '../store/reducers/auth'
import layoutReducer from '../store/reducers/layout'

const rootReducer = combineReducers({
	auth: authReducer,
	layout: layoutReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

const Terminal = (props) => (
	<Provider store={store}>
		<Router>
			<Layout />
		</Router>
	</Provider>
)

export default Terminal