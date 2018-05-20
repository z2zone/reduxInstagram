import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';	
import _ from 'lodash';
import { fetchPosts } from '../actions/index';	


class PhotoGrid extends Component {
	
	componentDidMount(){
		this.props.fetchPosts();
	}

	renderPosts(){
		return _.map(this.props.posts, (post)=>{
			return (
				<div className="grid-figure" key={post.title}>
					<img className="" src ={post.categories} />
					<span className="title">{post.title}</span>
					<Link className="button" to={`posts/${post.id}`}>View</Link>
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

export default connect(mapStateToProps, {fetchPosts})(PhotoGrid);