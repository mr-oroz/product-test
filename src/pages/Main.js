import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Cart from './product/Cart'
import Details from './product/details'
import Product from './product/product'


function Main() {
    return (
        <div className='main'>
            <Switch>
                <Route exact path="/product" component={Product} />
                <Route exact path='/product/:id' component={Details} />
                <Route path="/cart" component={Cart} />
            </Switch>
        </div>
    )
}

export default Main
