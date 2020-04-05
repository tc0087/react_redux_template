import React from 'react'
import MenuOption from './MenuOption'

const section = (props) => (
	<div className="padding-horizontal-10">
		<div className="text-12 text-grey text-700 margin-vertical-10 padding-horizontal-5">{(props.data.label).toUpperCase()}</div>
		{(props.data.options).map((data, i) => <MenuOption key={i + data.value} i={i} data={data} />)}
	</div>
)

export default section