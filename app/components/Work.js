import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Chip from 'material-ui/Chip';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';


const styles = theme => ({
  card: {
    minWidth: 275,
  },
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
	padding: theme.spacing.unit / 2,
  },
  chip: {
    margin: theme.spacing.unit / 	2,
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
});

const frameworks = ['Ruby on Rails', 'JAVA', 'Node.js', 'jsp'];
const frontends = ['HTML', 'CSS', 'JAVASCRIPT', 'ES6', 'ANGULAR', 'REACTJS','BOOTSTRAP'];
const web = ['RESTFUL API'];
const aws = ['AWS', 'vim', 'EC2-instance', 'nginx', 'deployment'];
const database = ['MongoDB', 'MySQL', 'PostgreSQL'];
const list = [ 
				{key:'frameworks', value: frameworks},
				{key:'frontends', value: frontends},
				{key:'web', value: web},
				{key:'aws', value: aws},
				{key:'database', value: database}
			];

const Work =({ classes })=> 
<div>
	{ 
		list.map( (item, listkey) => 
			<Card 
				key={listkey}
				className={classes.card}
			>
				<CardContent>
					<Typography className={classes.title} color="textSecondary">
		            	{item.key}
		         	</Typography>
					{ 
						item.value.map( (subitem, subkey) => 
							<Chip
								label={subitem}
								key={subkey}
								className={classes.chip}
							/>
						)
					}
				</CardContent>
			</Card>
		)
	}
</div>

Work.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Work);