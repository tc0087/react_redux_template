import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const authenticatedRoute = ({
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
			authenticated ? 
			(React.createElement(component, {
				authenticated,
				...props,
				...rest
			})) :
			(<Redirect to ="/" />)
		)}
	/>
)

export default authenticatedRoute