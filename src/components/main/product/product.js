import React, { useContext } from 'react'
import "./product.scss"
import { DataContext } from "../productProvider"

function Product() {
    const value = useContext(DataContext)
    const [products] = value.products;
    // console.log(products)

    return (
        <div className="product">
            { 
                products[0].map(product  => (
                    <div key={product.productId}>
                        <h4>{product.title}</h4>
                    </div> 
                   
                ))
              
            }
        </div>
    )
}

export default Product
