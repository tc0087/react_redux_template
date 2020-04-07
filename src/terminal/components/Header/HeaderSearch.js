import React from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import {FiSearch} from 'react-icons/fi'

import SearchDropdown from './SearchDropdown'


const headerSearch = ({
	hideSearchDropdown,
	searchDropdown,
	toggleSearchDropdown
}) => (
	<div className="width-100 height-100 flex-col centered width-100-child max-width-500 padding-horizontal-10 max-width-350 margin-horizontal-10">
		<OutsideClickHandler onOutsideClick={hideSearchDropdown} display='flex'>
			<div className="flex-row centered radius-5 relative background-white height-40p width-100 shadow-light border-grey">
				<div className="height-100 centered width-40p cursor-text">
					<FiSearch />
				</div>
				<input
					className="no-border no-outline width-100 background-transparent text-16 flex-100"
					placeholder="Search"
					onFocus={toggleSearchDropdown}
				/>
				{searchDropdown && <SearchDropdown />}
			</div>
		</OutsideClickHandler>
	</div>
)

export default headerSearch