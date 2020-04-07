import React from 'react'
import HeaderButton from './HeaderButton'

const headerLogo = (props) => (
	<div className="height-100 centered-vertical flex-header">
		<div className="hide-above-1000">
			<HeaderButton />
		</div>
		<div className="hide-below-1000 flex-row centered">
			<div className="slogan-text pointer">boutIt</div>
		</div>
	</div>
)

export default headerLogo