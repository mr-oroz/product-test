import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { DataContext } from '../ProductProvider'
import { Link } from 'react-router-dom'
import Rouble from "../../assets/images/ruble-sign-solid.svg"
import './product.scss'

export default function Details() {
    const { id } = useParams();
    const value = useContext(DataContext)
    const [products] = value.products
    const addCart = value.addCart
    const details = products[0].filter((product, index) => {
        return product.productId === id
    })
    return (

        <div className="product">
            {
                details.map(product => (
                    <div key={product.productId} className="product_horizantal">
                        <span className="product_code">Код: {product.code}</span>
                        <div className='product_status-container'>
                            <span className='product_status'>Наличие</span>
                        </div>
                        <div className="product_photo">
                            <a href="#" className="url--link product_link">
                                <img src={product.primaryImageUrl} />
                            </a>
                        </div>
                        <div className='product_description'>
                            <a href="#" className="product_link">{product.title}</a>
                        </div>
                        <div className="product_tags">
                            <p className='product_text'>Могут понадобиться:</p>
                            <a href="#" className="product_assocProducts">{product.assocProducts}</a>
                        </div>
                        <div className='product_units'>
                            <div className="product_wrapper">
                                <div className="product_select product_active">
                                    <p>За {product.unitAlt}</p>
                                </div>
                                <div className="product_select">
                                    <p>За {product.unitFull}</p>
                                </div>
                            </div>
                        </div>
                        <p className="product_price-card">
                            <span className='product_card-text'>По Карте <br />Карте</span>
                            <span className='product_gold-price'>{product.priceGold}</span>
                            <span className='product_rouble'>
                                <img className='product_svg' src={Rouble} />
                            </span>
                        </p>
                        <p className="product_price-default">
                            <span className='product_retail-price'>{product.priceRetail}</span>
                            <span className='product_rouble'>
                                <img style={{ color: "#a7a7a7" }} className='product_svg' src={Rouble} />
                            </span>
                        </p>
                        <div className='product_price-points'>
                            <p>Можно купить за 231,75 балла</p>
                        </div>
                        <div className='product_list'>
                            <div className='product_unit-info'>
                                <div className='product_unit-desc-i'></div>
                                <div className='product_unit-desc-t'>
                                    <p>
                                        <span>Продается упаковками:</span>
                                        <span>1 {product.unit} = {product.unitRatioAlt} {product.unitAlt}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='product_count'>
                            <Link to="/cart" onClick={() => addCart(product.productId)} className='product_btn btn-cart'>
                                <span>В корзину</span>
                            </Link>
                        </div>
                    </div>
                ))
            }
        </div >
    )
}