import { useEffect, useState } from 'react';
import Product from './Product';
import axios from 'axios';

export default function ProductContainer() {

	//todo init default
	const [product, setProduct] = useState(false);
	const [products, setProducts] = useState([]);
	const [manufacturer, setManufacturer] = useState("Select manufacturer")
	const [manufacturers, setManufacturers] = useState([])
	
	const REST_URL = 'http://localhost:8080';

	useEffect(() => {
		listProducts()
		listManufacturers()
	}, [])

	const listManufacturers = () => {
		axios.get(`${REST_URL}/rest/manufacturers`)
			.then((response) => {
				setManufacturers(response.data);
				console.log(response.data);
			})
	}

	const listProducts = () => {
		axios.get(`${REST_URL}/rest/items`)
			.then((response) => {
				setProducts(response.data);
				console.log(response.data);
			})
	}

	const listManufacturersProducts = (manufacturerId) => {
		axios.get(`${REST_URL}/rest/manufacturersitems/${manufacturerId}`)
			.then((response) => {
				setProducts(response.data);
				console.log(response.data);
			})
	}

	const handleManufacturerChange = (e) => {
		console.log(e.target.value)
		setManufacturer(e.target.value)
		if (e.target.value === "Select manufacturer"){
			listProducts()
		} else {
			listManufacturersProducts(e.target.value)
		}
	}

	const renderProducts = products.map(item =>
		<Product key={item.id} item={item} setProduct={setProduct} />
	)

	const renderManufacturers = manufacturers.map(item => 
		<option key={item.id} value={item.id}>{item.name}</option>
	)

	return (
		<>
			<div className='product-list'>
				{renderProducts}
			</div>
			<select value={manufacturer} onChange={(e) => handleManufacturerChange(e)}>
				<option value={"Select manufacturer"}>Select manufacturer</option>
				{renderManufacturers}
			</select>
		</>
	)
}