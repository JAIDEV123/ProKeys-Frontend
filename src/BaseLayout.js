import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Custom Imports
import Title from './Title';
import Options from './Options';
import SnippetOptions from './SnippetOptions';
import ManageSnippet from './ManageSnippet';
import Settings from './Settings';
import Compose from './Compose';

export default class BaseLayout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			composeboxes : []
		}
	}

	newCompose() {
		
		console.log("click", this.state.composeboxes);

		let composeboxes = [{
			"id" : "1",
			"name" : " ",
			"content" : " ",
			"state" : "maximised"
		}];

		this.setState({ composeboxes : [{
			"name" : "test",
			"id" : "2"
		}] });
	}

	componentWillUpdate(nextProps, nextState) {

	}

	render() {
		return (
			<React.Fragment>
				<Options/>

				<Route exact path="/" render={(props) => <SnippetOptions {...props} onclick={this.newCompose.bind(this)} /> }/>
				<Route exact path="/Snippet" component={SnippetOptions}/>

				<Switch>
					<Route exact path="/" component={ManageSnippet}/>
					<Route path="/Snippet" component={ManageSnippet}/>
					<Route path="/Setting" component={Settings}/>
				</Switch>

				<Compose boxes={this.state.composeboxes}/>

			</React.Fragment>
		);
	}
}
