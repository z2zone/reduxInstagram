import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {addPost} from '../actions';

class AddPost extends Component {
	
	renderForm(field) {
		return(
			<div className="form-group">
				<label>{field.labelForm}</label>
				<input 
					className="form-control"
					type="text"
					{...field.input}
				/>
				{field.meta.error}
			</div>
		);
	}

	render(){
		return(
			<div className="add-new">
				<h1>
					<Link to="/">Instagrams</Link>
				</h1>
				<Field
					labelForm='Title for the Post'
					name='title'
					component={this.renderForm}
				/>
				<Field
					labelForm='Content for the Post'
					name='content'
					component={this.renderForm}
				/>
				<Field
					labelForm='Image URL for the Post'
					name='URL'
					component={this.renderForm}
				/>
			</div>
		);
	}
}

function validate(values){
	const errors = {};
	if (!values.title){
		errors.title = "You haven't entered a title";
	}
	if (!values.content){
		errors.title = "You haven't entered a content";
	}
	if (!values.URL || values.URL.length <10){
		errors.title = "You haven't entered a proper URL";
	}

	return errors;
}
//form submits if and only if there is no error.
export default reduxForm({
	form: "AddPost",
	validate: validate
})(connect(null, {addPost})(AddPost));

//first argument of reduxForm function acts as sort of like a namespace. 