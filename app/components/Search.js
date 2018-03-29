import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchIcon from 'material-ui-icons/Search';
import Input, { InputAdornment } from 'material-ui/Input';

/** 
* functional stateless component
* Search bar that return a callback when a text input field changes
*/
const Search = ({ value, onChange }) => (
		<div id="search__bar">
			<Input
				fullWidth={true}
		        placeholder="Search"
		        value={value}
		        startAdornment={<InputAdornment position="start"><SearchIcon/></InputAdornment>}
		        onChange={onChange}
	      	/>
      	</div>
);

export default Search;