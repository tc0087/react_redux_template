import React from 'react'
import { FiImage, FiUser, FiZap, FiMonitor, FiVolume2, FiShoppingBag, FiTrendingUp, FiPlusCircle, FiBell, FiMessageCircle } from 'react-icons/fi'
import { FaStore } from 'react-icons/fa'

const menuOption = ({history, data}) => (
	<div className="flex-col margin-bottom-10 padding-horizontal-10 pointer">
		<div className="flex-row centered-vertical background-grey-hover radius-5" onClick={() => history.push(data.path)}>
				<div className="height-30p width-30p flex-col centered margin-right-10">
						{data.icon === 'FiZap' && <FiZap className={`text-20 ${ 2 < 1 ? 'text-pink' : 'text-grey'} pointer`} />}
						{data.icon === 'FiImage' && <FiImage className={`text-20 ${ 2 < 1 ? 'text-pink' : 'text-grey'} pointer`} />}
						{data.icon === 'FiUser' && <FiUser className={`text-20 ${ 2 < 1 ? 'text-pink' : 'text-grey'} pointer`} />}
						{data.icon === 'FiShoppingBag' && <FiShoppingBag className={`text-20 ${ 2 < 1 ? 'text-pink' : 'text-grey'} pointer`} />}
						{data.icon === 'FiMonitor' && <FiMonitor className={`text-20 ${ 2 < 1 ? 'text-pink' : 'text-grey'} pointer`} />}
						{data.icon === 'FiVolume2' && <FiVolume2 className={`text-20 ${ 2 < 1 ? 'text-pink' : 'text-grey'} pointer`} />}
						{data.icon === 'FaStore' && <FaStore className={`text-20 ${ 2 < 1 ? 'text-pink' : 'text-grey'} pointer`} />}
						{data.icon === 'FiTrendingUp' && <FiTrendingUp className={`text-20 ${ 2 < 1 ? 'text-pink' : 'text-grey'} pointer`} />}
						{data.icon === 'FiPlusCircle' && <FiPlusCircle className={`text-20 ${ 2 < 1 ? 'text-pink' : 'text-grey'} pointer`} />}
						{data.icon === 'FiBell' && <FiBell className={`text-20 ${ 2 < 1 ? 'text-pink' : 'text-grey'} pointer`} />}
						{data.icon === 'FiMessageCircle' && <FiMessageCircle className={`text-20 ${ 2 < 1 ? 'text-pink' : 'text-grey'} pointer`} />}
				</div>
				<div className={`text-16 text-500 ${2 < 1 ? 'text-pink' : 'text-grey'} pointer`}>{data.label}</div>
		</div>
	</div>
)

export default menuOption