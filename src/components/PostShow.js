import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostShow extends Component {
	
	constructor(props) {
		super(props);
	}

	render(){
		return(
			<div className="container">
				<h2>
					<Link to="/">Instagrams</Link>
				</h2>
			</div>
		);
	}
}

export default PostShow;