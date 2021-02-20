import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Cart from './product/Cart'
import Details from './product/details'
import Product from './product/product'


function Main() {
    return (
        <div className='main'>
            <Switch>
                <Route exact path={'/product'}>
                    <Product />
                </Route>
              <Route  exact path={'/product/:id'}>
                  <Details/>
              </Route>
              <Route exact path={'/cart'}>
                  <Cart/>
              </Route>
            </Switch>
        </div>
    )
}

export default Main
