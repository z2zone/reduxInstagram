import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const INCREASE_LIKE = 'INCREASE_LIKE';
export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=reduxInsta';

export function fetchPosts () {
	const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

	return {
		type: FETCH_POSTS,
		payload: request
	}
}

export function fetchPost (id) {
	return {
		type: FETCH_POST,
		payload: post
	}
}

export function increaseLike(id) {
	return {
		type: INCREASE_LIKE,
		payload: post
	}
}

export function addComment (id) {
	return {
		type: ADD_COMMENT,
		payload: post
	}	
}

export function deleteComment (id) {
	return {
		type: DELETE_COMMENT,
		payload: post
	}
}