import React from 'react'
import HeaderLogo from './HeaderLogo'
import HeaderSearch from './HeaderSearch'
import HeaderAvatar from './HeaderAvatar'

const header = (props) => (
	<div className="height-60p width-100 flex-col background-white">
		<div className="height-100 relative border-bottom-grey flex-col">
			<div className="height-100 flex-row width-100 space-between">
				<HeaderLogo />
				<HeaderSearch />
				<HeaderAvatar />
			</div>
		</div>
	</div>
)

export default header