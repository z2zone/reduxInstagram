import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { addPost } from '../actions';

class AddPost extends Component {

	renderForm(field) {
		const classForm = `form-control ${field.meta.touched && field.meta.error ? 'is-invalid' : ''}`;
		return (
			// console.log(field);
			<div className="form-group">
				<label>{field.labelForm}</label>
				<input
					className={classForm}
					type="text"
					{...field.input}
				/>
				<div className="invalid-feedback">
					{field.meta.touched ? field.meta.error : ''}
				</div>
			</div>
		);
	}

	renderContentForm(field) {
		const classForm = `form-control ${field.meta.touched && field.meta.error ? 'is-invalid' : ''}`;
		return (
			// console.log(field);
			<div className="form-group">
				<label>{field.labelForm}</label>
				<textarea
					className={classForm}
					type="textarea"
					{...field.input}
				/>
				<div className="invalid-feedback">
					{field.meta.touched ? field.meta.error : ''}
				</div>
			</div>
		);
	}

	onFormSubmit(values) {
		this.props.addPost(values, ()=>{
			this.props.history.push('/');
			// programmatic navigation: push to homepage after axio reqeust has been solved
		});
	}

	render() {
		const { handleSubmit } = this.props;
		// from reduxForm

		return (
			<div className="add-new">
				<h1>
					<Link to="/">Instagrams</Link>
				</h1>
				<form onSubmit={handleSubmit(this.onFormSubmit.bind(this))}>
					<Field
						labelForm='Title for the Post'
						name='title'
						component={this.renderForm}
					/>
					<Field
						labelForm='Image URL for the Post'
						name='categories'
						component={this.renderForm}
					/>
					<Field
						labelForm='Content for the Post'
						name='content'
						component={this.renderContentForm}
					/>
					
					<div className="text-center">
						<button className="btn btn-primary" type="submit">Add a Post</button>
						<Link className="btn btn-danger" to="/">Cancel</Link>
					</div>
				</form>
			</div>
		);
	}
}

function validate(values) {
	const errors = {};


	if (!values.title) {
		errors.title = "You haven't entered a title";
	}
	if (!values.content) {
		errors.content = "You haven't entered a content";
	}
	if (!values.categories || values.categories.length < 10) {
		errors.categories = "You haven't entered a proper URL";
	}

	return errors;
}
//form submits if and only if there is no error.

export default reduxForm({
	form: "AddPost",
	validate: validate
})(connect(null, { addPost })(AddPost));

//first argument of reduxForm function acts as sort of like a namespace. 

// Flow: User puts something in the forms -> run through validate function -> handleSubmit from reduxForm 
// everything checksout -> then onFormSubmit (custom function written by me)