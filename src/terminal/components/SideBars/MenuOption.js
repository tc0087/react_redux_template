import React from 'react'
import { FiImage, FiUser, FiZap } from 'react-icons/fi'

const menuOption = (props) => (
	<div className="flex-col margin-bottom-10 padding-horizontal-10 pointer">
		<div className="flex-row centered-vertical background-grey-hover radius-5">
				<div className="height-30p width-30p flex-col centered margin-right-10">
						{props.data.icon === 'FiZap' && <FiZap className={`text-20 ${ 2 < 1 ? 'text-pink' : 'text-grey'} pointer`} />}
						{props.data.icon === 'FiImage' && <FiImage className={`text-20 ${ 2 < 1 ? 'text-pink' : 'text-grey'} pointer`} />}
						{props.data.icon === 'FiUser' && <FiUser className={`text-20 ${ 2 < 1 ? 'text-pink' : 'text-grey'} pointer`} />}
				</div>
				<div className={`text-16 text-500 ${2 < 1 ? 'text-pink' : 'text-grey'} pointer`}>{props.data.label}</div>
		</div>
	</div>
)

export default menuOption