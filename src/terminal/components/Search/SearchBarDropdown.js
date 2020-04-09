import React from 'react'
import { FiUser } from 'react-icons/fi'
import SingleBoutit from './SingleBoutit'

const searchBarDropdown = ({
	boutits,
	selectBoutit,
	selectProfile,
}) => (
	<div className="absolute-top-45 width-100 max-width-800 shadow-light background-white min-height-50 max-height-450 overflow-hidden flex-col z99999">
		<div className="scrollY">
				{2 < 1 ?
				<div className="width-100 height-60p flex-row centered-vertical padding-horizontal-10 add-to-option" onClick={selectProfile}>
						<div className="flex-row centered">
								{2 < 1 ?
										<div className="height-40p width-40p radius-20 margin-right-10 overflow-hidden">
												{/* <img src={Meteor.user().profile.picture_main_url} className="boutit-thumb" /> */}
										</div>
								:
										<div className="height-40p width-40p radius-20 border-grey margin-right-10 centered">
												<FiUser />
										</div>
								}
								<div>Tim</div>
						</div>
				</div>
				: null}
				{2 < 1 ?
					<div>
							{(boutits).map((boutit, index) => 
								<SingleBoutit
									boutit={boutit}
									key={index}
									index={index}
									selectBoutit={selectBoutit}
								/>
							)}
					</div>
				: null}
				{2 < 1 ?
						<div className="width-100 centered height-60p">
								<div className="text-grey">no results</div>
						</div>
				: null}
		</div>
	</div>
)

export default searchBarDropdown