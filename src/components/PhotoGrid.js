import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';	


class PhotoGrid extends Component {
	
	constructor(props) {
		super(props);
	}

	renderPosts(){
		return(
			<div class="grid-box">
				this.props.posts
			</div>
		);
	}

	render(){
		return(
			<div class="photo-grid">
				{this.renderPosts}
			</div>
		);
	}
}


function mapStateToProps(state) {
	return {
		posts: state.posts		
	}
}
export default connect(mapStateToProps)(PhotoGrid);