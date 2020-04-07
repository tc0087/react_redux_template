import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import HeaderLogo from './HeaderLogo'
import HeaderSearch from './HeaderSearch'
import HeaderActions from './HeaderActions'

import * as actionTypes from '../../store/actions/layout_actions'

const header = ({
	createMenu,
	history,
	profile,
	hideCreateMenu,
	hideSearchDropdown,
	searchDropdown,
	toggleCreateMenu,
	toggleSearchDropdown
}) => (
	<div className="height-60p width-100 flex-col background-white">
		<div className="height-100 relative border-bottom-grey flex-col header-padding">
			<div className="height-100 flex-row width-100 space-between">
				<HeaderLogo

				/>
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
	</div>
)

const mapStateToProps = state => {
	return {
		createMenu: state.layout.createMenu,
		searchDropdown: state.layout.searchDropdown
	}
}

const mapDispatchToProps = dispatch => {
	return {
		hideCreateMenu: () => dispatch({
			type: actionTypes.HIDE_CREATE_MENU
		}),
		hideSearchDropdown: () => dispatch({
			type: actionTypes.HIDE_SEARCH_DROPDOWN
		}),
		toggleSearchDropdown: () => dispatch({
			type: actionTypes.TOGGLE_SEARCH_DROPDOWN
		}),
		toggleCreateMenu: (path) => dispatch({
			type: actionTypes.TOGGLE_CREATE_MENU,
			path
		})
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(header))