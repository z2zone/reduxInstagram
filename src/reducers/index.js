import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import postsReducer from './postsReducer';

const rootReducer = combineReducers({
	posts: postsReducer,
	routing: routerReducer
});

export default rootReducer;
