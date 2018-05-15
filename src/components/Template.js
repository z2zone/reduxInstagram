import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Show from './Show';
import PhotoGrid from './PhotoGrid';

class Template extends Component {
  render() {
    return (
    	<BrowserRouter>
    		<div id="wrapper">
                <switch>
                    <Route exact path="/" component={PhotoGrid} />
                    <Route exact path="/:id" component={Show} />
                </switch>		
    		</div>
    	</BrowserRouter>
    );
  }
}

export default Template;