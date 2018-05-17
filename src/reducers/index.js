import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import postsReducer from './postsReducer';

const rootReducer = combineReducers({
	posts: postsReducer,
	form: formReducer,
	routing: routerReducer
});

//form contains bunch of actionCreator that can be used. 
export default rootReducer;
