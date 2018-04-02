import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Badge from 'material-ui/Badge';

/** 
* functional stateless component
* A list in card style, that display a list based on a searchTerm 
* that matches the specified data in the list.
* Each item on the list can be removed based on the item id
*/

const styles = theme => ({
  card: {
    minWidth: 275,
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  margin: {
    margin: theme.spacing.unit * 2,
  },
  padding: {
    padding: `0 ${theme.spacing.unit * 2}px`,
  },
});

const isSearched = searchTerm => item => item.title.toLowerCase().includes(searchTerm.toLowerCase());
// list.filter(isSearched(pattern)).map( (person, key) => ( ... ) // client side filtering
const DataList = ({classes, list, onDismiss }) => (
	<div>
		{ list.map( (person, key) => (
				<Card className={classes.card} key={key}>
					<CardContent>
						<Typography className={classes.title} color="textSecondary">
		           	 		<Button color="secondary" variant="raised" href={person.url}>{person.title}</Button>
			         	</Typography>
						<Typography className={classes.pos} color="textSecondary">
			            	{person.author}
			          	</Typography>
						<Badge className={classes.padding} badgeContent={person.num_comments} color="primary">
				          Comments
				        </Badge>
				        <Badge className={classes.padding} badgeContent={person.points} color="primary">
				          Points
				        </Badge>
					</CardContent>
					<CardActions>
			          <Button 
			          	onClick={ () => onDismiss(person.objectID) } 
			          	type="button" 
			          	size="small"
			          >
			          	DISMISS
			          </Button>
			        </CardActions>
				</Card>
				)
			)
		}
	</div>
);

DataList.propTypes = {
  classes: PropTypes.object.isRequired,
  list: PropTypes.array,
  pattern: PropTypes.string,
  onDismiss: PropTypes.func,
};

export default withStyles(styles)(DataList);