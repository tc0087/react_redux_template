import React from 'react'
import { connect } from 'react-redux'
import logo from '../../../public/images/logo.png'

import * as actionCreators from '../../store/actions/index'

const headerButton = (props) => (
	<div className="flex-col centered height-100">
		<div className="hide-above-1150 height-100">
			<div className="height-100 centered">
				<div className={`height-40p width-40p radius-5 shadow-light centered overflow-hidden border-grey pointer`} onClick={props.toggleSideMenu}>
					<img src={logo} className="height-30p width-30p" alt="" />
				</div>
			</div>
		</div>
		<div className="hide-below-1000">
			<div className="height-100 width-60p centered">
			</div>
		</div>
	</div>
)

const mapDispatchToProps = dispatch => {
	return {
		hideSideMenu: () => dispatch(actionCreators.hideSideMenu()),
		toggleSideMenu: () => dispatch(actionCreators.toggleSideMenu())
	}
}

export default connect(null, mapDispatchToProps)(headerButton)