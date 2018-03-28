import React, { Component } from 'react';
import Home from './Home';
import Header from './Header';

class App extends Component {
	constructor() {
		super();
		this.state = {
			title: 'Marvel Future Fight'
		};
	}
	render() {
		return(
			<div>
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<Header title={this.state.title}/>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<Home>
								<div>Home Children</div>
							</Home>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;