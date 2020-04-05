import React from 'react'
import {createStore, combineReducers} from 'redux'
import { Provider } from 'react-redux'

import Aux from '../hoc/Aux'
import Header from '../components/Header/Header'
import SideBar from '../components/SideBars/SideBar'

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
			<div className="height-100v width-100 relative flex-row">
				<SideBar />
				<div className="flex-100 flex-col">
					<Header />
					<div className="flex-100 centered">
						body
					</div>
				</div>
			</div>
		</Aux>
	</Provider>
)

export default Layout