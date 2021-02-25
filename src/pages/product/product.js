import React, { useContext } from 'react'
import { DataContext } from "../ProductProvider";
import './product.scss'

import ProductItem from './product-item';

function Product() {
    
    const value = useContext(DataContext)
    const [products] = value.products;
    const addCart = value.addCart

    return (
        <div className="product">
            {
                products[0].map(product => (
                    <ProductItem product={product} addCart={addCart} />
                ))
            }
        </div >
    )
}

export default Product