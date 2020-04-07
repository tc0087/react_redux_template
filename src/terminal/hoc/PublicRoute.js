import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const publicRoute = ({
	authenticated,
	component,
	exact,
	path,
	...rest
}) => (
	<Route
		path={path}
		exact={exact}
		render={props => (
			!authenticated ? 
			(React.createElement(component, {
				authenticated,
				...props,
				...rest
			})) :
			(<Redirect to ="/boutit" />)
		)}
	/>
)

export default publicRoute