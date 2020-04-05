import React from 'react'
import HeaderButton from './HeaderButton'

const headerLogo = (props) => (
	<div className="height-100 centered">
		<div className="hide-above-1150">
			<HeaderButton />
		</div>
		<div className="hide-below-1150">
			<HeaderButton />
		</div>
	</div>
)

export default headerLogo