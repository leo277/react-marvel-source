import React, { Component } from 'react';
import Product from './Product';

class ProductList extends Component {
	render(){
		const Products = [
			{
			      id: 1,
			      title: 'Yellow Pail',
			      description: 'On-demand sand castle construction expertise.',
			      url: '#',
			      votes: 3,
			},
			{
			      id: 2,
			      title: 'Yellow 2',
			      description: 'sand castle construction expertise.',
			      url: '#',
			      votes: 4,
			},
				{
			      id: 3,
			      title: 'Yellow 3',
			      description: 'castle construction expertise.',
			      url: '#',
			      votes: 6,
			},

				{
			      id: 4,
			      title: 'Yellow 4',
			      description: 'expertise.',
			      url: '#',
			      votes: 8,
			}
		];
		const productComponents = Products.map( (product) => (
			<Product
				key={'product' + product.id}
				id={product.id}
				title={product.title}
			/>
		));
		return(
			<section className="cards">
				{productComponents}
			</section>
		);
	}
}

export default ProductList;