import React, { Component } from 'react';
import Home from './Home';
import Header from './Header';
import Increase from './Increase';

class App extends Component {

	constructor() {
		super();
		this.state = {
			title: 'Marvel Future Fight'
		};
	}

	render() {
		var user = {
			name: "Yonk",
			hobbies: ["Draw", "Program"]
		}
		return(
			<div>
				<div className="container">
					<div className="row">
						<div className="col-xs-10 col-xs-offset-1">
							<Header title={this.state.title} user={user}>
								<p>Im child</p>
							</Header>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-xs-10 col-xs-offset-1">
							<Home/>
						</div>
					</div>
				</div>
				<Increase initialNum={5} />
				<Increase />
			</div>
		);
	}
}

export default App;