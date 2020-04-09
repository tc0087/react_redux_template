import * as actionTypes from './actionTypes'

export const authStart = () => {
	return {
		type: actionTypes.AUTH_START
	}
}

export const authSuccess = (token, userId) => {
	return {
		type: actionTypes.AUTH_SUCCESS,
		token, 
		userId
	}
}

export const authFail = (error) => {
	return {
		type: actionTypes.AUTH_FAIL,
		error
	}
}

export const auth = (formData) => {
	console.log(formData)
	return dispatch => {
		dispatch(authStart())
		let res = {
			data: {
				token: 'asegh98230wgkjasg01gsg98235kjgs98',
				userId: 'adkgaskgaetwt',
				expiresIn: 2000
			}
		}
		const expirationDate = new Date(new Date().getTime() + res.data.expiresIn * 1000)
		localStorage.setItem('boutitToken', res.data.token)
		localStorage.setItem('boutitTokenExpDate', expirationDate)
		localStorage.setItem('boutitUserId', res.data.userId)
		dispatch(authSuccess(res.data.token, res.data.userId))
		// axios.post('url')
		// 	.then(res => {
		// 		console.log(res)
		//		localStorage.setItem
		// 		dispatch(authSuccess(res.data))
		//		dispatch(authCheckTimeout(res.data.expiresIn))
		// 	})
		// 	.catch(err => {
		// 		console.log(err)
		// 		dispatch(authFail(err))
		// 	})
	}
}

export const logout = () => {
	localStorage.removeItem('boutitToken')
	localStorage.removeItem('boutitTokenExpDate')
	localStorage.removeItem('boutitUserId')
	return {
		type: actionTypes.AUTH_LOGOUT
	}
}

export const checkAuthTimeout = (expirationTime) => {
	return dispatch => {
		setTimeout(() => {
			dispatch(logout())
		}, expirationTime * 1000)
	}
}

export const authCheck = () => {
	console.log("word")
	return dispatch => {
		const token = localStorage.getItem('boutitToken')
		if(!token){
			dispatch(logout())
		}else{
			const expirationDate = new Date( localStorage.getItem('boutitTokenExpDate') )
			const userId = localStorage.getItem('boutitUserId')
			if(expirationDate <= new Date()){
				console.log("biggie")
				dispatch(logout())
			} else {
				dispatch(authSuccess(token, userId))
				console.log(expirationDate.getTime())
				console.log(new Date().getTime())
				dispatch(checkAuthTimeout( ( expirationDate.getTime() - new Date().getTime() ) / 1000))
			}
		}
	}
}