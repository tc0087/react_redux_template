import React from 'react'
import SearchResult from './SearchResult'

const searchDropdown = (props) => (
	<div className="absolute-search flex-col background-white flex-col search-dropdown shadow-light min-height-60p z99999 radius-5 max-height-450 overflow-hidden">
		<div className="height-100 width-100 scrollY">
			<SearchResult />
		</div>
	</div>
)

export default searchDropdown