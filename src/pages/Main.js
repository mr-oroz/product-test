import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Product from './product/product'

function Main() {
    return (
        <div className='main'>
            <Switch>
                <Route exact path="/product" component={Product} />
            </Switch>
        </div>
    )
}

export default Main
