import { useEffect, useState } from 'react';
import Product from './Product';
import axios from 'axios';

export default function ProductContainer() {

	//todo init default
	const [product, setProduct] = useState();
	const [products, setProducts] = useState([]);

	const REST_URL = 'http://localhost:8080';

	useEffect(() => listProducts(), [])

	const listProducts = () => {
		axios.get(`${REST_URL}/rest/items`)
			.then((response) => {
				setProducts(response.data);
				console.log(response.data);
			})
	}

	const renderProducts = products.map(item =>
		<Product key={item.id} item={item} />
	)

	return (
		<div className='productlist'>
			{renderProducts}
			
		</div>
	)
}