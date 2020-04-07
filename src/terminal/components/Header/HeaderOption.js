import React from 'react'
import {FiUser, FiMessageCircle, FiBell} from 'react-icons/fi'

const headerOption = ({
	history,
	path,
	profile
}) => (
	<div className="height-100 min-width-60p centered">
		<div
			className={`height-40p width-40p radius-50 overflow-hidden pointer background-white centered shadow-light ${2 < 1 ? "border-pink" : "border-grey"}`}
			onClick={() => history.push(path)}
		>
			{2 < 1 ? <img src={profile.picture_main_url} alt="" className="profile-main-pic" /> : null}
			{2 > 1 && path === '/notifications' && <FiBell className="text-20 text-blue" />}
			{2 > 1 && path === '/chats' && <FiMessageCircle className="text-20 text-red" />} 
			{2 > 1 && path === '/me' && <FiUser className="text-20 text-orange" />}
		</div>
	</div>
)

export default headerOption