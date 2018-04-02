import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchIcon from 'material-ui-icons/Search';
import Input, { InputAdornment } from 'material-ui/Input';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
/** 
* functional stateless component
* Search bar that return a callback when a text input field changes
*/

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

const Search = ({ value, onChange, onSubmit, classes, children }) => 
		<div id="search__bar">
			<form onSubmit={onSubmit}>
				<Input
					fullWidth={true}
			        placeholder="Search"
			        value={value}
			        startAdornment={<InputAdornment position="start"><SearchIcon/></InputAdornment>}
			        onChange={onChange}
		      	/>
		      	<Button
		      		className={classes.button}
		          	type="submit" 
		          	size="small"
		          	variant="raised"
		          	color="secondary"
		        >
	          		{children}
	         	</Button>
	      	</form>
      	</div>

Search.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Search);