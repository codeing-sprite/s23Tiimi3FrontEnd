import { useEffect, useState } from 'react';
import { Box, InputLabel, MenuItem, FormControl, Select, Card, CardActionArea, CardContent, CardMedia, Typography, Button, CardActions } from '@mui/material'
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
			.catch(err => {
				console.error(err);
			})
	}

	const listProducts = () => {
		axios.get(`${REST_URL}/rest/items`)
			.then((response) => {
				setProducts(response.data);
				console.log(response.data);
			})
			.catch(err => {
				console.error(err);
			})
	}

	const listManufacturersProducts = (manufacturerId) => {
		axios.get(`${REST_URL}/rest/manufacturersitems/${manufacturerId}`)
			.then((response) => {
				setProducts(response.data);
				console.log(response.data);
			})
			.catch(err => {
				console.error(err);
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
		<MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
	)

	return (
		<>
		{product ? 
		<div style={{height:'85%', display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
		<Card className="product" sx={{width: 400, backgroundColor: ""}}>
        <CardActionArea>
          <CardMedia 
            component="img"
            height="300"
            width="197"
            image="https://img.fruugo.com/product/2/37/208649372_max.jpg"
            alt="product img"
          />
          <CardContent>
            <Typography variant="h5" component="div">
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Color: {product.color}
            </Typography>
            <Typography gutterBottom variant="body2" color="text.secondary">
              Size: {product.size}
            </Typography>
            <Typography variant="h7">
              Price: €{product.price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="large" color="primary" onClick={() => setProduct(false)}>
              Back
            </Button>
        </CardActions>
      </Card>
	  </div> 
	  : 	
		<div>
			<Box sx={{ minWidth: 120 }}>
				<FormControl sx={{width:250, background:'white', marginLeft:'10%'}}>
					<InputLabel id="demo-simple-select-label">Manufacturer</InputLabel>
					<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={manufacturer}
					label="Manufacturer"
					onChange={handleManufacturerChange}
					>
					<MenuItem value={"Select manufacturer"}>Select manufacturer</MenuItem>
					{renderManufacturers}
					</Select>
				</FormControl>
				
				</Box>
			<div className='product-list' style={{height:'100%'}}>
			{renderProducts}
		</div>
		</div>
			}
		</>
	)
}