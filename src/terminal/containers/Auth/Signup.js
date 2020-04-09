import React, { Component } from 'react'
import { connect } from 'react-redux'
import CustomForm from '../../components/UI/CustomForm'

import * as actions from '../../store/actions/index'

class Signup extends Component{
	state = {
		formFields: {
			full_name: {
				className: 'form-input',
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Full name'
				},
				value: '',
				validationRules: {
					required: true
				},
				valid: false,
				touched: false
			},
			username: {
				className: 'form-input',
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Username'
				},
				value: '',
				validationRules: {
					required: true
				},
				valid: false,
				touched: false
			},
			phone_or_email: {
				className: 'form-input',
				elementType: 'input',
				elementConfig: {
					type: 'text',
					placeholder: 'Mobile Number or Email'
				},
				value: '',
				validationRules: {
					required: true
				},
				valid: false,
				touched: false
			},
			password: {
				className: 'form-input',
				elementType: 'input',
				elementConfig: {
					type: 'password',
					placeholder: 'Password'
				},
				value: '',
				validationRules: {
					required: true,
					minLength: 6
				},
				valid: false,
				touched: false
			}
		},
		formIsValid: false
	}

	updateState = (obj) => {
		this.setState(obj)
	}
	
	render(){
		return(
			<div className="flex-col centered width-100 height-100">
				Signup
				<CustomForm
					formFields={this.state.formFields}
					formIsValid={this.state.formIsValid}
					submitAction={this.props.onAuth}
					updateState={this.updateState}
				/>
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onAuth: (email, password) => dispatch(actions.auth(email, password))
	}
}

export default connect(null, mapDispatchToProps)(Signup)