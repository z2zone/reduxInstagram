import React, { Component } from 'react';
import PhotoGrid from './PhotoGrid';
import { Link } from 'react-router-dom';


class Main extends Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div class="wrapper">
				<h1>
					<Link to="/">Instagrams</Link>
				</h1>
				<PhotoGrid />\
			</div>
			
		);
	}
}

export default Main;
