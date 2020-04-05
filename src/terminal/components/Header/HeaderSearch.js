import React from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import {FiSearch} from 'react-icons/fi'


const headerSearch = (props) => (
	<div className="width-100 height-100 flex-col centered width-100-child max-width-500">
		<OutsideClickHandler onOutsideClick={() => console.log("cool")} display='flex'>
			<div className="flex-row centered radius-5 relative background-f8f8f8 height-40p border-grey width-100">
				<div className="height-100 centered width-40p cursor-text">
					<FiSearch />
				</div>
				<input
					className="no-border no-outline width-100 background-transparent text-16"
					placeholder="Search"
				/>
			</div>
		</OutsideClickHandler>
	</div>
)

export default headerSearch