import React from 'react';
import PropTypes from 'prop-types';

class Increase extends React.Component {
	constructor(props){
		super();
		this.state = {
			num: props.initialNum
		};
	}
	increase(){
		this.setState({
			num: this.state.num + 1
		});
	}
	render(){
		return(
			<div>
				<p>Current Count: {this.state.num}</p>
				<button className="btn btn-danger" onClick={ () => this.increase() } >
					Increase Me
				</button>
			</div>
		);
	}
}

Increase.defaultProps = {
	initialNum: 1
}

Increase.propTypes = {
	initialNum: PropTypes.number
};

export default Increase;