import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import MailIcon from 'material-ui-icons/Mail';
import developerData from './developerData';

const styles = theme => ({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
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

class Developer extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			list: developerData || []
		}
		this.dismiss = this.dismiss.bind(this);
	}

	dismiss(id){
		const isNotId = item => item.objectId !== id;
		const filteredList = this.state.list.filter( isNotId );
		this.setState(
			{
				list: filteredList
			}
		);
	}

	render(){
		const { classes } = this.props;
		return(
			<div>
				{ this.state.list.map( (person, key) => (
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
					          	onClick={ () => this.dismiss(person.objectId) } 
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
	}
}

Developer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Developer);