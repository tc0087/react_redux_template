import React, { Component } from 'react'
import { MdClose } from 'react-icons/md'
import { FiCamera } from 'react-icons/fi'
import { Row, Col } from 'react-bootstrap'
import moment from 'moment'

import Aux from '../../hoc/Aux'
import Type from '../../components/CreateBoutit/Type'
import TypePlaceholder from '../../components/CreateBoutit/TypePlaceholder'

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

	onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () =>
        this.setState({ src: reader.result, overlay: 'media', overlay_visible: !this.state.overlay_visible}),
      )
      reader.readAsDataURL(e.target.files[0])
      e.target.value = null
    }
  };

	setTitle = (e) => {
    this.setState({title: e.target.value})
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