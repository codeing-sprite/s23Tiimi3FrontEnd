import { useEffect, useState } from 'react';
import Product from './Product';

export default function PrductContainer() {

	//todo init default
	const [product, setProduct] = useState();
	const [products, setProducts] = useState([{ name: "nimi" }]);

	const REST_URL = 'http://localhost:8080/';

	useEffect(() => listProducts(), [])

	const listProducts = () => {
		axios.get(`${REST_URL}restitems`)
			.then((response) => {
				setProducts(response.data);
				console.log(response.data);
			})
	}

	const removeProduct = () => {
		// api /delete

	}
	const editProduct = () => {
		// api /update
	}
	const addProduct = () => {
		// api /add
	}

	const renderProducts = products.map((item, _) =>
		<Product item={item} />
	)

	return (
		<div className='productlist'>
			{renderProducts}
			
		</div>
	)
}