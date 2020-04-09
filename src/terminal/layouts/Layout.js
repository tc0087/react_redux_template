import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import Header from '../components/Header/Header'
import Subheader from '../components/Subheader/Subheader'
import SideBar from '../components/SideBars/SideBar'
import AuthenticatedRoute from '../hoc/AuthenticatedRoute'
import PublicRoute from '../hoc/PublicRoute'

import * as actionCreators from '../store/actions/index'

class Layout extends Component{

	componentDidMount() {
		this.props.authCheck()
	}

	render() {
		const {
			authenticated,
			authenticatedRoutes, 
			createMenu,
			history,
			location,
			profile,
			publicRoutes,
			hideCreateMenu,
			hideSearchDropdown,
			searchDropdown,
			toggleCreateMenu,
			toggleSearchDropdown
		} = this.props
		return (
			<div className="height-100v width-100 relative flex-row">
		
				<SideBar />
				<div className="flex-100 flex-col overflow-hidden">
					<Header
						authenticated={authenticated}
						createMenu={createMenu}
						history={history}
						location={location}
						profile={profile}
						hideCreateMenu={hideCreateMenu}
						hideSearchDropdown={hideSearchDropdown}
						searchDropdown={searchDropdown}
						toggleCreateMenu={toggleCreateMenu}
						toggleSearchDropdown={toggleSearchDropdown}
					/>
					{authenticated && location.pathname.includes('/filter') &&
					<Subheader
						location={location}
					/>}
					{authenticatedRoutes.map((route, i) => 
						<AuthenticatedRoute
							authenticated={authenticated}
							component={route.component}
							exact={false}
							key={i + route.path}
							path={route.path}
						/>
					)}
					{publicRoutes.map((route, i) => 
						<PublicRoute
							authenticated={false}
							component={route.component}
							exact={false}
							key={i + route.path}
							path={route.path}
						/>
					)}
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		authenticated: state.auth.authenticated,
		authenticatedRoutes: state.layout.authenticatedRoutes,
		createMenu: state.layout.createMenu,
		publicRoutes: state.layout.publicRoutes,
		searchDropdown: state.layout.searchDropdown
	}
}

const mapDispatchToProps = dispatch => {
	return {
		authCheck: () => dispatch(actionCreators.authCheck()),
		hideCreateMenu: () => dispatch(actionCreators.hideCreateMenu()),
		hideSearchDropdown: () => dispatch(actionCreators.hideSearchDropdown()),
		toggleSearchDropdown: () => dispatch(actionCreators.toggleSearchDropdown()),
		toggleCreateMenu: () => dispatch(actionCreators.toggleCreateMenu())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Layout))