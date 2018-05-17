import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// import PhotoGrid from './PhotoGrid';
import Main from './Main';
import Show from './Show';
import AddPost from './AddPost';


class Template extends Component {
  render() {
    return (
    	<BrowserRouter>
    		<div id="wrapper">
                <Switch>
                    <Route exact path="/posts/new" component={AddPost} />
                    <Route exact path="/posts/:id" component={Show} />
                    <Route exact path="/" component={Main} />
                </Switch>		
    		</div>
    	</BrowserRouter>
    );
  }
}

export default Template;