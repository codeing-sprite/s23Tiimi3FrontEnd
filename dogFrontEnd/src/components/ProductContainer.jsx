import { useState } from 'react';
import Product from './Product';

export default function PrductContainer() {

    //todo init default
    const [ product, setProduct ] = useState();
    const [ products, setProducts ] = useState([{name: "nimi"}]);

    const removeProduct = () => {
        // api /delete
    }
    const editProduct = () => {
        // api /update
    }
    const addProduct = () => {
        // api /add
    }

    const renderProducts = products.map((item, index) => 
      <Product name={item.name}/>
    )

    return (
      <div className='productlist'>
        {renderProducts}
      </div>
    )
  }