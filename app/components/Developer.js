import React from 'react';
import PropTypes from 'prop-types';
import Search from './Search';
import DataList from './DataList';
import developerData from '../data/developerData';

class Developer extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			list: developerData || [],
			searchTerm: '',
		}
		this.dismiss = this.dismiss.bind(this);
		this.onSearchChange = this.onSearchChange.bind(this);
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

	onSearchChange(event){
		this.setState({
			searchTerm: event.target.value
		});
	}

	render(){
		const { classes } = this.props;
		const { list, searchTerm } = this.state;
		return(
			<div>
				<Search value={searchTerm} onChange={this.onSearchChange} />
				<DataList list={list} pattern={searchTerm} onDismiss={this.dismiss} />
			</div>
		);
	}
}

export default Developer;