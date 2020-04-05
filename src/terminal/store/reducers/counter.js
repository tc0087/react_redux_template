import * as actionTypes from '../actions/actions'

const intialState = {
	counter: 0
}

const reducer = (state = intialState, action) => {
	switch(action.type){
		case actionTypes.INCREMENT:
			return {
				...state,
				counter: state.counter + action.val
			}
		default:
			return state
	}
}

export default reducer;