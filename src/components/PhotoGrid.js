import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PhotoGrid extends Component {
	
	constructor(props) {
		super(props);
	}

	render(){
		return(
			<div>
				<h1>
					<Link to="/">Instagrams</Link>
				</h1>
			</div>
		);
	}
}

export default PhotoGrid;