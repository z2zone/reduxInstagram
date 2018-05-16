import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// import PhotoGrid from './PhotoGrid';
import Main from './Main';
import Show from './Show';


class Template extends Component {
  render() {
    return (
    	<BrowserRouter>
    		<div id="wrapper">
                <switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/:id" component={Show} />
                </switch>		
    		</div>
    	</BrowserRouter>
    );
  }
}

export default Template;