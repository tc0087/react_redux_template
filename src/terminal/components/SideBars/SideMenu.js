import React from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import MenuOption from './MenuOption'
import logo from '../../../public/images/logo.png'

const sideMenu = ({
	authenticatedRoutes,
	createRoutes,
	hideSideMenu,
	history,
	meRoutes,
	sideMenu
}) => (
	<OutsideClickHandler onOutsideClick={hideSideMenu}>
		<div id="mainMenu" className={`absolute-top height-100v background-white width-80 z99999 shadow-bottom flex-col ${sideMenu ? "menu-items-show" : "menu-items-hide"}`}>
				<div className="height-60p width-100 centered-vertical">
					<div className="width-100 padding-horizontal-5 overflow-hidden">
						<div className="flex-row overflow-hidden centered-vertical padding-5 radius-5 background-grey-hover pointer">
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
						<div className="margin-bottom-40">
							<div className="text-12 text-grey text-700 margin-vertical-10 padding-horizontal-5">EXPLORE</div>
							{(authenticatedRoutes).map((data, i) => 
								<MenuOption
									data={data}
									history={history}
									i={i}
									key={i + data.value}
								/>
							)}
						</div>
						<div className="margin-bottom-40">
							<div className="text-12 text-grey text-700 margin-vertical-10 padding-horizontal-5">CREATE</div>
							{(createRoutes).map((data, i) => 
								<MenuOption
									data={data}
									history={history}
									i={i}
									key={i + data.value}
								/>
							)}
						</div>
						<div className="text-12 text-grey text-700 margin-vertical-10 padding-horizontal-5">ME</div>
						{(meRoutes).map((data, i) => 
							<MenuOption
								data={data}
								history={history}
								i={i}
								key={i + data.value}
							/>
						)}
					</div>
				</div>
		</div>
	</OutsideClickHandler>
)

export default sideMenu