import React from "react";
import PropTypes from 'prop-types';

const Header = (props) => (

	<nav className="navbar navbar-default">
		<div className="container">
			<div className="navbar-header">
				<ul className="nav navbar-nav">
					<li><a href="#">MFF</a></li>
					<li>{props.user.name}</li>
					{props.user.hobbies.map( (hobby, i) => 
						<li key={i}>{hobby}</li>
					)}
					<button className="btn btn-danger">{props.children}</button>
				</ul>
			</div>
		</div>
	</nav>
);

Header.defaultProps = {
	title: 'Title'
};

Header.propTypes = {
	title: PropTypes.string
};

export default Header;