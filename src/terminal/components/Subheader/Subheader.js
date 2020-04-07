import React from 'react'
import { withRouter } from 'react-router-dom'
import { MdArrowDropDownCircle, MdCancel } from 'react-icons/md'

const subheader = ({
	location
}) => (
	<div className="height-50p flex-row width-100 background-white border-bottom-grey space-between overflow-hidden">
		<div className="centered flex-row space-between width-100 header-padding scrollable scrollbar-hide">
				<div className="flex-row height-100 centered-vertical">
					<div
						className={`centered flex-row height-30p radius-5 padding-horizontal-10 margin-right-10 text-500 pointer ${location.pathname.split('/')[1] === 'all' ? "background-hover text-grey border-grey" : "background-pink text-white pointer-filter"}`}
						onClick={() => this.props.showOverlay('boutit')}
					>
							<div className="margin-right-10 text-600 text-14">
								All
							</div>
							{location.pathname.split('/')[1] !== 'all' ? <MdCancel className="pointer-grey-text" /> : null}
					</div>
					<div className={`centered text-600 text-14 subheader-text height-30p radius-5 padding-horizontal-10 margin-right-10 ${2 < 1 ? "background-pink text-white pointer-filter" : "background-white text-grey border-grey pointer-pink-light"}`} >
							What
					</div>
					<div className={`centered text-600 text-14 subheader-text height-30p radius-5 padding-horizontal-10 margin-right-10 ${2 < 1 ? "background-pink text-white pointer-filter" : "background-white text-grey border-grey pointer-pink-light"}`}>
						Where
					</div>
					<div className={`centered text-600 text-14 subheader-text height-30p radius-5 padding-horizontal-10 margin-right-10 ${2 < 1 ? "background-pink text-white pointer-filter" : "background-white text-grey border-grey pointer-pink-light"}`}>
						When
					</div>
					<div className={`centered text-600 text-14 subheader-text height-30p radius-5 padding-horizontal-10 margin-right-10 ${2 < 1 ? "background-pink text-white pointer-filter" : "background-white text-grey border-grey pointer-pink-light"}`}>
						Who
					</div>
				</div>
				<div className="flex-row centered pointer">
					<div className="text-600 text-16 text-blue margin-right-5">Filter</div>
					<MdArrowDropDownCircle className="text-18 text-blue margin-right-10" />
				</div>
		</div>
		<div></div>
	</div>
);

export default withRouter(subheader);
