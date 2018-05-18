import _ from 'lodash';
import {
	FETCH_POSTS, FETCH_POST, ADD_POST
} from '../actions/index';

const postsReducer = ( state = {}, action ) => {
	switch (action.type) {

		case FETCH_POSTS:
			return _.mapKeys(action.payload.data,'id');

		case FETCH_POST:
			return {};

		case ADD_POST:
			return '';

		default:
			return state;
	}
} 

export default postsReducer;