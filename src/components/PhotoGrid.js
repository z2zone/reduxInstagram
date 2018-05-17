import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';	
import _ from "lodash";
import { fetchPosts } from '../actions/index';	


class PhotoGrid extends Component {
	
	componentDidMount(){
		this.props.fetchPosts();
		console.log(this.props.posts);
	}

	renderPosts(){
		return
		_.map(this.props.posts, (post)=>{
			return (
				<div className="gird-box">
					<img src={post.categories} alt=""/>
				</div>
			);
		})
	}

	render(){
		return(
			<div className="photo-grid">
				{this.renderPosts()}
			</div>
		);
	}
}


function mapStateToProps(state) {
	return {
		posts: state.posts		
	};
}

export default connect(mapStateToProps, { fetchPosts })(PhotoGrid);