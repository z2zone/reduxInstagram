import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';

class PostShow extends Component {
	
	constructor(props) {
		super(props);

		this.onDeletePost = this.onDeletePost.bind(this);
	}

	componentDidMount(){
		const id = this.props.match.params.id;
		this.props.fetchPost(id);
		// Technically, if you are aprroaching PostShow site from the homepage,
		// you wouldn't even need to call this function. -> because you can recycle the posts
		// There are cases, however, that the user might visit from page other than our homepage.
	}

	onDeletePost(){
		const id = this.props.match.params.id;
		this.props.deletePost(id, ()=>{
			this.props.history.push('/');
		});
	}

	render(){
		const post = this.props.post;

		if(!post){
			return <div>Loading...</div>
		}

		return(
			<div className="container">
				<h2>
					<Link to="/">Instagrams</Link>
				</h2>

				<div className="row">

					<div className="col-lg-8">
						<h3 className="mt-4">Title: {post.title}</h3>
						<hr/>
						<img className="img-fluid rounded" src={post.categories} alt="" />

						<div className="card my-4">
						  <h5 className="card-header">Content</h5>
						  <div className="card-body">
						    {post.content}
						  </div>
						</div>
					</div>

					<div className="col-md-4">
					  <div className="card my-4">
					    <h5 className="card-header">Search</h5>
					    <div className="card-body">
					      <div className="input-group">
					        <input type="text" className="form-control" placeholder="Search for..."/>
					        <span className="input-group-btn">
					          <button className="btn btn-secondary" type="button">Go!</button>
					        </span>
					      </div>
					    </div>
					  </div>
					  <button 
						className="btn btn-danger"
						onClick={this.onDeletePost}
					  >
						Delete this post
					  </button>
					</div>
		
				</div>
			</div>
		);
	}
}


function mapStateToProps(state, ownProps){
	return {
		post: state.posts[ownProps.match.params.id]
	};
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostShow);