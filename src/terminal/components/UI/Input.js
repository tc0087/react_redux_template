import React from 'react'

const input = (props) => {
	let inputElement = null
	const inputClasses = [props.className]
	if(props.invalid && props.shouldValidate && props.touched){
		inputClasses.push('form-input-error')
	}


	switch (props.elementType){
		case ('input'):
			inputElement = <input 
				className={inputClasses.join(' ')}
				onChange={props.changed}
				{...props.elementConfig}
				value={props.value}
			/>
			break
		case ('textarea'):
			inputElement = <textarea
			className={inputClasses.join(' ')}
			onChange={props.changed}
			{...props.elementConfig}
			value={props.value}
			/>
			break
		case ('select'):
			inputElement = (
				<select
					className={inputClasses.join(' ')}
					onChange={props.changed}
					value={props.value}
				>
					{props.elementConfig.options.map(option => (
						<option
							key={option.value}
							value={option.value}
						>
							{option.displayValue}
						</option>
					))}
				</select>
			)
			break
		default:
			inputElement = <input
				className={inputClasses.join(' ')}
				onChange={props.changed}
				{...props.elementConfig}
				value={props.value}
			/>
	}

	return(
		<div className="width-100 centered">
			<label>{props.label}</label>
			{inputElement}
		</div>
	)
}

export default input