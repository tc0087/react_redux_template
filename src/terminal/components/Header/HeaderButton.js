import React from 'react'
import {FiZap} from 'react-icons/fi'

const headerButton = (props) => (
	<div className="flex-col centered height-100">
		<div className="hide-above-1150 height-100">
			<div className="height-100 width-60p centered">
				<div className="height-40p width-40p centered radius-5 border-grey">
					<FiZap
						className="text-30"
					/>
				</div>
			</div>
		</div>
		<div className="hide-below-1150">
			<div className="height-100 width-60p centered">
			</div>
		</div>
	</div>
)

export default headerButton