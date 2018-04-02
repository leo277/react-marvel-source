import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Search from './Search';
import DataList from './DataList';
import { withStyles } from 'material-ui/styles';
import { LinearProgress } from 'material-ui/Progress';
/** Retrieve news from hackernews API */

const DEFAULT_QUERY = 'redux';

const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';

const url = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${DEFAULT_QUERY}`;

const styles = {
  root: {
    flexGrow: 1,
  },
};

class HackerNews extends Component {
	constructor(props){
		super(props);
		this.state = {
			result: null,
			searchTerm: DEFAULT_QUERY,
			completed: false,
		};
		this.setSearchTopStories = this.setSearchTopStories.bind(this);
		this.fetchSearchTopStoreis = this.fetchSearchTopStoreis.bind(this);
		this.onSearchChange = this.onSearchChange.bind(this);
		this.onSearchSubmit = this.onSearchSubmit.bind(this);
		this.dismiss = this.dismiss.bind(this);
	}

	setSearchTopStories(result){
		this.setState({
			result
		});
	}

	fetchSearchTopStoreis(searchTerm){
		this.setState({completed: false});
		fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}`)
		.then(response => response.json())
		.then(result => { this.setSearchTopStories(result); this.setState({completed: true})} )
		.catch(error => error);
	}

	onSearchSubmit(event){
		const { searchTerm } = this.state;
		this.fetchSearchTopStoreis(searchTerm);
		event.preventDefault();
	}

	onSearchChange(event){
		this.setState({
			searchTerm: event.target.value,
		});
	}

	dismiss(id){
		const isNotId = item => item.objectID !== id;
		const updatedHits = this.state.result.hits.filter( isNotId );
		this.setState(
			{
				result: { ...this.state.result, hits: updatedHits }
			}
		);
	}

	componentDidMount(){
		const { searchTerm } = this.state;
		this.fetchSearchTopStoreis(searchTerm);
	}

	render(){
		const { classes } = this.props;
		const { searchTerm, result, completed } = this.state;
		return(
			<div>
				{ !completed && 
					<div className={classes.root}>
						<LinearProgress color="secondary"/>
					</div>
				}
				{ result && 
					<div>
						<Search value={searchTerm} onChange={this.onSearchChange} onSubmit={this.onSearchSubmit}>Search</Search>
						<DataList
						list={result.hits}
						onDismiss={this.dismiss}
						/>
					</div>
				}
			</div>
		);
	}
}

HackerNews.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(HackerNews);