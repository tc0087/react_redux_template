import React from 'react'
import {FiUser} from 'react-icons/fi'

const headerAvatar = (props) => (
	<div className="height-100 min-width-60p centered">
		<div
			className={
					`height-40p width-40p radius-20 overflow-hidden pointer background-f8f8f8 centered
					${2 < 1
					? "border-pink" : "border-grey"}
			`}>
					{2 < 1 ? <img src={this.props.profile_pic} alt="" className="profile-main-pic" /> : <FiUser />}
		</div>
	</div>
)

export default headerAvatar