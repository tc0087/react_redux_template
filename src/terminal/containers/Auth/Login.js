import React, { Component } from 'react'
import { connect } from 'react-redux'
import CustomForm from '../../components/UI/CustomForm'

import * as actions from '../../store/actions/index'

class Login extends Component{
	state = {
		formFields: {
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
				Login
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

export default connect(null, mapDispatchToProps)(Login)