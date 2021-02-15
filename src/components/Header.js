  
import React, {useState, useContext} from 'react'
import Menu from '../assets/images/bars-solid.svg'
import Close from '../assets/images/times-solid.svg'
import Cart from '../assets/images/cart-plus-solid.svg'
import {Link} from 'react-router-dom'
import {DataContext} from '../pages/ProductProvider'
import "./Header.scss"

export default function Header() {
    const [menu, setMenu] = useState(false)
    const value = useContext(DataContext)
    const [cart] = value.cart

    const toggleMenu = () =>{
        setMenu(!menu)
    }

    const styleMenu = {
        left: menu ? 0 : "-100%"
    }

    return (
        <header className='header'>
            <div className="menu" onClick={toggleMenu}>
                <img src={Menu} alt="" width="30" />
            </div>

            <div className="logo">
                <h1><Link to="/products">Citizen</Link></h1>
            </div>
            <ul style={styleMenu}>
                <li className='item'><Link to="/">Home</Link></li>
                <li className='item'><Link to="/product">Products</Link></li>
                <li className='item'><Link to="/">About</Link></li>
                <li className='item'><Link to="/">Contact</Link></li>
                <li className='item'><Link to="/">Login / Register</Link></li>
                <li onClick={toggleMenu} className='item'>
                    <img src={Close} alt="" width="30" className="menu" />
                </li>
            </ul>

            <div className="cart-icon">
                <span>{cart.length}</span>
                <Link to="/cart">
                    <img src={Cart} alt="" width="30" />
                </Link>
            </div>
      </header>
    )
}