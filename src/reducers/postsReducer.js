import _ from 'lodash';
import {
	FETCH_POSTS,
	FETCH_POST, 
	ADD_POST,
	DELETE_POST
} from '../actions/index';

const postsReducer = ( state = {}, action ) => {
	
	switch (action.type) {

		case FETCH_POSTS:
			return _.mapKeys(action.payload.data,'id');

		case DELETE_POST:
			return _.omit(state, action.payload);

		case FETCH_POST:
			return {...state, [action.payload.data.id]: action.payload.data };

		default:
			return state;
	}
} 

export default postsReducer;