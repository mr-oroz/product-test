import React, { useContext, useState, useEffect, Fragment } from 'react'
import { DataContext } from '../ProductProvider'
import { Link } from 'react-router-dom'
import Rouble from "../../assets/images/ruble-sign-solid.svg"

export default function Cart() {
    const value = useContext(DataContext)
    const [selt, setSelt] = useState(true)
    const [cart, setCart] = value.cart;

    console.log(cart)




    const reduction = id => {
        cart.forEach(item => {
            if (item.productId === id) {
                item.unitRatio === 1 ? item.unitRatio = 1 : item.unitRatio -= 1;
            }
        })
        setCart([...cart])
    }
    const increase = id => {
        cart.forEach(item => {
            if (item.productId === id) {
                item.unitRatio += 1;
            }
        })
        setCart([...cart])
    }

    const removeProduct = id => {
        if (window.confirm("Do you want to delete this product?")) {
            cart.forEach((item, index) => {
                if (item.productId === id) {
                    cart.splice(index, 1)
                }
            })
            setCart([...cart])
        }
    }


    if (cart.length === 0) {
        return (
            <h2 style={{ textAlign: "center", fontSize: "5rem" }}>Корзина пуста</h2>
        )
    }
    const total = cart.reduce((prev, item) => {
        return prev + (selt ? item.priceGoldAlt : item.priceRetail) * item.unitRatio
    }, 0)
    return (
        <Fragment>
            <div className="product">
                {
                    cart.map(product => (
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
                                    <div onClick={() => { setSelt(true) }} className={"product_select" + (selt ? " product_active" : "")}>
                                        <p>За {product.unitAlt}</p>
                                    </div>
                                    <div onClick={() => { setSelt(false) }} className={"product_select" + (selt ? "" : " product_active")}>
                                        <p>За {product.unitFull}</p>
                                    </div>
                                </div>
                            </div>
                            <p className="product_price-card">
                                <span className='product_card-text'>По Карте <br />Карте</span>
                                <span className='product_gold-price'>{selt ? product.priceGoldAlt : product.priceRetailAlt}</span>
                                <span className='product_rouble'>
                                    <img className='product_svg' src={Rouble} />
                                </span>
                            </p>
                            <p className="product_price-default">
                                <span className='product_retail-price'>{selt ? product.priceRetailAlt : product.priceGoldAlt}</span>
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
                                <div className='product_count-wrapper'>
                                    <div className='product_stepper'>
                                        <input className='product_input' type="text" value={product.unitRatio} />
                                        <span className='product_up product_arrow' onClick={() => increase(product.productId)}></span>
                                        <span className='product_down product_arrow' onClick={() => reduction(product.productId)}></span>
                                    </div>
                                </div>
                                <Link>
                                    <span className='product_btn btn-cart'>
                                        <span>Купить</span>
                                    </span>
                                </Link>
                            </div>
                            <div className="delete" onClick={() => removeProduct(product.productId)}>X</div>
                        </div>
                    ))
                }
            </div >
            <div className="total">
                <h3>Total: {total} рубль</h3>
            </div>
        </Fragment>
    )
}

