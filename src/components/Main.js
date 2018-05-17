import React, { Component } from 'react';
import PhotoGrid from './PhotoGrid';
import { Link } from 'react-router-dom';


class Main extends Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="wrapper">
				<h1>
					<Link to="/">Instagrams</Link>
				</h1>
				<Link className="button add-new" to="/posts/new">Add New Post</Link>
				<PhotoGrid />
			</div>
			
		);
	}
}

export default Main;
