import React from 'react'
import AuthenticatedHeader from './AuthenticatedHeader'

const header = ({
	authenticated,
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
		authenticated ? 
		<AuthenticatedHeader
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
		/> : 
		null
	)
}

export default header