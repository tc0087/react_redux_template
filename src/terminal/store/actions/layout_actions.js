import * as actionTypes from './actionTypes'

export const hideCreateMenu = () => {
	return {
		type: actionTypes.HIDE_CREATE_MENU
	}
}

export const toggleMenu = () => {
	return {
		type: actionTypes.TOGGLE_CREATE_MENU
	}
}

export const toggleCreateMenu = () => {
	/* dispatch is made available by redux-thunk */
	return dispatch => {
		setTimeout(() => {
			dispatch(toggleMenu())
		}, 2000)
	}
}

export const toggleSearchDropdown = () => {
	return {
		type: actionTypes.TOGGLE_SEARCH_DROPDOWN
	}
}

export const hideSearchDropdown = () => {
	console.log("HIDE!")
	return {
		type: actionTypes.HIDE_SEARCH_DROPDOWN
	}
}

export const toggleSideMenu = () => {
	console.log("TOGGLE SON!")
	return {
		type: actionTypes.TOGGLE_SIDE_MENU
	}
}

export const hideSideMenu = () => {
	return {
		type: actionTypes.HIDE_SIDE_MENU
	}
}