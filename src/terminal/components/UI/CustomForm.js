import React, { Component } from 'react'
import Input from './Input'
import Button from './Button'

class CustomForm extends Component{

	checkValidity = (val, rules) => {
		let isValid = false
		if(rules.required){
			isValid = val.trim() !== ''
		}
		if(rules.minLength){
			isValid = val.length >= rules.minLength && isValid
		}
		if(rules.maxLength){
			isValid = val.length >= rules.maxLength && isValid
		}
		return isValid
	}

	inputChangedHandler = (e, inputIdentifier) => {
		const updatedForm = {
			...this.props.formFields
		}
		const updatedFormElement = { 
			...updatedForm[inputIdentifier]
		}
		updatedFormElement.value = e.target.value
		updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validationRules)
		updatedFormElement.touched = true
		updatedForm[inputIdentifier] = updatedFormElement
		let formIsValid = true
		for (let inputIdentifier in updatedForm){
			formIsValid = updatedForm[inputIdentifier].valid && formIsValid
		}
		this.props.updateState({formFields: updatedForm, formIsValid})
	}

	submitHandler = (e) => {
		e.preventDefault()
		const formData = {}
		for (let formElementIdentifier in this.props.formFields){
			formData[formElementIdentifier] = this.props.formFields[formElementIdentifier].value
		}
		this.props.submitAction(formData)
	}

	render() {
		const formElementsArray = []
		for (let key in this.props.formFields){
			formElementsArray.push({
				id: key,
				config: this.props.formFields[key]
			})
		}
		const form = formElementsArray.map(formElement => 
			<Input
				changed={(e) => this.inputChangedHandler(e, formElement.id)}
				className={formElement.config.className}
				elementType={formElement.config.elementType}
				elementConfig={formElement.config.elementConfig}
				invalid={!formElement.config.valid}
				value={formElement.value}
				key={formElement.id}
				shouldValidate={formElement.config.validationRules}
				touched={formElement.config.touched}
			/>
		)
		return(
			<form
				className="width-90 max-width-400 flex-col centered"
				onSubmit={this.submitHandler}
			>
				{form}
				<Button
					className={['button', 'button-text'].join(' ')}
					disabled={!this.props.formIsValid}
				>
					Sign up
				</Button>
			</form>
		)
	}
}

export default CustomForm 