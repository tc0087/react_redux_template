import * as actionTypes from '../actions/actions'

const intialState = {
	background: 0
}

const reducer = (state = intialState, action) => {
	switch(action.type){
		case actionTypes.INCREMENT:
			return {
				...state,
				background: state.background + action.val
			}
		default:
			return state
	}
}

export default reducer;