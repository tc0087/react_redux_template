import * as actionTypes from '../actions/actionTypes'
import Boutit from '../../components/Boutit/Boutit'
import Chats from '../../components/Chats/Chats'
import CreateBoutit from '../../containers/CreateBoutit/CreateBoutit'
import CreatePost from '../../containers/CreatePost/CreatePost'
import CreateProduct from '../../containers/CreateProduct/CreateProduct'
import Info from '../../components/Info/Info'
import Me from '../../components/Me/Me'
import Notifications from '../../components/Notifications/Notifications'
import Posts from '../../components/Posts/Posts'
import People from '../../components/People/People'
import Products from '../../components/Products/Products'
import Signup from '../../containers/Auth/Signup'
import Login from '../../containers/Auth/Login'

const intialState = {
	adminRoutes: [
		{
			label: 'Apps',
			value: 'apps'	,
			icon: 'FiMonitor',
			route: 'apps'
		},
		{
			label: 'Marketing',
			value: 'marketing',
			icon: 'FiVolume2',
			route: 'marketing'
		},
		{
			label: 'Businesses',
			value: 'businesses',
			icon: 'FaStore',
			route: 'businesses'
		},
		{
			label: 'Analytics',
			value: 'analytics',
			icon: 'FiTrendingUp',
			route: 'analytics'
		}
	],
	authenticatedRoutes: [
		{
			component: CreateBoutit,
			icon: 'null',
			label: 'CreateBoutit',
			menuItem: false,
			path: '/create_boutit',
			route: 'create_boutit',
			value: 'create_boutit'	
		},
		{
			component: CreatePost,
			icon: 'null',
			label: 'CreatePost',
			menuItem: false,
			path: '/create_post',
			route: 'create_post',
			value: 'create_post'	
		},
		{
			component: CreateProduct,
			icon: 'null',
			label: 'CreateProduct',
			menuItem: false,
			path: '/create_product',
			route: 'create_product',
			value: 'create_product'	

		},
		{
			component: Chats,
			icon: 'null',
			label: 'Chats',
			menuItem: false,
			path: '/chats',
			route: 'chats',
			value: 'chats'	

		},
		{
			component: Notifications,
			icon: 'null',
			label: 'Notifications',
			menuItem: false,
			path: '/notifications',
			route: 'notifications',
			value: 'notifications'	
		},
		{
			component: Me,
			icon: 'null',
			label: 'Me',
			menuItem: false,
			path: '/me',
			route: 'me',
			value: 'me'	
		},
		{
			component: Info,
			icon: 'null',
			label: 'Info',
			menuItem: false,
			path: '/info',
			route: 'info',
			value: 'info'	

		},
		{
			component: Boutit,
			icon: 'FiZap',
			label: 'BoutIt',
			menuItem: true,
			path: '/filter/boutit',
			route: 'boutit',
			value: 'boutit'	

		},
		{
			component: Posts,
			icon: 'FiImage',
			label: 'Posts',
			menuItem: true,
			path: '/filter/posts',
			route: 'posts',
			value: 'posts'	
		},
		{
			component: People,
			icon: 'FiUser',
			label: 'People',
			menuItem: true,
			path: '/filter/people',
			route: 'people',
			value: 'people'	
		},
		{
			component: Products,
			icon: 'FiShoppingBag',
			label: 'Products',
			menuItem: true,
			path: '/filter/products',
			route: 'products',
			value: 'products'	
		}
	],
	createMenu: false,
	createRoutes: [
		{
			component: CreateBoutit,
			icon: 'FiPlusCircle',
			label: 'Boutit',
			menuItem: true,
			path: '/create_boutit',
			route: 'create_boutit',
			value: 'create_boutit'	
		},
		{
			component: CreatePost,
			icon: 'FiPlusCircle',
			label: 'Post',
			menuItem: true,
			path: '/create_post',
			route: 'create_post',
			value: 'create_post'
		},
		{
			component: CreateProduct,
			icon: 'FiPlusCircle',
			label: 'Product',
			menuItem: true,
			path: '/create_product',
			route: 'create_product',
			value: 'create_product'
		}
	],
	meRoutes: [
		{
			component: Notifications,
			icon: 'FiBell',
			label: 'Notifications',
			menuItem: true,
			path: '/notifications',
			route: 'notifications',
			value: 'notifications'	
		},
		{
			component: Chats,
			icon: 'FiMessageCircle',
			label: 'Chats',
			menuItem: true,
			path: '/chats',
			route: 'chats',
			value: 'chats'
		}
	],
	publicRoutes: [
		{
			component: Signup,
			icon: null,
			label: 'Signup',
			menuItem: false,
			path: '/signup',
			route: 'signup',
			value: 'signup'	
		},
		{
			component: Login,
			icon: null,
			label: 'Login',
			menuItem: false,
			path: '/login',
			route: 'login',
			value: 'login'	
		}
	],
	searchDropdown: false,
	sideMenu: false,
}

const reducer = (state = intialState, action) => {
	switch(action.type){
		case actionTypes.TOGGLE_CREATE_MENU:
			return {
				...state,
				createMenu: !state.createMenu
			}
		case actionTypes.HIDE_CREATE_MENU:
			return {
				...state,
				createMenu: false
			}
		case actionTypes.TOGGLE_SEARCH_DROPDOWN:
			return {
				...state,
				searchDropdown: !state.searchDropdown
			}
		case actionTypes.HIDE_SEARCH_DROPDOWN:
			return {
				...state,
				searchDropdown: false
			}
		case actionTypes.TOGGLE_SIDE_MENU:
			return {
				...state,
				sideMenu: !state.sideMenu
			}
		case actionTypes.HIDE_SIDE_MENU:
			return {
				...state,
				sideMenu: false
			}
		default:
			return state
	}
}

export default reducer;