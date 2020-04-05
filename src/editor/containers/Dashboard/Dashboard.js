import React, { Component } from 'react'
import { connect } from 'react-redux'

import Aux from '../../hoc/Aux'
import * as actionTypes from '../../store/actions/actions'

class Dashboard extends Component{
	state = {
		title: '',
		location: '',
		dates: '',
	}
	render() {
		return(
			<Aux>
				<div>boutit</div>
				<div className="border-red">BuildControls</div>
				<div onClick={this.props.onIncrementCounter}>{this.props.ctr}</div>
			</Aux>
		)
	}
}

const mapStateToProps = state => {
	return {
		ctr: state.ctr.counter
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onIncrementCounter: () => dispatch({
			type: actionTypes.INCREMENT,
			val: 10
		})
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)