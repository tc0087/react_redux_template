import * as actionTypes from '../actions/layout_actions'

const intialState = {
	counter: 0
}

const reducer = (state = intialState, action) => {
	switch(action.type){
		case actionTypes.HIDE_SEARCH_DROPDOWN:
			return {
				...state,
				counter: state.counter + action.val
			}
		default:
			return state
	}
}

export default reducer;