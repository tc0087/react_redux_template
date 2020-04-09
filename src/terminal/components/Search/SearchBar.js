import React from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import SearchBarDropdown from './SearchBarDropdown'

const searchBar = ({
	boutits,
	boutitSearch,
	selectBoutit,
	selectProfile,
	showDropdown,
	state,
	user_boutits
}) => (
	<div className="width-100">
		<OutsideClickHandler onOutsideClick={() => console.log("outside")}>
			<div className={`height-40p width-100 space-between pointer max-width-400 ${state.error_types.includes('boutit') ? "border-red" : null} flex-row relative radius-5`}>
					<input
						onFocus={() => showDropdown(true)}
						className="create-input-detail text-16"
						placeholder="Add to"
						onChange={(e) => boutitSearch(e)}
						value={state.boutit_search}
					/>
					<div></div>
					{state.show_dropdown ? 
						<SearchBarDropdown
							boutits={boutits}
							user_boutits={user_boutits}
							state={state}
							selectBoutit={selectBoutit}
							selectProfile={selectProfile}
						/> 
					: null}
			</div>
		</OutsideClickHandler>
</div>
)

export default searchBar