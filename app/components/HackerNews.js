import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Search from './Search';
import DataList from './DataList';
import { withStyles } from 'material-ui/styles';
import { LinearProgress } from 'material-ui/Progress';
import Button from 'material-ui/Button';

/** Retrieve news from hackernews API */

const DEFAULT_QUERY = 'redux';
const DEFAULT_HPP = '10';

const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';
const PARAM_PAGE = 'page=';
const PARAM_HPP = 'hitsPerPage=';

const url = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${DEFAULT_QUERY}&${PARAM_PAGE}`;

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
		const { hits, page } = result;
		const oldHits = page !== 0 ? this.state.result.hits : [];
		const updatedHits = [ ...oldHits, ...hits ];

		this.setState({
			result: {hits: updatedHits, page}
		});
	}

	fetchSearchTopStoreis(searchTerm, page=0){
		this.setState({completed: false});
		fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`)
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
		const page = (result && result.page ) || 0;

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
						<Button variant="raised" color="secondary" onClick={ () => this.fetchSearchTopStoreis(searchTerm, page + 1)} >More</Button>
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