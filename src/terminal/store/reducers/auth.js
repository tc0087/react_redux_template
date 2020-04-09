import * as actionTypes from '../actions/actionTypes'

const initialState = {
	authenticated: false,
	token: null,
	userId: null,
	error: null,
	loading: false
}

const reducer = (state = initialState, action) => {
	switch(action.type){
		case actionTypes.AUTH_START:
			return {
				...state,
				error: false,
				loading: true
			}
		case actionTypes.AUTH_SUCCESS:
			return {
				...state,
				authenticated: true,
				error: false,
				loading: false,
				token: action.idToken,
				userId: action.userId,
			}
		case actionTypes.AUTH_FAIL:
			return {
				...state,
				error: action.error,
				loading: false
			}
		case actionTypes.AUTH_LOGOUT:
			return {
				...state,
				authenticated: false,
				token: null,
				userId: null
			}
		default:
			return state
	}
}

export default reducer