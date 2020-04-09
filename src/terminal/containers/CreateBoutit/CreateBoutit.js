import React, { Component } from 'react'
import { MdClose } from 'react-icons/md'
import { FiCamera, FiZap, FiAlignLeft, FiMapPin, FiClock, FiUsers } from 'react-icons/fi'
import { Row, Col } from 'react-bootstrap'
import moment from 'moment'
import Collapsible from 'react-collapsible'
import PlacesAutocomplete, {
	geocodeByAddress,
	getLatLng,
} from 'react-places-autocomplete'
import Switch from 'react-switch'


import Aux from '../../hoc/Aux'
import Type from '../../components/CreateBoutit/Type'
import TypePlaceholder from '../../components/CreateBoutit/TypePlaceholder'
import SearchBar from '../../components/Search/SearchBar'
import TimeWindow from '../../components/CreateBoutit/TimeWindow'

// const google = window.google

class CreateBoutit extends Component{
	state = {
		address: '',
		boutits: [],
		boutit_ids: [],
		boutit_search: '',
		calendar_step: 0,
		calendarTimes: [],
		calendarTimesGrouped: {},
		cost: 0,
		cost_focused: false,
		crop: {
			aspect: 1,
			x: 0,
			y: 0,
			width: 400
		},
		croppedImageUrl: null,
		colors: [{
			colorName: 'Flamingo',
			color_class_name: 'background-pink'
		},
		{
			colorName: 'Ocean',
			color_class_name: 'background-blue'
		},
		{
			colorName: 'Tomato',
			color_class_name: 'background-red'
		},
		{
			colorName: 'Basil',
			color_class_name: 'background-green'
		},
		{
			colorName: 'Grape',
			color_class_name: 'background-purple'
		},
		{
			colorName: 'Night',
			color_class_name: 'background-black'
		},
		{
			colorName: 'Chocolate',
			color_class_name: 'background-brown'
		},
		{
			colorName: 'Flame',
			color_class_name: 'background-orange'
		}],
		country:
			{
					"symbol": "CA$",
					"currency_name": "Canadian Dollar",
					"country_name": "Canada",
					"symbol_native": "$",
					"decimal_digits": 2,
					"rounding": 0,
					"code": "CAD",
					"name_plural": "Canadian dollars",
					"payment_country_code": 'CA',
					"payment_provider": 'stripe'
			},
		currency:
			{
					"symbol": "CA$",
					"currency_name": "Canadian Dollar",
					"country_name": "Canada",
					"symbol_native": "$",
					"decimal_digits": 2,
					"rounding": 0,
					"code": "CAD",
					"name_plural": "Canadian dollars",
					"payment_country_code": 'CA',
					"payment_provider": 'stripe'
			},
		dates: {},
		date_object: {},
		dateModalView: 'add',
		dates_open: false,
		diem: undefined,
		dateModal: false,
		dateAddColor: {
			colorName: 'Flamingo',
			color_class_name: 'background-pink'
		},
		dateStartTime: null,
		dateEndTime: null,
		dateRepeat: 'No repeat',
		dateAddOptions: false,
		dateFocused: null,
		deleteModal: false,
		deleteOption: 0,
		deleteTime: {},
		description: '',
		displayDates: {},
		editTime: '',
		email: '',
		end_date: null,
		end_date_focused: false,
		end_date_object: {},
		end_hours: null,
		end_minutes: null,
		end_diem: null,
		end_time: null,
		end_time_focused: false,
		error: false,
		error_types: [],
		file: null,
		filter_date: null,
		focusedDay: null,
		frequency: null,
		hashtag: null,
		hours: undefined,
		launched: true,
		loading: false,
		location: null,
		location_name: null,
		location_latitude: 0,
		location_longitude: 0,
		location_address: null,
		location_website: null,
		location_phone_number: null,
		location_picture_main_url: null,
		location_hours: null,
		location_rating: null,
		location_photos: null,
		location_place_id: null,
		markedDates: {},
		minutes: undefined,
		modifyModal: false,
		modifyOption: 0,
		modifiedTime: {},
		overlay: 'category',
		overlay_visible: false,
		picture_main_url: null,
		picture_urls: [],
		profile: false,
		private_boutit: false,
		repeatDropdown: false,
		repeatDays: [],
		repeatEnds: 'never',
		repeatFrequency: 'No repeat',
		repeatOnWeeks: null,
		repeatOption: 0,
		repeat_focused: false,
		repeat_on_date: null,
		repeat_on_date_object: {},
		repeat_on_focused: false,
		repeat_on_hours: null,
		repeat_on_minutes: null,
		repeat_on_diem: null,
		repeat_on_time: null,
		repeatModal: false,
		repeatsPhrase: null,
		repeatSeriesArr: [],
		scale: 1,
		selectedDate: null,
		selectedDates: [],
		search_active: false,
		search_input_active: false,
		search_input: '',
		seriesView: 'all',
		selectedTimes: {},
		show_dropdown: false,
		spots: '',
		src: null,
		start_date: null,
		start_date_focused: false,
		start_date_object: {},
		start_hours: null,
		start_minutes: null,
		start_diem: null,
		start_time: undefined,
		start_time_focused: false,
		stripe_type: 'personal',
		time_selected: false,
		title: null,
		type: null,
		types: [],
		type_view: 'search',
		uiLoading: false
	}

	addressChange = (address) => {
    this.setState({address})
  }

  addressSelect = (address, placeId) => {
    this.initMap(placeId)
    var location_name = address.split(',')[0];
    this.setState({location_address: address, address, location_name})
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.setLatLng(latLng))
      .catch(error => console.error('Error', error));
  }

  boutitSearch = (e) => {
    this.setState({boutit_search: e.target.value})
  }

  initMap = (placeId) => {
    // const _this = this;
    // var request = {placeId: placeId, fields: ['name', 'formatted_address', 'geometry', 'formatted_phone_number', 'website', 'photos']}
    // var map = new google.maps.Map(document.getElementById('map'), {
    //   center: {lat: -33.866, lng: 151.196},
    //   zoom: 15,
    //   streetViewControl: false,
    //   mapTypeControl: false
    // });
    // var service = new google.maps.places.PlacesService(document.createElement('div'))
    // service.getDetails(request, function(place, status) {
    //   if (status === google.maps.places.PlacesServiceStatus.OK) {
    //       _this.setState({
    //           location: place,
    //           location_name: place.name,
    //           location_picture_main_url: place.photos && place.photos[0] ? place.photos[0].getUrl({maxHeight: 500}) : null,
    //           location_latitude: place.geometry.location.lat(),
    //           location_longitude: place.geometry.location.lng(),
    //           location_address: place.formatted_address,
    //           location_website: place.website,
    //           location_phone_number: place.formatted_phone_number,
    //           location_rating: place.rating,
    //           location_place_id: placeId
    //       })
    //       const locationDoc = {
    //         address: place.formatted_address ? place.formatted_address : null,
    //         boutit_id: null,
    //         collection_name: 'locations',
    //         google_place_id: placeId ? placeId : null,
    //         google_rating: place.rating ? place.rating : null,
    //         latitude: place.geometry.location.lat(),
    //         longitude: place.geometry.location.lng(),
    //         open_hours: {},
    //         phone_number: place.formatted_phone_number ? place.formatted_phone_number : null,
    //         picture_main_url: place.photos && place.photos[0] ? place.photos[0].getUrl({maxHeight: 500}) : null,
    //         picture_urls: [],
    //         query_obj: {type: 'Point', coordinates: [ place.geometry.location.lng, place.geometry.location.lat]},
    //         search_count: 0,
    //         source: 'boutit',
    //         title: place.name,
    //         website: place.website ? place.website : null
    //       }
    //       const admins = []
    //       const newDate = moment(new Date())
    //       const creator_birthday = null
    //       const birthdate = null
    //       const average_age = null
    //       const birthdays = []
    //       const boutit_ids = _this.state.boutit_ids
    //       const boutit_count = 0
    //       const boutit_parent_id = null
    //       const boutIt_reference = Math.random().toString(36).replace(/[^a-z]+/g, '') + Math.random().toString(36).replace(/[^a-z0-9]+/g, '') + Math.random().toString(36).replace(/[^a-z]+/g, '') + Math.random().toString(36).replace(/[^a-z]+/g, '')
    //       const boutIt_requests = []
    //       const calendar_times = _this.state.calendarTimes
    //       const calendar_times_obj = _this.state.calendarTimesGrouped
    //       const collection_name = 'boutits'
    //       const confirmed = []
    //       const cost = _this.state.cost
    //       const created_at = new Date().toISOString()
    //       const creator_id = null
    //       const creator_name = null
    //       const creator_pic = null
    //       const creator_profile = {}
    //       const country = _this.state.country
    //       const description = _this.state.description
    //       const invites = []
    //       const invite_ids = []
    //       const location = place
    //       const location_id = ''
    //       const location_name = place.name
    //       const location_address = place.formatted_address
    //       const location_latitude = place.geometry.location.lat()
    //       const location_longitude = place.geometry.location.lng()
    //       const location_website = place.website
    //       const location_phone_number = place.formatted_phone_number
    //       const location_picture_main_url = _this.state.location_picture_main_url
    //       const location_hours = _this.state.location_hours
    //       const location_rating = place.rating
    //       const location_google_place_id = placeId
    //       const not_boutit = []
    //       const parent_ids = _this.state.boutit_ids
    //       const people_requests = []
    //       const people_count = 0
    //       const picture_main_url = _this.state.picture_main_url
    //       const picture_urls = []
    //       const post_count = 0
    //       const post_ids = []
    //       const private_boutit = _this.state.private_boutit
    //       const product_requests = []
    //       const products = []
    //       const promotion_requests = []
    //       const promotions = []
    //       const rating = null
    //       const ratings_array = []
    //       const rating_ids = []
    //       const review_status = 'none'
    //       const title = _this.state.title
    //       const type_text = _this.state.type ? _this.state.type.text : null
    //       const type_icon = _this.state.type ? _this.state.type.icon : null
    //       const type_id = _this.state.type ? _this.state.type._id : null
    //       const verified = false
    //       const boutitDoc = {
    //         admins: admins,
    //         average_age: average_age,
    //         birthdays: birthdays,
    //         boutit_ids: boutit_ids,
    //         boutit_count: boutit_count,
    //         boutit_parent_id: boutit_parent_id,
    //         boutit_requests: boutIt_requests,
    //         business: null,
    //         business_boutit_id: null,
    //         calendar_times: calendar_times,
    //         collection_name: collection_name,
    //         confirmed: confirmed,
    //         cost: cost,
    //         created_at: created_at,
    //         creator_id: creator_id,
    //         creator_name: creator_name,
    //         creator_pic: creator_pic,
    //         creator_profile: creator_profile,
    //         country: country,
    //         description: description,
    //         employee_requests: [],
    //         females_count: 2 < 1 ? 1 : 0,
    //         flags: 0,
    //         flag_ids: [],
    //         franchise_boutit_ids: [],
    //         frequency: _this.state.frequency,
    //         invites: invites,
    //         invite_ids: invite_ids,
    //         location_ids: [],
    //         location_id: null,
    //         location_geoquery: {type: 'Point', coordinates: [location_longitude, location_latitude]},
    //         location_name: location_name ? location_name : null,
    //         location_address: location_address ? location_address : null,
    //         location_latitude: location_latitude ? location_latitude : null,
    //         location_longitude: location_longitude ? location_longitude : null,
    //         location_website: location_website ? location_website : null,
    //         location_phone_number: location_phone_number ? location_phone_number : null,
    //         location_picture_main_url: location_picture_main_url ? location_picture_main_url : null,
    //         location_hours: location_hours ? location_hours : null,
    //         location_rating: location_rating ? location_rating : null,
    //         location_google_place_id: location_google_place_id ? location_google_place_id : null,
    //         males_count: 2 < 1 ? 1 : 0,
    //         nonBinary_count: 2 < 1 ? 1 : 0,
    //         not_boutit: not_boutit,
    //         parent_ids: parent_ids,
    //         people_requests: people_requests,
    //         people_count: people_count,
    //         picture_main_url: picture_main_url,
    //         picture_urls: picture_urls,
    //         post_count: post_count,
    //         post_ids: post_ids,
    //         product_requests: product_requests,
    //         products: products,
    //         promotion_requests: promotion_requests,
    //         promotions: promotions,
    //         private_boutit: private_boutit,
    //         rating: rating,
    //         rating_array: [],
    //         rating_ids: [],
    //         review_status: 'none',
    //         search_count: 0,
    //         source: 'location',
    //         title: title,
    //         type_text: type_text,
    //         type_icon: type_icon,
    //         type_id: type_id,
    //         verified: false,
    //         verified_date: null,
    //         verified_business: false,
    //         verified_business_date: null,
    //         verified_employee_name: null,
    //         verified_employee_title: null,
    //         verified_employee_email: null,
    //         verified_employee_id_url: null,
    //         verifier_employee_id: null,
    //         web_app: false,
    //         web_app_id: null,
    //         web_app_url: null
    //       }
          // Meteor.call('createLocation', locationDoc, boutitDoc, (err, res) => {
          //   if(err){
          //     console.log(err)
          //   }else{
          //     console.log(res)
          //   }
          // })
      // }
    // });
  }

	onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () =>
        this.setState({ src: reader.result, overlay: 'media', overlay_visible: !this.state.overlay_visible}),
      )
      reader.readAsDataURL(e.target.files[0])
      e.target.value = null
    }
	}
	
	setDescription = (e) => {
    this.setState({description: e.target.value})
	}

  setLatLng = (latLng) => {
      this.setState({location_latitude: latLng.lat, location_longitude: latLng.lng})
	}
	

  setPrivacy = () => {
    this.setState({private_boutit: !this.state.private_boutit})
  }

	setTitle = (e) => {
    this.setState({title: e.target.value})
	}

	showDropdown = (value) => {
    this.setState({show_dropdown: value})
  }

	showOverlay = (value) => {
    if(value === 'repeats'){
      let repeatDays = [...this.state.repeatDays]
      let dayNum = moment(new Date()).day()
      if(repeatDays.includes(dayNum)){
        this.setState({repeatOnWeeks: 1})
      }else if(!repeatDays.includes(dayNum) && repeatDays.length > 0){
        this.setState({repeatOnWeeks: 1, repeatDays: [dayNum]})
      }else{
        this.setState({repeatOnWeeks: 1, repeatDays: [dayNum]})
      }
    }
    this.setState({
			overlay: value,
			overlay_visible: !this.state.overlay_visible,
			types: this.props.all_types,
			type_view: 'search'
		})
  }
	
	render() {
		const {history} = this.props
		return(
			<Aux>
				<div className="height-100 width-100flex-col relative">
					<div className="width-100 height-60p centered">
						<div className="flex-row flex-100 padding-horizontal-20 space-between">
							<div className="height-60p flex-row space-between centered pointer">
									<div className="slogan-text text-30">boutIt</div>
							</div>
							<div className="height-60p flex-row space-between centered pointer">
								<MdClose className="pointer-pink-text-hover text-30" onClick={() => history.goBack()} />
							</div>
						</div>
					</div>
					<div className="create-wrapper width-100 centered flex-col overflow-hidden">
						<div className="height-100 width-100 scrollY">
							<Row className="width-100 centered">
								<Col xs={12} sm={12} md={4} lg={4} className="centered">
								</Col>
								<Col xs={12} sm={12} md={4} lg={4} className="flex-col centered width-90">
									<div className="width-100 max-width-400 flex-col centered">
										<div className="flex-col centered margin-bottom-10 create-title border-bottom-grey padding-bottom-2">
											<input className="create-input-title create-hover padding-horizontal-10" placeholder="Add title" onChange={this.setTitle} />
										</div>
									</div>
									<div className="width-100 max-width-400 flex-row margin-bottom-10 space-between">
										{this.state.type ? 
											<Type
												showOverlay={this.showOverlay}
												state={this.state}
											/>
											: 
											<TypePlaceholder
												showOverlay={this.showOverlay}
												state={this.state}
											/>
										}
										<div className={this.state.error_types.includes('pic') ? "max-width-300 width-100 max-height-300 height-90 radius-5 centered flex-row border-red create-pic-hover overflow-hidden" : "max-width-300 width-90 max-height-300 height-90 border-grey radius-5 flex-row centered create-pic-hover overflow-hidden"}>
											<div style={{
												'width': '100%',
												'overflow': 'hidden',
												'position': 'relative',
												'display': 'flex',
												'alignItems': 'center',
												'justifyContent': 'center',
												'paddingBottom': !this.state.picture_main_url ? '100%' : null,
												'cursor': 'pointer',
											}}
											>
												{this.state.picture_main_url ?
														<img src={this.state.picture_main_url} className="width-100 flex-row relative centered" alt="" />
												:
														<div className="flex-col centered placeholder-pic">
																<FiCamera className="placeholder-icon" />
														</div>
												}
												<input
													className="file-upload"
													label='upload file'
													type='file'
													onChange={this.onSelectFile}
												/>
											</div>
										</div>
              		</div>
									<div className="width-100 max-width-400 flex-row centered margin-bottom-5 create-hover">
										<div className="height-40p width-40p flex-col centered">
											<FiZap className="create-input-icon" />
										</div>
										<SearchBar
											boutits={[]}
											boutitSearch={this.boutitSearch}
											selectBoutit={this.selectBoutit}
											selectProfile={this.selectProfile}
											showDropdown={this.showDropdown}
											state={this.state}
											user_boutits={[]}
										/>
              		</div>
									<div className="width-100 max-width-800 flex-col centered margin-bottom-5">
										<Collapsible
											className="width-100 max-width-400 flex-col background-white"
											openedClassName="width-100 max-width-400 border-top-grey flex-col background-white"
											transitionTime={100}
											trigger={
												<div className="width-100 max-width-800 flex-row centered create-hover pointer">
													<div className="height-40p width-40p flex-col centered">
														<FiAlignLeft className="create-input-icon" />
													</div>
													<div className="create-input-detail centered-vertical no-wrap overflow-hidden">
														{!this.state.description ? <div className="create-text text-16">Add description</div> : <div className="text-grey text-16">{this.state.description}</div>}
													</div>
												</div>
											}
											triggerWhenOpen={
												<div className="width-100 max-width-800 flex-row centered margin-vertical-10 relative">
														<div className="height-40p width-40p flex-col centered">
																<FiAlignLeft className="create-input-icon" />
														</div>
														<div className="create-input-detail centered-vertical no-wrap overflow-hidden">
															<div className="create-text text-16">Add description</div>
														</div>
												</div>
											}
										>
                      <div className="width-100 flex-col centered">
                          <textarea
                            autoFocus={true}
                            className="create-textarea width-100 radius-5 padding-10 create-hover"
                            rows={5}
                            placeholder="Write..."
                            onChange={this.setDescription}
                            value={this.state.description}
                          >
                          </textarea>
                      </div>
                  	</Collapsible>
              		</div>
									<div className="width-100 max-width-400 flex-row centered margin-bottom-5 create-hover">
										<div className="height-40p width-40p flex-col centered">
											<FiMapPin className="create-input-icon" />
										</div>
										<PlacesAutocomplete
											value={this.state.address}
											onChange={this.addressChange}
											onSelect={this.addressSelect}
											>
											{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
												<div className="width-100 relative centered flex-col">
													<input
														{...getInputProps({
															placeholder: 'Add where',
															className: 'create-input-detail text-16',
														})}
													/>
													<div className="width-90 background-white absolute-top-45 z99999 shadow-light">
														{loading && <div className="width-100 padding-10 height-45px centered-vertical">Loading...</div>}
														{suggestions.map(suggestion => {
															const className = suggestion.active
																? 'width-100 padding-10 height-45p centered-vertical'
																: 'width-100 padding-10 height-45p centered-vertical';
															// inline style for demonstration purpose
															const style = suggestion.active
																? { backgroundColor: '#f1f3f4', cursor: 'pointer' }
																: { backgroundColor: '#ffffff', cursor: 'pointer' };
															return (
																<div
																	{...getSuggestionItemProps(suggestion, {
																		className,
																		style,
																	})}
																>
																		<div className="flex-col width-100 overflow-hidden text-ellipsis">
																				<div>{suggestion.formattedSuggestion.mainText}</div>
																				<div className="text-12 text-grey">{suggestion.formattedSuggestion.secondaryText}</div>
																		</div>
																</div>
															);
														})}
													</div>
												</div>
											)}
										</PlacesAutocomplete>
              		</div>
									<div className="width-100 max-width-400 flex-row centered margin-bottom-5 create-hover" onClick={() => this.showOverlay('calendar')}>
										<div className="height-40p width-40p flex-col centered">
											<FiClock className="create-input-icon" />
										</div>
										<div className="width-100">
											<div className="height-40p width-100 space-between pointer width-100 max-width-400 flex-row relative radius-5">
												{this.state.calendarTimes[0] ?
														<TimeWindow
															state={this.state}
														/>
												:
													<div className="create-input-detail centered-vertical create-text text-16">Add when</div>
												}
												<div></div>
											</div>
										</div>
									</div>
									<div className="width-100 max-width-800 flex-col centered margin-bottom-5">
										<Collapsible
											className="width-100 max-width-400 flex-col background-white"
											openedClassName="width-100 max-width-400 border-top-grey flex-col background-white"
											transitionTime={100}
											trigger={
												<div className="width-100 max-width-800 flex-row centered margin-bottom-10 create-hover pointer">
														<div className="height-40p width-40p flex-col centered">
															<FiUsers className="create-input-icon" />
														</div>
														<div className="create-input-detail centered-vertical">
															<div className="create-text text-16">Add who</div>
														</div>
												</div>
											}
											triggerWhenOpen={
												<div className="width-100 max-width-800 flex-row centered margin-bottom-10 margin-top-10">
														<div className="height-40p width-40p flex-col centered">
																<FiUsers className="create-input-icon" />
														</div>
														<input disabled={true} className="create-input-detail text-16" placeholder="Add who" onChange={(e) => this.setDescription(e)} />
												</div>
											}
										>
												<div className="width-100 flex-col centered">
															<div className="width-100 flex-row centered space-between padding-horizontal-10">
																	<div className="flex-col">
																			<div className="text-16 text-grey text-bold">Private</div>
																	</div>
																	<Switch
																		onChange={this.setPrivacy}
																		checked={this.state.private_boutit}
																		uncheckedIcon={false}
																		checkedIcon={false}
																		onColor="#F74E82"
																	/>
															</div>
															<div className="width-100 flex-row centered margin-bottom-30 space-between padding-horizontal-10">
																	<div className="flex-col">
																			<div className="text-grey text-mini">People must be approved to join.</div>
																	</div>
																	<div></div>
															</div>
												</div>
										</Collapsible>
									</div>
								</Col>
								<Col xs={12} sm={12} md={4} lg={4} className="centered">
								</Col>
							</Row>
						</div>
					</div>
					<div className="absolute-bottom width-100 flex-row space-between background-white height-70p border-top-grey centered-vertical">
						<div className="flex-33 flex-row space-between">
						</div>
						<div className="flex-33 centered">
						</div>
						<div className="flex-33 flex-row space-between">
							<div></div>
							<div className="width-100 max-width-200 background-pink height-45p radius-5 centered margin-right-20 centered-vertical pointer">
								<div className="text-white text-bold text-16">BOUTIT</div>
							</div>
						</div>
					</div>
				</div>
			</Aux>
		)
	}
}

export default CreateBoutit