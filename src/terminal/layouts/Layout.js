import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import Header from '../components/Header/Header'
import Subheader from '../components/Subheader/Subheader'
import SideBar from '../components/SideBars/SideBar'
import AuthenticatedRoute from '../hoc/AuthenticatedRoute'

const Layout = ({history, location, match, authenticatedRoutes}) => (
	<div className="height-100v width-100 relative flex-row">
		{!location.pathname.includes('/create') &&
		<SideBar />}
		<div className="flex-100 flex-col overflow-hidden">
			{!location.pathname.includes('/create') &&
			<Header
				profile={{}}
			/>}
			{location.pathname.includes('/filter') &&
			<Subheader
				location={location}
			/>}
			{authenticatedRoutes.map((route, i) => 
				<AuthenticatedRoute
					authenticated={true}
					component={route.component}
					exact={false}
					key={i + route.path}
					path={route.path}
				/>
			)}
		</div>
	</div>
)

const mapStateToProps = state => {
	return {
		authenticatedRoutes: state.layout.authenticatedRoutes
	}
}

export default connect(mapStateToProps, null)(withRouter(Layout))