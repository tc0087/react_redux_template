import React from 'react'
import { FiBell, FiMessageCircle, FiUser } from 'react-icons/fi'
import OutsideClickHandler from 'react-outside-click-handler'
import Indicator from './Indicator'
import CreateMenu from './CreateMenu'

const headerActions = ({
	createMenu,
	hideCreateMenu,
	history,
	profile,
	toggleCreateMenu
}) => (
	<div className="height-100 flex-header flex-row space-between relative centered-vertical">
		<div></div>
		<div className="height-100 centered flex-row">
				<div className="flex-col relative margin-right-30 pointer centered hide-below-1000" onClick={() => history.push('/notifications')}>
						<FiBell className={`${2 < 1 ? "text-pink" : "text-grey"} text-24`} />
						<Indicator />
				</div>
				<div className="flex-col relative margin-right-30 pointer centered hide-below-1000" onClick={() => history.push('/chats')}>
						<FiMessageCircle className={`${2 < 1 ? "text-pink" : "text-grey"} text-24`} />
						<Indicator />
				</div>
				<OutsideClickHandler onOutsideClick={hideCreateMenu}>
					<div className="hide-below-1000 create-button text-800 centered margin-right-20 height-30p radius-5 padding-horizontal-10 shadow-light" onClick={toggleCreateMenu}>
							create
					</div>
					{createMenu ? <CreateMenu history={history} /> : null}
				</OutsideClickHandler>
				<div
					onClick={() => history.push('/me')}
					className={
							`height-40p width-40p radius-20 overflow-hidden pointer background-grey centered shadow-light
							${ 2 < 1
							? "border-pink" : "border-grey"}
					`}>
							{profile.pic ? <img src={profile.pic} className="profile-main-pic" alt="" /> : <FiUser />}
				</div>
		</div>
	</div>
)

export default headerActions