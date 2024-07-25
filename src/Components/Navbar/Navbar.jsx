import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';
import cart_icon from '../assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import SearchBar from '../SearchBar/SearchBar';

const Navbar = () => {
    const [menu, setMenu] = useState('shop');
    const [setSearchTerm] = useState('');
    const {getTotalCartItems} = useContext(ShopContext);
    const handleSearch = (term) => {
        setSearchTerm(term);
      };

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>SHOPPEE</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={() => {setMenu('shop')}}><Link style={{textDecoration: 'none'}} to= '/'>Shop</Link> {menu === 'shop' && <hr/>}</li>
                <li onClick={() => {setMenu('mens')}}><Link style={{textDecoration: 'none'}} to= '/mens'>Men</Link>{menu === 'mens' && <hr/>}</li>
                <li onClick={() => {setMenu('womens')}}><Link style={{textDecoration: 'none'}} to= '/womens'>Women</Link>{menu === 'womens' && <hr/>}</li>
                <li onClick={() => {setMenu('kids')}}><Link style={{textDecoration: 'none'}} to= '/kids'>Kid</Link>{menu === 'kids' && <hr/>}</li>
            </ul>
            <div className="nav-login-cart">
            <SearchBar onSearch={handleSearch} />
            <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    );
};

export default Navbar;  