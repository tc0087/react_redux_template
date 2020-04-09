import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import _ from 'lodash'

import SideMenu from './SideMenu'
import MenuOption from './MenuOption'

import * as actionCreators from '../../store/actions/index'

import logo from '../../../public/images/logo.png'

const sideBar = ({
	authenticatedRoutes,
	createRoutes,
	hideSideMenu,
	history,
	meRoutes,
	sideMenu
}) => (
	<div>
		<div className="hide-below-1000 width-250p flex-col height-100 background-white">
			<div className="height-100 width-100 relative border-right-grey flex-col">
				<div className="height-60p width-100 centered-vertical">
					<div className="width-100 padding-horizontal-5 overflow-hidden">
						<div className="flex-row overflow-hidden centered-vertical padding-5 radius-5 background-grey-hover pointer" onClick={() => history.push('/info')}>
							<div className="flex-col centered-vertical margin-right-10">
									<div className={`height-40p width-40p radius-5 centered overflow-hidden border-grey shadow-light`}>
										<img src={logo} className="height-30p width-30p" alt="" />
									</div>
							</div>
							<div className="text-ellipsis text-700 text-18 text-grey">tims crazy zoo fun zone ya didg fame</div>
						</div>
					</div>
				</div>
				<div className="flex-100 flex-col padding-vertical-10">
					<div className="padding-horizontal-10">
						<div className="text-12 text-grey text-700 margin-vertical-10 padding-horizontal-5">EXPLORE</div>
						{(authenticatedRoutes).map((data, i) => <MenuOption key={i + data.value} i={i} data={data} history={history} />)}
					</div>
				</div>
			</div>
		</div>
		<SideMenu
			authenticatedRoutes={authenticatedRoutes}
			createRoutes={createRoutes}
			hideSideMenu={hideSideMenu}
			history={history}
			meRoutes={meRoutes}
			sideMenu={sideMenu}
		/>
	</div>
)

const mapStateToProps = state => {
	console.log(state.layout.sideMenu)
	return {
		createRoutes: state.layout.createRoutes,
		meRoutes: state.layout.meRoutes,
		sideMenu: state.layout.sideMenu,
		authenticatedRoutes: _.filter(state.layout.authenticatedRoutes, {'menuItem': true})
	}
}

const mapDispatchToProps = dispatch => {
	return {
		hideSideMenu: () => dispatch(actionCreators.hideSideMenu()),
		toggleSideMenu: () => dispatch(actionCreators.toggleSideMenu())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(sideBar))