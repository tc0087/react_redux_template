import React from 'react'

const SearchOption = (props) => (
<div className="height-60p width-100 flex-row centered-vertical padding-left-10 border-transparent background-hover pointer" onClick={() => console.log("clicked")}>
	<div className="height-60p width-60p centered">
		<div className="height-40p width-40p radius-5"></div>
	</div>
	<div className="width-100 padding-left-10 height-100 centered-horizontal flex-col">
			<div className="text-heavy text-grey text-16">Untitled</div>
			<div className="flex-row centered-vertical"></div>
	</div>
</div>
)

export default SearchOption