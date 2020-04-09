import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import HeaderLogo from './HeaderLogo'
import HeaderSearch from './HeaderSearch'
import HeaderActions from './HeaderActions'

import * as actionCreators from '../../store/actions/index'

const authenticatedHeader = ({
	createMenu,
	history,
	location,
	profile,
	hideCreateMenu,
	hideSearchDropdown,
	searchDropdown,
	toggleCreateMenu,
	toggleSearchDropdown
}) => {
	return (
		!location.pathname.includes('/create') ? 
		(<div className="height-60p width-100 flex-col background-white">
			<div className="height-100 relative border-bottom-grey flex-col header-padding">
				<div className="height-100 flex-row width-100 space-between">
					<HeaderLogo />
					<HeaderSearch
						hideSearchDropdown={hideSearchDropdown}
						toggleSearchDropdown={toggleSearchDropdown}
						searchDropdown={searchDropdown}
					/>
					<HeaderActions
						createMenu={createMenu}
						hideCreateMenu={hideCreateMenu}
						history={history}
						profile={{}}
						toggleCreateMenu={toggleCreateMenu}
					/>
				</div>
			</div>
		</div>) : null
	)
}


const mapStateToProps = state => {
	return {
		createMenu: state.layout.createMenu,
		searchDropdown: state.layout.searchDropdown
	}
}

const mapDispatchToProps = dispatch => {
	return {
		hideCreateMenu: () => dispatch(actionCreators.hideCreateMenu()),
		hideSearchDropdown: () => dispatch(actionCreators.hideSearchDropdown()),
		toggleSearchDropdown: () => dispatch(actionCreators.toggleSearchDropdown()),
		toggleCreateMenu: () => dispatch(actionCreators.toggleCreateMenu())
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(authenticatedHeader))