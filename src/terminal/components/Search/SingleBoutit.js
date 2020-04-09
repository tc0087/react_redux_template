import React from 'react'

const singleBoutit = ({
	boutit,
	selectBoutit
}) => (
	<div className="width-100 height-60p flex-row centered-vertical padding-horizontal-10 add-to-option" onClick={() => selectBoutit(boutit)}>
		<div className="height-40p width-40p radius-20 margin-right-10 overflow-hidden">
				<img src={boutit.picture_main_url} className="boutit-thumb" alt="" />
		</div>
		<div>{2 < 1 ? boutit.title : 'no title'}</div>
	</div>
)

export default singleBoutit