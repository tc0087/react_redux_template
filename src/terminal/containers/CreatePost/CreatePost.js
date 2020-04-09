import React, { Component } from 'react'
import { FiArrowLeft, FiZap, FiUser, FiSearch, FiCamera, FiType } from 'react-icons/fi'
import { MdCancel } from 'react-icons/md'
import OutsideClickHandler from 'react-outside-click-handler'
import PlacesAutocomplete from 'react-places-autocomplete'
import TextareaAutosize from 'react-textarea-autosize'
import SearchBar from '../../components/Search/SearchBar'
import MediaOverlay from '../Overlays/MediaOverlay'

import Aux from '../../hoc/Aux'

class CreatePost extends Component{
	state = {
		address: '',
		boutit_search: '',
		boutits: [],
		boutit_id: null,
		crop: {
			aspect: 1,
			x: 0,
			y: 0,
			width: 400
		},
		croppedImageUrl: null,
		error: false,
		error_types: [],
		location: false,
		location_name: undefined,
		location_latitude: 0,
		location_longitude: 0,
		location_address: undefined,
		location_place_id: undefined,
		profile: false,
		overlay: 'media',
		overlay_visible: false,
		media: true,
		show_dropdown: false,
		showLocation: false,
		text: '',
		view: 'media',
		url: null,
		uiLoading: false
	}

	closeLocation = () => {
    this.setState({showLocation: false})
	}
	
	render() {
		const {history} = this.props
		return(
			<Aux>
				<div className="height-100v width-100 overflow-hidden flex-col background-white">
					<div className="content-wrapper padding-bottom-80 height-100">
							<div className="flex-col centered">
									<div className="width-100 height-60p flex-row space-between centered padding-horizontal-20">
											<div className="height-60p flex-row space-between centered pointer" onClick={() => history.goBack()}>
													<FiArrowLeft className="margin-right-10 text-pink text-20" />
													<div className="text-pink text-900 text-20">back</div>
											</div>
											<div></div>
									</div>
									<div className="width-100 max-width-400 flex-row centered margin-bottom-5 create-hover">
											<div className="height-40p width-40p flex-col centered">
												{(!this.state.profile && !this.state.boutit_id) ? <FiZap className="create-input-icon" /> : null}
												{/* {this.state.profile &&  (2 < 1) ? <div className="height-30p width-30p radius-15 overflow-hidden"><img src={Meteor.user().profile.main_pic} className="boutit-thumb" /></div> : null} */}
												{this.state.profile && !(2 < 1) ? <div className="height-30p width-30p centered radius-15 overflow-hidden border-grey"><FiUser /></div> : null}
												{(this.state.boutits.length > 0) ? <div className="height-30p width-30p centered radius-15 overflow-hidden"><img src={this.state.boutits[0].main_pic} className="boutit-thumb" alt="" /></div> : null}
											</div>
											<SearchBar
												boutitSearch={this.boutitSearch}
												resetState={this.resetState}
												state={this.state}
												selectBoutit={this.selectBoutit}
												selectProfile={this.selectProfile}
												showDropdown={this.showDropdown}
											/>
									</div>
									<div className={`width-100 background-white flex-col centered ${this.state.view === 'text' ? "margin-bottom-10" : null}`}>
											<div className="post-create-photo border-grey radius-5">
													{this.state.view === 'media' && this.state.url ? <img src={this.state.url} className="person-boutit-image" alt="" /> : null}
													{this.state.view === 'media' && !this.state.url ?
															<div className="relative height-100 width-100 relative centered">
																	<FiCamera className="text-60 text-grey" />
																	<input type="file" className="file-upload" onChange={this.onSelectFile} />
															</div>
													:
															null
													}
													{this.state.view === 'text' ?
															<textarea
																	className="width-100 height-100 no-border no-outline radius-5 padding-20 text-16 more-input"
																	placeholder="Say something..."
																	onChange={(e) => this.captureText(e)}
															/>
													: null}
											</div>
									</div>
									{this.state.view === 'media' ?
									<div className="width-100 max-width-400 centered min-height-50 margin-bottom-10">
											<TextareaAutosize
												autoFocus={true}
												className="text-18 text-grey text-bold width-100 no-outline post-title-input"
												placeholder="Say something..."
												onChange={(e) => this.captureText(e)}
											/>
									</div> : null}
							</div>
					</div>
					<div className="absolute-bottom width-100 flex-row background-white height-60p border-top-grey centered-vertical padding-horizontal-20">
							<div className="flex-33 flex-row centered space-between relative">
									<OutsideClickHandler onOutsideClick={() => this.closeLocation()}>
											{this.state.location_name ?
													<div onClick={() => this.showLocation()} className="padding-horizontal-20 flex-row radius-20 height-40p border-grey centered background-light-grey pointer">
															<div className="text-grey text-bold text-18 min-width-100 margin-right-10">{this.state.location_name}</div>
															<MdCancel className="text-grey text-18" onClick={(e) => this.clearLocation(e)} />
													</div>
												:
													<div className="text-blue pointer" onClick={() => this.showLocation()}>Add location</div>
											}
											<div></div>
											{this.state.showLocation ?
													<div className="absolute-location shadow-light width-300p background-white flex-col">
																	<PlacesAutocomplete
																				value={this.state.address}
																				onChange={this.addressChange}
																				onSelect={this.addressSelect}
																				>
																				{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
																					<div className="width-100 centered flex-col relative">
																						<div className="flex-row centered border-grey width-100">
																								<div className="height-40p width-40p centered">
																										<FiSearch className="text-20" />
																								</div>
																								<input
																									{...getInputProps({
																										placeholder: 'Search location...',
																										className: 'width-100 height-40p no-outline no-border padding-right-10 relative',
																										autoFocus: true
																									})}
																								/>
																						</div>
																						<div className="width-100 background-white">
																							{loading && <div className="width-100 padding-10 height-40px border-left-grey border-bottom-grey border-right-grey border-top-grey centered-vertical">Loading...</div>}
																							{suggestions.map(suggestion => {
																								const className = suggestion.active
																									? 'width-100 padding-10 height-40p border-left-grey border-bottom-grey border-right-grey centered-vertical'
																									: 'width-100 padding-10 height-40p border-left-grey border-bottom-grey border-right-grey centered-vertical';
																								// inline style for demonstration purpose
																								const style = suggestion.active
																									? { backgroundColor: 'rgba(247,78,130,1)', cursor: 'pointer', color: '#fff' }
																									: { backgroundColor: '#ffffff', cursor: 'pointer' };
																								return (
																									<div
																										{...getSuggestionItemProps(suggestion, {
																											className,
																											style,
																										})}
																									>
																										<span>{suggestion.description}</span>
																									</div>
																								);
																							})}
																						</div>
																					</div>
																				)}
																			</PlacesAutocomplete>
													</div>
													:
														null}
										</OutsideClickHandler>
							</div>
							<div className="flex-33 centered">
									<div className="flex-row centered border-grey">
										<div className={`height-40p width-50p centered pointer ${this.state.view === 'media' ? "background-pink" : "background-white"}`} onClick={() => this.setView('media')}>
													<FiCamera className={`text-24 ${this.state.view === 'media' ? "text-white" : "text-grey"}`} />
										</div>
										<div className={`height-40p width-50p centered pointer ${this.state.view === 'text' ? "background-pink" : "background-white"}`} onClick={() => this.setView('text')}>
													<FiType className={`text-24 ${this.state.view === 'text' ? "text-white" : "text-grey"}`} />
										</div>
									</div>
							</div>
							<div className="flex-33 flex-row space-between">
									<div></div>
									<div className="flex-row width-100 max-width-400">
											<div className="width-100 max-width-200 border-pink height-45p radius-5 centered margin-right-10 centered-vertical pointer" onClick={() => history.goBack()}>
													<div className="text-pink text-bold text-16">Cancel</div>
											</div>
											<div className="width-100 max-width-200 background-pink height-45p radius-5 centered centered-vertical pointer" onClick={() => this.createPost()}>
													<div className="text-white text-bold text-16">POST</div>
											</div>
									</div>
							</div>
					</div>
					{this.state.overlay_visible ?
						<OutsideClickHandler onOutsideClick={() => this.showOverlay()}>
								<div className="absolute-top background-overlay width-100 flex-col overflow-hidden">
									{this.state.overlay === 'media' ? <MediaOverlay uiLoadingToggle={this.uiLoadingToggle} addBoutItPhoto={this.addBoutItPhoto} handleFileUpload={this.handleFileUpload} onImageLoaded={this.onImageLoaded} onCropChange={this.onCropChange} onCropComplete={this.onCropComplete} onSelectFile={this.onSelectFile} showOverlay={this.showOverlay} state={this.state} /> : null}
								</div>
						</OutsideClickHandler>
					: null}
				</div>
			</Aux>
		)
	}
}

export default CreatePost