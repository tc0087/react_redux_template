import React from 'react'
import { FiZap, FiImage, FiShoppingBag } from 'react-icons/fi'

const createMenu = ({
	history
}) => (
	<div className="absolute-create background-white flex-row height-100p width-300p shadow-dark radius-5">
	<div className="height-100p width-100p centered flex-col pointer-pink" onClick={() => history.push('/create_boutit')}>
		<div className="height-40p">
			<FiZap className="icon-24" />
		</div>
		<div>boutIt</div>
	</div>
	<div className="height-100p width-100p centered flex-col pointer-pink" onClick={() => history.push('/create_post')}>
		<div className="height-40p">
			<FiImage className="icon-24" />
		</div>
		<div>post</div>
	</div>
	<div className="height-100p width-100p centered flex-col pointer-pink" onClick={() => history.push('/create_product')}>
		<div className="height-40p">
			<FiShoppingBag className="icon-24" />
		</div>
		<div>product</div>
	</div>
</div> 
)

export default createMenu