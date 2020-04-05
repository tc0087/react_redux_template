import React from 'react'
import {createStore, combineReducers} from 'redux'
import { Provider } from 'react-redux'

import Aux from '../hoc/Aux'
import Header from '../components/Headers/Header'

// Reducers 
import counterReducer from '../store/reducers/counter'
import backgroundReducer from '../store/reducers/background'

const rootReducer = combineReducers({
	ctr: counterReducer,
	background: backgroundReducer
})

const store = createStore(rootReducer)

const Layout = (props) => (
	<Provider store={store}>
		<Aux>
			<Header />
			<main>
				{props.children}
			</main>
		</Aux>
	</Provider>
)

export default Layout