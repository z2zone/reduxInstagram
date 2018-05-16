export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const INCREASE_LIKE = 'INCREASE_LIKE';
export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

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