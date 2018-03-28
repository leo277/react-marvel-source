import React, { Component } from 'react';

class Product extends Component {
	render(props){
		return(
			<article>
				{this.props.id}
				{this.props.title}
				<img class="article-img" src="http://placekitten.com/305/205" alt=" " />
		          <h1 class="article-title">
		            Title of article
		          </h1>
			</article>
		);
	}
}

export default Product;