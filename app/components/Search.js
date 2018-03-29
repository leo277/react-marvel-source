import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import SearchIcon from 'material-ui-icons/Search';
import Input, { InputAdornment } from 'material-ui/Input';

const styles = theme => ({
  input: {
    margin: theme.spacing.unit * 2,
  },
});


/** 
* Search bar that return a callback when a text input field changes
*/

class Search extends Component {
	render(){
		const { classes, onChange, value } = this.props;
		return(
			<div id="search__bar">
				<Input
					fullWidth={true}
			        placeholder="Search"
			        className={classes.input}
			        value={value}
			        startAdornment={<InputAdornment position="start"><SearchIcon/></InputAdornment>}
			        onChange={onChange}
		      	/>
	      	</div>
      	);
	}
	
}

Search.propTypes = {
  classes: PropTypes.object.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default withStyles(styles)(Search);